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
import OnePlus8t from './screens/OnePlus8t';
import Samsung from './screens/Samsung';
import Category from './screens/Category';
import AllMobiles from './screens/AllMobiles';
import AllTele from './screens/AllTele';
import Tele1 from './screens/Tele1';
import AllLaptops from './screens/AllLaptops';
import Lap1 from './screens/Lap1';
import AllDeals from './screens/AllDeals';
import AllEarphones from './screens/AllEarphones';
import Ears1 from './screens/Ears1';
import Notifications from './screens/Notifications';
import Search from './screens/Search';
import Recent from './screens/Recent';
import Nav from './screens/Nav';



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
        <Stack.Screen name='OnePlus' options={{headerShown: false}} component={OnePlus8t} />
        <Stack.Screen name='Samsung' options={{headerShown: false}} component={Samsung} />
        <Stack.Screen name='Category' options={{headerShown: false}} component={Category} />
        <Stack.Screen name='AllMobiles' options={{headerShown: false}} component={AllMobiles} />
        <Stack.Screen name='AllTele' options={{headerShown: false}} component={AllTele} />
        <Stack.Screen name='Tele1' options={{headerShown: false}} component={Tele1} />
        <Stack.Screen name='AllLap' options={{headerShown: false}} component={AllLaptops} />
        <Stack.Screen name='Lap1' options={{headerShown: false}} component={Lap1} />
        <Stack.Screen name='AllDeals' options={{headerShown: false}} component={AllDeals} />
        <Stack.Screen name='AllEars' options={{headerShown: false}} component={AllEarphones} />
         <Stack.Screen name='Ears1' options={{headerShown: false}} component={Ears1} />
         <Stack.Screen name='notifications' options={{headerShown: false}} component={Notifications} />
         <Stack.Screen name='search' options={{headerShown: false}} component={Search} />
         <Stack.Screen name='recent' options={{headerShown: false}} component={Recent} />
         <Stack.Screen name='nav' options={{headerShown: false}} component={Nav} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}