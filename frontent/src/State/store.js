import {createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootreducer from './Reducer/Rootreducer';


const store=createStore(rootreducer,applyMiddleware(thunk))
export default store;