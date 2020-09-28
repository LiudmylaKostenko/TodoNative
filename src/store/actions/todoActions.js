import { EDIT_TODOS, DELETE_TODOS, ADD_TODOS } from '../actionTypes';

export const addTodos = todo => {
    todo.id = Date.now().toString();
    return {
        type: ADD_TODOS,
        payload: todo,
    }
};

export const editTodo = (id, title) => {
    return {
        type: EDIT_TODOS,
        payload: id,
        title: title,
    }
};

export const deleteTodoItem = id => {
    return {
        type: DELETE_TODOS,
        payload: id,
    }
};