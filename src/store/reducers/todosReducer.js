import {LOAD_TODOS} from "../actionTypes";

const initialState = {
    allTodos: [],
};

export const todoReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case LOAD_TODOS: return {
            ...state, allTodos: action.payload
        }

        default : return state
    }

    return state;
};