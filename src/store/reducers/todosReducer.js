import {EDIT_TODOS, DELETE_TODOS, ADD_TODOS } from "../actionTypes";

const initialState = {
    allTodos: [],
};

export const todosReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_TODOS:
            return {
                ...state,
                allTodos: [{...action.payload},...state.allTodos]
            };

        case EDIT_TODOS:
            const editTodo = state.allTodos.map( todo => {
                if (todo.id === action.payload) {
                    todo.title = action.title
                }
                return todo;
            })
            return {
                ...state,
                allTodos: [...editTodo]
            };

        case DELETE_TODOS:
            return {
                ...state,
                allTodos: state.allTodos.filter(item => item.id !== action.payload)
            }

        default : return state
    }

    return state;
};