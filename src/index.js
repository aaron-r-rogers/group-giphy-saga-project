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
// const sagaMiddleware = createSagaMiddleware();

// // Pass rootSaga into our sagaMiddleware
// sagaMiddleware.run(rootSaga);


// Create the rootSaga generator function
function* rootSaga() {
    // does searchResults need to be a Saga or just a reducer?
    yield takeEvery('GET_SEARCH', getSearch);//GET
    yield takeEvery('MAKE_FAVORITE', makeFavorite);//POST
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);//GET
    yield takeEvery('FETCH_CATEGORIES', fetchCategories);//GET
};

function* getSearch (action) {
    try{
    console.log('made it to getSearch');
    let response = yield axios.get('/search', {params: {q: action.payload}});
    console.log('getSearch response.data is:', response.data);
    //send data to searchReducer
    yield put({
        type: 'SEARCH_GIF',
        payload: response.data
    });
    }
    catch(err) {
        console.log('getSearch failed', err);
        // this reducer doesn't exist yet; could
        // put the error there to be rendered in the DOM
        yield put({
            type: 'SET_ERROR',
            payload: err
        })
    }
};

// Reducer that holds our results
const searchResults = (state = [], action) => {
    if(action.type === 'SEARCH_GIF') {
        console.log('search payload:', action.payload);
        return action.payload
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

function* fetchFavorites () {
    try{
    console.log('made it to fetchFavorites');
    let response = yield axios.get('/api/favorite');
    console.log('index.js fetchFavorites response.data is:', response.data);
    //send data to favoritesReducer
    yield put({
        type: 'SET_FAVORITES',
        payload: response.data
    });
    }
    catch(err) {
        console.log('fetchFavorites failed', err);
        // this reducer doesn't exist yet; could
        // put the error there to be rendered in the DOM
        yield put({
            type: 'SET_ERROR',
            payload: err
        })
    }
};

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return [...state, ...action.payload];
        default:
            return state;
    }
};

function* fetchCategories () {
    try{
    console.log('made it to fetchCategories');
    let response = yield axios.get('/api/category');
    console.log('index.js fetchCategories response.data is:', response.data);
    //send data to categoriesReducer
    yield put({
        type: 'SET_CATEGORIES',
        payload: response.data
    });
    }
    catch(err) {
        console.log('fetchCategories failed', err);
        // this reducer doesn't exist yet; could
        // put the error there to be rendered in the DOM
        yield put({
            type: 'SET_ERROR',
            payload: err
        })
    }
};

// Reducer that holds our results
const categoriesReducer = (state = [], action) => {
    if(action.type === 'SET_CATEGORIES') {
        console.log('categoriesReducer payload:', action.payload);
        return action.payload
    }
    return state;
};


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        searchResults,
        favoritesReducer,
        categoriesReducer
    }),
    // Add sagaMiddleware to our store
    // applyMiddleware(sagaMiddleware, logger),
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
