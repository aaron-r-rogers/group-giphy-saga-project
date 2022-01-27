import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('SEARCH_RESULTS', searchResults);//GET
    yield takeEvery('MAKE_FAVORITE', makeFavorite);//POST
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);//GET
}

// Reducer that holds our results
const searchResults = (state = [], action) => {
    if(action.type === 'SEARCH_GIF') {
        console.log('search payload:', action.payload);
        return [...state, ...action.payload]
    }
    return state;
};

function* makeFavorite (action) {
    console.log('in makeFavorite', action);

    // action.payload looks like this...
    // {
    //     image_id: '',
    //     category_id: ''
    // }

    // Post favorite to the server
    yield axios.post('/api/favorite', action.payload);

    // Run the fetchFavorites saga to get latest favs...
    yield put({
        type: 'FETCH_FAVORITES'
    });
};



// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        searchResults,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
