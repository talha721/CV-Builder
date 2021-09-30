import { createStore, applyMiddleware } from 'redux'
import thunk  from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import combineReducers from "./Reducers/combineReducer";

export default createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)));