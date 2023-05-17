// import *as redux from 'redux'
import {createStore,applyMiddleware,compose} from "redux";
import reducer from './reducer.js'
import thunkMiddleware from 'redux-thunk'
import saga from './saga'
import createSagaMiddleware from 'redux-saga'

// composeEnhancers函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
const sagaMiddleware=createSagaMiddleware()
const storeEnhancer=applyMiddleware(thunkMiddleware,sagaMiddleware)
const store=createStore(reducer,composeEnhancers(storeEnhancer))
sagaMiddleware.run(saga)
export default store