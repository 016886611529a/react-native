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
  Platform,
  UIManager
} from 'react-native';
import {images, icons, colors, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import { isValidPassword,isValidEmail } from '../../utilies/Validations';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
function _getColorStatus(status){
    if(status.toLowerCase().trim() =="opening soon"){
        return colors.success
    }
    else if(status.toLowerCase().trim() =="closing soon"){
        return colors.alert
    }
    else if(status.toLowerCase().trim() =="coming soon"){
        return colors.warning
    }
    return colors.success
}
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
function FoodItem(props) {
    let {name, price, socialNetwork, website, status, url} = props.data;
    const {onPress}= props
    return (
      <TouchableOpacity 
      style={{
        height: 150,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row',}}
      onPress= {onPress}>
            
            <Image
              style={{
                height: 100,
                width: 100,
                resizeMode: 'cover',
                borderRadius: 10,
                marginRight: 15,
              }}
              source={{
                uri: url,
              }}
            />
            <View style={{flex: 1, marginRight: 15}}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: fontSizes.h3,
                }}>
               {name}
              </Text>
              <View
                style={{
                  height: 1,
                  color: 'black',
                  backgroundColor: 'black',
                }}></View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h5,
                  }}>
                  Status: 
                </Text>
                <Text
                  style={{
                    color: _getColorStatus(status),
                    fontSize: fontSizes.h5,
                  }}>
                  {status}
                </Text>
              </View>
              <Text
                style={{
                  color: colors.inactive,
                  fontSize: fontSizes.h5,
                }}>
                Price: {price} $
              </Text>
              <Text
                style={{
                  color: colors.inactive,
                  fontSize: fontSizes.h5,
                }}>
                Food Type: Pizza
              </Text>
              <Text
                style={{
                  color: colors.inactive,
                  fontSize: fontSizes.h5,
                }}>
                Website: {website}
              </Text>
              <View style={{flexDirection: 'row'}}>
                {socialNetwork["facebook"]!= undefined &&<Icon
                  style={{paddingEnd: 10}}
                  name="facebook"
                  size={20}
                  color={colors.inactive}
                />}
                {socialNetwork["twitter"]!= undefined &&<Icon
                  style={{paddingEnd: 10}}
                  name="twitter"
                  size={20}
                  color={colors.inactive}
                />}
                {socialNetwork["instagram"]!= undefined &&<Icon
                  style={{paddingEnd: 10}}
                  name="instagram"
                  size={20}
                  color={colors.inactive}
                />}
              </View>
            </View>
      </TouchableOpacity>
    );
}

export default FoodItem;