import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  function textInputChanged(textChanged: string) {
    setTodoText(textChanged);
  }

  function addToDo() {
    setTodoList((currentTodoList) => [...currentTodoList, todoText]);
  }

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput onChangeText={textInputChanged} style={styles.textInput} placeholder='Your todo'></TextInput>
            <Button onPress={addToDo} title='Add todo'/>
        </View>
        <View style={styles.todoList}>
            {todoList.map((todo, index) => <Text key={index}>{todo}</Text>)}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 20,
    flex: 1
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'blue',
    padding: 8,
    marginRight: 12,
    width: '70%'
  },
  todoList: {
    fontSize: 18,
    flex: 6
  }
});
