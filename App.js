import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './Navbar';
import { MainScreen } from "../screens/MainScreen";
import { EditTodoScreen } from "../screens/EditTodoScreen";
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from '../store/actions/todoActions';
// import { DATA } from './src/Data';

export const App = () => {

  const dispatch = useDispatch();
  const allTodos = useSelector(state => state.todo.allTodos)


  useEffect(() => {
      dispatch(loadTodos())
  }, [dispatch]);

  const [todos, setTodos] = useState([
      // {id: '1', title: 'learn react-native'},
      // {id: '2', title: 'learn redux'},
      {allTodos}
  ]);

  const [todoId, setTodoId] = useState(null);

  const addTodo = title => {
      // const newTodo ={
      //     id: Date.now().toString(),
      //     title,
      // }
      setTodos(prev => [...prev,
          {
              id: Date.now().toString(),
              title,
          }
      ])
  };

  const removeTodo = id => {

      const todo = todos.find( task => task.id === id);

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
                      setTodos(prev => prev.filter(todo => todo.id !== id))}
              },
          ],
          {cancelable: false}
          );

  };

  const updateTodoItem = (id, title) => {
    setTodos(old => old.map (todo => {
        if (todo.id === id) {
            todo.title = title
        }
        return todo;
    }))
  };

  let typeScreen = (
      <MainScreen
          todos={todos}
          addTodo={addTodo}
          removeTodo={removeTodo}
          onEditHandler={setTodoId}
          // onEditHandler={ id => {setTodoId(id)}}
      />
  );

  if (todoId) {
      const selectedItem = todos.find( todo => todo.id === todoId);
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
           <View style={styles.container}>
               {typeScreen}
           </View>
        </View>
  );
};


const styles = StyleSheet.create({
    container: {
        paddingVertical:10,
    },
});