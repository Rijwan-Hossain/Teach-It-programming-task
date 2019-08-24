import {combineReducers} from 'redux'; 
import todoReducer from './todoReducer';
import fetchedDataReducer from './fetchedDataReducer';

const rootReducer = combineReducers({
    todos: todoReducer, 
    fetchedTodos: fetchedDataReducer
}) 

export default rootReducer; 