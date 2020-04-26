import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, View } from 'react-native';
import TeaScreen from './src/screens/TeaScreen'; 
import MilkTeaScreen from './src/screens/MilkTeaScreen'; 
import FlavorScreen from './src/screens/FlavorScreen'; 
import SeasonScreen from './src/screens/SeasonScreen'; 
import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import MeScreen from './src/screens/MeScreen';
import albumData from "./src/json/albums.json";
import MenuScreen from './src/screens/MenuScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconPath;

            if (route.name === '首頁') {
              iconPath = focused
              ? require('./assets/btn_home-selected.png'):
              require('./assets/btn_home-unselected.png');
            }  else if (route.name === '菜單') {
              iconPath = focused
              ? require('./assets/btn_menu-selected.png'):
              require('./assets/btn_menu-unselected.png');
            }
            else if (route.name === '門市') {
              iconPath = focused
              ? require('./assets/btn_store-selected.png'):
              require('./assets/btn_store-unselected.png');
            } else if (route.name == '會員') {
              iconPath = focused
              ? require('./assets/btn_member-selected.png'):
              require('./assets/btn_member-unselected.png');
            }

            // You can return any component that you like here!
            return (
              <Image 
                style={{width: 24, height: 24,marginTop:8}}
                source={iconPath} 
              />
            );
          },
        })}
        tabBarOptions={{
          activeBackgroundColor:"#40230D",
          inactiveBackgroundColor:"#40230D",
          activeTintColor: '#F9D9A6',
          inactiveTintColor: '#FFF',
          
          labelStyle: {
            fontSize: 12,
            marginTop: 0,
            padding: 0,
          },
        }}
      >
        <Tab.Screen name="首頁" component={AlbumStack} />
        <Tab.Screen name="菜單" component={MenuScreen} />
        <Tab.Screen name="門市" component={MeScreen} />
        <Tab.Screen name="會員" component={SettingsScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const AlbumStack = () => {
  return (
   <Stack.Navigator>
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{
          
            headerShown: false
          }}
        />
         <Stack.Screen 
          name="Tea" 
          component={TeaScreen} 
          options={{
           
            headerShown: false
          }}
        />
       <Stack.Screen 
          name="MilkTea" 
          component={MilkTeaScreen} 
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen 
          name="Flavor" 
          component={FlavorScreen} 
          options={{
           
            headerShown: false
          }}
        />
         <Stack.Screen 
          name="Season" 
          component={SeasonScreen} 
          options={{
            headerShown: false
          }}
        />    
      </Stack.Navigator>
  );
}

export default App;