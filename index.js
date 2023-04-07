/**
 * @format
 */
import React from 'react';
import { Text } from 'react-native';
import {AppRegistry} from 'react-native';
import MainScreen from './screens/MainScreen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainScreen);
