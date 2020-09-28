import { combineReducers } from 'redux';
import { todosReducer } from './reducers/todosReducer';

export const rootReducer = combineReducers({
    todo: todosReducer,
});
