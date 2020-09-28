import React from 'react';
import { FlatList, View } from 'react-native';
import { AddTodo } from "../components/AddTodo";
import { TodoItem } from "../components/TodoItem";

export const MainScreen = ({ addTodo, todos, removeTodo, onEditHandler }) => {
    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            <FlatList
                keyboardShouldPersistTaps='always'
                keyExtractor={ item => item.id.toString()}
                data={todos}
                renderItem={({item}) =>
                    <TodoItem
                        item={item}
                        onRemoveItem={removeTodo}
                        onEdit={onEditHandler}
                    />
                }
            />
        </View>
    );
};
