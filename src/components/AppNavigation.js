import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Navbar } from './Navbar';
import { MainScreen } from "../screens/MainScreen";
import { EditTodoScreen } from "../screens/EditTodoScreen";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoItem, addTodos, editTodo } from '../store/actions/todoActions';
import { AppContainer } from '../styledComponents';

export const AppNavigation = () => {

    const dispatch = useDispatch();
    const allTodos = useSelector(state => state.todo.allTodos);

    const [todoId, setTodoId] = useState(null);

    const addTodo = title => {
        const todo = {
            title:title
        };
        dispatch(addTodos(todo));
    };

    const removeTodo = id => {

        const todo = allTodos.find( task => task.id === id);

        Alert.alert(
            'Delete todoitem',
            `Are you sure want to delete ${todo.title}?`,
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    style: 'destructive',
                    onPress: () => {
                        dispatch(deleteTodoItem(id));
                    }
                },
            ],
            {cancelable: false}
        );

    };

    const updateTodoItem = (id, title) => {
        dispatch(editTodo(id, title));
    };


    let typeScreen = (
        <MainScreen
            todos={allTodos}
            addTodo={addTodo}
            removeTodo={removeTodo}
            onEditHandler={setTodoId}
        />
    );

    if (todoId) {
        const selectedItem = allTodos.find( todo => todo.id === todoId);
        typeScreen = (
            <EditTodoScreen
                item={selectedItem}
                backHandler={() => setTodoId(null)}
                onSaveValue={updateTodoItem}
            />
        );
    }

    return (
        <View>
            <Navbar title='Todo application'/>
            <AppContainer>
                {typeScreen}
            </AppContainer>
        </View>
    );
};
