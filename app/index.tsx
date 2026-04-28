import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, StyleSheet, Text, View } from 'react-native';

import DetailList from '../components/DetailList';

const Tab = createBottomTabNavigator();

const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('data stored successfully');
  } catch (err) {
    console.error('error when store data', err);
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log('data retrieved successfully', value);
  } catch (err) {
    console.log('error when get data', err);
  }
};

function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Async Storage</Text>
      <Button
        onPress={() => {
          storeData('myName', 'Van Tin');
        }}
        title="Store Data"
      />
      <Button
        onPress={() => {
          getData('myName');
        }}
        title="Get Data"
      />
    </View>
  );
}

function DetailsScreen() {
  return <DetailList />;
}

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'blue',
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Details') {
            iconName = 'list';
          }

          return <Ionicons color={color} name={iconName} size={size} />;
        },
        tabBarInactiveTintColor: 'grey',
      })}
    >
      <Tab.Screen component={HomeScreen} name="Home" />
      <Tab.Screen component={DetailsScreen} name="Details" />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    gap: 12,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
