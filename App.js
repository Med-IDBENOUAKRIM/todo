import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View,ScrollView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItems from './components/TodoItems';

export default function App() {
  
  const [todos, setTodos] = useState([
    {text: 'Build portfoli', key: 1},
    {text: 'Create an app', key: 2},
    {text: 'Drink a coffee', key: 3},
    {text: 'Watch a movie', key: 4},
    {text: 'Walk', key: 5},
  ])

  const pressHandler = key => {
    setTodos(todo => {
      return todo.filter(item => item.key !== key);
    })
  }

  const submitHandler = text => {
    if(text.length > 3) {
      setTodos([{ text: text, key: Math.random().toString() }, ...todos]);
    } else {
      Alert.alert('Attention', "Your todo must be more than 3 chars", [
        {
          text: 'Okey', onPress: () => console.log('close')
        }
      ])
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}} >
      <View style={styles.container}>
        <Header />
          <AddTodo submitHandler={submitHandler} /> 
          <View style={styles.content} >
            <View style={styles.list} >
              <FlatList 
                data={todos}
                renderItem={({ item }) => (
                  <TodoItems item={item} 
                    pressHandler={pressHandler} 
                  />
                )}
              />
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 25,
    flex: 1,
  },
  list: {
    flex: 1,
    marginBottom: 15,
  }
});
