import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform
} from 'react-native';
import {user as UserRepository, population as PopulationRepository} from '../reponsitories'
//import {SafeAreaView} from 'react-navigation'
function Profile(props) {
    UserRepository.getUserDetails()
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'green'
        }}>
            <Text>This is Profile</Text>
        </View>
    );
}

export default Profile;