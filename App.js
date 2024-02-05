import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';

import OfferScreen from './screens/OfferScreen';
import ProfileScreen from './screens/ProfileScreen';
import RecentScreen from './screens/RecentScreen';
import OnePlus8t from './screens/OnePlus8t';
import Samsung from './screens/Samsung';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name='Welcome' options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name='Signup' options={{headerShown: false}} component={SignupScreen} />
        <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name='Offer' options={{headerShown: false}} component={OfferScreen} />
        <Stack.Screen name='Profile' options={{headerShown: false}} component={ProfileScreen} />
        <Stack.Screen name='Recent' options={{headerShown: false}} component={RecentScreen} />
        <Stack.Screen name='OnePlus' options={{headerShown: false}} component={OnePlus8t} />
        <Stack.Screen name='Samsung' options={{headerShown: false}} component={Samsung} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}