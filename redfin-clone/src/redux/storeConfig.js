import { combineReducers, createStore } from 'redux';
import loggedReducer from './ducks/logger';

const reducer = combineReducers({
    userlogged: loggedReducer
})


const store = createStore(reducer);

export default store;