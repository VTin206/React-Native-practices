import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.myText}>This is my first project</Text>
      <Text style={styles.myText}>hello world</Text>
      <Button title="Press me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    color: '#111',
    fontSize: 24,
  },
  myText: {
    margin: 20,
    borderWidth: 2,
    borderColor: 'green',
    padding: 10,
    color: 'red'
  }
});
