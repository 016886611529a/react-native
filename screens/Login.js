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
  Keyboard
} from 'react-native';
import {images, icons, colors, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
function Login(props) {
    const [keyboardIsShow,setkeyboardIsShow] = useState(false);
    useEffect(()=>{
        Keyboard.addListener('keyboardDidShow', ()=>{
            setkeyboardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', ()=>{
            setkeyboardIsShow(false)
        })
    })
  return (
        <KeyboardAvoidingView
          style={{
            flex: 100,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flex: 35,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: fontSizes.h2,
                fontWeight: 'bold',
                width: '50%',
              }}>
              Already have an Account?
            </Text>
            <Image
              tintColor={colors.primary}
              source={images.computer}
              style={{width: 100, height: 100, alignSelf: 'center'}}
              fe
            />
          </View>
          <View style={{flex: 25}}>
            <View
              style={{
                marginHorizontal: 20,
              }}>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: fontSizes.h5,
                }}>
                Email:
              </Text>
              <TextInput
                style={{color: 'black'}}
                placeholder="example@gmail.com"
                placeholderTextColor={colors.placeholder}
              />
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: colors.primary,
                  marginBottom: 10
                }}></View>
            </View>
            <View
              style={{
                marginHorizontal: 20,
              }}>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: fontSizes.h5,
                }}>
                PassWord:
              </Text>
              <TextInput
                style={{color: 'black'}}
                secureTextEntry={true}
                placeholder="Enter your password"
                placeholderTextColor={colors.placeholder}
              />
                 <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: colors.primary,
                  marginBottom: 10
                }}></View>
            </View>
          
          </View>
          {keyboardIsShow== false && <View style={{flex: 15}}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Press login');
              }}
              style={{
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                alignSelf: 'center',
                borderRadius: 18,
              }}>
              <Text
                style={{
                  padding: 10,
                  fontSize: fontSizes.h5,
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Press register');
              }}
              style={{
                padding: 5,
              }}>
              <Text
                style={{
                  color: colors.primary,
                  padding: 8,
                  fontSize: fontSizes.h5,
                  alignSelf: 'center',
                }}>
                New user? Register now
              </Text>
            </TouchableOpacity>
          </View>}
          <View
            style={{
              flex: 25,
            }}>
            <View
              style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: 'black',
                  flex: 1,
                }}></View>
              <Text
                style={{
                  color: 'black',
                  padding: 8,
                  fontSize: fontSizes.h5,
                  alignSelf: 'center',
                }}>
                Use other methods ?
              </Text>
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: 'black',
                  flex: 1,
                }}></View>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'center'}}>
              <Icon name="facebook" size={40} color={colors.facebook} />
              <View style={{width: 10}}></View>
              <Icon name="google" size={40} color={colors.google} />
            </View>
          </View>
    </KeyboardAvoidingView>
  );
}

export default Login;
