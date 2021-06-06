/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from './components/Card';

const App = () => {
  const [total, setTotal] = useState(0);
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const newTodoHandler = () => {
    if (inputText.trim().length > 0) {
      setTotal(total => total + 1);
      setTodos(todos => [inputText, ...todos]);
      setInputText('');
    }
  };

  const deleteTodoHandler = id => {
    setTotal(total => total - 1);
    setTodos(todos => todos.filter((todo, index) => index !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.information}>
        <Text style={styles.information_text}>Yapılacaklar</Text>
        <Text style={styles.information_total}>{total}</Text>
      </View>
      <View style={styles.todos}>
        <FlatList
          data={todos}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            <Card todo={item} remove={() => deleteTodoHandler(index)} />
          )}
        />
      </View>
      <View style={styles.addTodo}>
        <TextInput
          style={styles.inputText}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Yapılacak..."
          placeholderTextColor="#707375"
        />
        <TouchableOpacity
          style={[
            styles.saveButton,
            {backgroundColor: inputText.length > 0 ? '#FFA500' : '#808080'},
          ]}
          onPress={newTodoHandler}>
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  information_text: {
    color: '#FFA500',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  information_total: {
    color: '#FFA500',
    fontSize: 26,
    fontWeight: 'bold',
  },
  todos: {
    flex: 10,
  },
  addTodo: {
    flex: 2,
    padding: 10,
    backgroundColor: '#37474F',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: '#687e89',
    padding: 0,
    marginVertical: 5,
    fontSize: 18,
    color: '#fff',
  },
  saveButton: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default App;
