import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home/HomeScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/** Home Screen */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/** Login Screen */}
        <Stack.Screen name="Login" component={LoginScreen} />

        {/** Profile Screen */}
        <Stack.Screen name="Profile" component={ProfileScreen} />

        {/** Register Screen */}
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
