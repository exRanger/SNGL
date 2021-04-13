import {applyMiddleware, createStore} from 'redux'
import {reducers} from './reducers'
import createSagaMiddleWare from 'redux-saga'
import {watchLoadData} from '../saga/sagas'

const saga = createSagaMiddleWare();

const store = createStore(
    reducers,
    applyMiddleware(saga)    
    );

saga.run(watchLoadData)

export {store}