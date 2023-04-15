/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Welcome,Login} from './screens';
import {name as appName} from './app.json';

let fakedProducts = [
    {
        productName: 'iphong 10',
        year: 2018,
    },
    {
        productName: 'iphong 11',
        year: 2020,
    },
    {
        productName: 'iphong 12',
        year: 2021,
    },
    {
        productName: 'redmi note 8',
        year: 2017,
    }
]
    // AppRegistry.registerComponent(appName, () => 
    //     () => <Welcome
    //     x={1} 
    //     y={2}
    //     person={{
    //         name: 'long',
    //         age: 18,
    //         email: 'long@gmail.com'
    //             }}
    //     products={fakedProducts}
    //     />);

      AppRegistry.registerComponent(appName, () => 
        () => <Welcome
        
        />);