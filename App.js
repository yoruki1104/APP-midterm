import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View,AsyncStorage } from 'react-native';
import TeaScreen from './src/screens/TeaScreen'; 
import MilkTeaScreen from './src/screens/MilkTeaScreen'; 
import FlavorScreen from './src/screens/FlavorScreen'; 
import SeasonScreen from './src/screens/SeasonScreen'; 
import MemberScreen from './src/screens/MemberScreen';
import StoreScreen from './src/screens/StoreScreen';
import MenuScreen from './src/screens/MenuScreen';
import HomeScreen from './src/screens/HomeScreen';
import { SplashScreen } from 'expo';
const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const App = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);
  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer
         initialState={initialNavigationState}
         onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
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
          <Tab.Screen name="首頁" component={HomeScreen} />
          <Tab.Screen name="菜單" component={MenuStack} />
          <Tab.Screen name="門市" component={StoreScreen} />
          <Tab.Screen name="會員" component={MemberScreen} />
          
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
 
}
const MenuStack = () => {
  return (
   <Stack.Navigator>
     
        <Stack.Screen 
          name="菜單" 
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