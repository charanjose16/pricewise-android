import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import CategoriesScreen from './CategoriesScreen';
import OfferScreen from './OfferScreen';
import ProfileScreen from './ProfileScreen';
import RecentScreen from './RecentScreen';

const HomeName = "Home";
const CategoriesName = "Categories";
const OfferName = "Offer";
const ProfileName = "Profile";
const RecentName = "Recent";

const Tab = createBottomTabNavigator();

export default class MainContainer extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={HomeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === HomeName) {
                iconName = focused ? 'home' : 'home-outline';
              }
              else if(rn=== CategoriesName){
                iconName = focused ? 'categories' : 'categories-outline';
              }
              return <Ionicons name={iconName} size={size} color={color}/>

            
            },
          })}
        >
          <Tab.Screen name={HomeName} component={HomeScreen} />
          <Tab.Screen name={CategoriesName} component={CategoriesScreen} />
          <Tab.Screen name={OfferName} component={OfferScreen} />
          <Tab.Screen name={ProfileName} component={ProfileScreen} />
          <Tab.Screen name={RecentName} component={RecentScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
