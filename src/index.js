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

// // Create the rootSaga generator function
// function* rootSaga() {
//     yield takeEvery('FETCH_IMAGE', fetchImage);
// }

// const images {
//     id: ''
// }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        
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
