import * as React from "react"
import {Settings,ProductGridView,FoodList} from '../screens'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {images, icons, colors, fontSizes} from '../constants';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Welcome,Login,Register} from '../screens'
import UITab from "./UITad";
const Stack= createNativeStackNavigator()
function App(props) {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UITab" screenOptions={{headerShown: false}}>
                <Stack.Screen name={"Welcome"} component={Welcome}/>
                <Stack.Screen name={"Login"} component={Login}/>
                <Stack.Screen name={"Register"} component={Register}/>
                <Stack.Screen name={"UITab"} component={UITab}/>
            </Stack.Navigator>
        </NavigationContainer>
     );
}

export default App;