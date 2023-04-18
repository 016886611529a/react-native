
// yarn add react-navigation
// yarn add react-native-safe-area-context 
// yarn add @react-navigation/bottom-tabs
// yarn add @react-navigation/native
// yarn add @react-navigation/native-stack
import React, {useState, useRef, useEffect} from 'react';
import {Settings,ProductGridView,FoodList,Profile} from '../screens'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {images, icons, colors, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab= createBottomTabNavigator()
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: "white",
  tabBarInactiveTintColor: colors.inactive,
  tabBarActiveBackgroundColor: colors.primary,
  tabBarInactiveBackgroundColor: colors.primary,
  tabBarIcon: ({focused, color, size}) => {
    let screenName= route.name
    let iconName ="facebook";
    if(screenName == "ProductGridView"){
        iconName ="bars"
    }
    else if(screenName == "FoodList"){
        iconName ="bacon"
    }
    else if(screenName == "Settings"){
        iconName ="wrench"
    }
    else if(screenName == "Profile"){
      iconName ="user"
  }
    return (
      <Icon
        name= {iconName}
        size={25}
        color={focused ? 'white' : colors.inactive}
      />
    );
  },
  tabBarOptions: {
    style: {
        backgroundColor: colors.primary
    }
  }
});
function UITab(props) {
    return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name={'ProductGridView'}
          component={ProductGridView}
          options={{
            tabBarLabel: 'Product',
          }}
        />
        <Tab.Screen
          name={'FoodList'}
          component={FoodList}
          options={{
            tabBarLabel: 'Foods',
          }}
        />
        <Tab.Screen name={'Settings'} component={Settings} />
        <Tab.Screen
          name={'Profile'}
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    );
}

export default UITab;