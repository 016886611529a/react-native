import {
    Text,
    Alert,
    TouchableOpacity,
  } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import { colors } from '../constants';
function UIButton(props) {
    const {onPress,title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress
      }
      style={{
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        height: 45,
        marginVertical: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected ? 'white' : 'transparent',
      }}>
      {isSelected && <Icon
        name={'check-circle'}
        style={{
          color: 'green',
          fontSize: 20,
          position: 'absolute',
          left: 10,
          top: 12,
        }}
      />}
      <Text style={{
        
         color: isSelected == true? colors.primary : 'white' , fontSize: 15}}>{title}</Text>
    </TouchableOpacity>
  );
}

export default UIButton;
