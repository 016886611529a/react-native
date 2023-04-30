
// yarn add react-navigation
// yarn add react-native-safe-area-context 
// yarn add @react-navigation/bottom-tabs
// yarn add @react-navigation/native
// yarn add @react-navigation/native-stack
import React, {useState, useRef, useEffect} from 'react';
import {Settings,ProductGridView,FoodList,Profile} from '../screens'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {images, icons, colors, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native';
Icon.loadFont();
const Tab= createBottomTabNavigator()
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: "white",
  tabBarInactiveTintColor: colors.inactive,
  tabBarActiveBackgroundColor: colors.primary,
  tabBarInactiveBackgroundColor: colors.primary,
  tabBarBackground: () => (
    <View style={{backgroundColor: colors.primary,flex: 1}}></View>
  ),
  tabBarIcon: ({focused, color, size}) => {
    let screenName= route.name
    let iconName ="facebook";
    if(screenName == "ProductGridView"){
        iconName ="bars"
    }
    else if(screenName == "FoodList"){
        iconName ="cutlery"
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
            tabBarLabelStyle: {
              fontSize: fontSizes.h5
            }
          }}
        />
        <Tab.Screen
          name={'FoodList'}
          component={FoodList}
          options={{
            tabBarLabel: 'Foods',
            tabBarLabelStyle: {
              fontSize: fontSizes.h5
            }
          }}
        />
        <Tab.Screen 
        name={'Settings'} 
        component={Settings} 
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {
            fontSize: fontSizes.h5
          }
        }}/>
        <Tab.Screen
          name={'Profile'}
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle: {
              fontSize: fontSizes.h5
            }
          }}
        />
      </Tab.Navigator>
      
    );
}

export default UITab;