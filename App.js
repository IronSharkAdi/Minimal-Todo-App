import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Platform, TextInput, Keyboard, SafeAreaView, FlatList } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  const handleTodos = () => {
    console.log(task)
    Keyboard.dismiss()
    if (!todos.includes(task) && task != "") {
      setTodos([...todos, task])
    }
    console.log(todos)
    setTask("")
  }

  const renderItem = ({ item, index }) => (
    <TouchableOpacity key={index} onPress={() => removeTodos(index)}>
      <Task text={item} />
    </TouchableOpacity>
  );

  const removeTodos = (index) => {
    let itemsCopy = [...todos];
    itemsCopy.splice(index, 1);
    setTodos(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Today's todos</Text>
        <View style={styles.todos}>
          {/* <Task text={"Go on a walk"} />
              <Task text={"Go for a shopping"} /> */}
          <SafeAreaView>
            <FlatList
              data={todos}
              renderItem={renderItem}
              keyExtractor={item => item}
            />
          </SafeAreaView>
          {/* {todos.map((item , index) =>{
                  return (

                  )
              })} */}
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.lastLineWrapper}>
        <TextInput style={styles.inputField} placeholder={"Write a Task"} value={task} onChangeText={e => setTask(e)} />
        <TouchableOpacity onPress={() => handleTodos()}>
          <View style={styles.plusBtnView} >
            <Text style={styles.plusBtnSymbol} >+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  textContainer: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  todos: {
    marginTop: 30
  },


  lastLineWrapper: {
    position: 'absolute',
    bottom: 40,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputField: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250,
  },
  plusBtnView: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusBtnSymbol: {

  },

});
