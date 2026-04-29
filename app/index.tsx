import { fetchPosts } from '@/networking/apiClient';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, View } from 'react-native';
import DetailList from '../components/DetailList';
const HomeScreen = () => (
  //return <HomeTabView/>
  //<View>
  //  <Button 
  //    title='Store Data'
  //    onPress={() => {
  //    storeData('myName', 'Van Tin');
  //    }}
  //  />

  //<Button
  //    title='Get Data'
  //    onPress={() => {
  //      getData('myName');
  //    }}
  //  />
  //</View>
  <View>
    <Button
      title='press me'
      onPress={() => {
        fetchPosts();
      }}
    />
  </View>
)
 
function DetailsScreen() {
  return (
    <DetailList/>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Details') {
            iconName = 'list';
          }

          return <Ionicons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'grey'
      })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

//Hàm lưu trữ dữ liệu
const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('data installed sucessfully');
  } catch(err) {
    console.error('error when store data', err);
  }
}

//Hàm lấy dữ liệu
const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log('data retrieved sucessfully', value);
  } catch(err) {
    console.log('error when get data', err);
  }
}
