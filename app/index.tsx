import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your todo'></TextInput>
            <Button title='Add todo'/>
        </View>
        <View>
            <Text>The todo List</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100
  },
  inputContainer: {
    flexDirection: 'row'
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'blue',
    padding: 8,
    marginRight: 20,
    width: '70%'
  }
});
