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
import {images, icons, colors, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import { isValidPassword,isValidEmail } from '../utilies/Validations';
function Login(props) {
    const [keyboardIsShow,setkeyboardIsShow] = useState(false);

    const[errorEmail,setErrorEmail] = useState('');
    const[errorPassword,setErrorPassword] = useState('');
    const[email,setEmail] = useState('long@gmail.com');
    const[password,setPassword] = useState('123123');
    useEffect(()=>{
        Keyboard.addListener('keyboardDidShow', ()=>{
            setkeyboardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', ()=>{
            setkeyboardIsShow(false)
        })
    })
    const isValidOk = () =>
        email.length > 0 &&
          password.length > 0 &&
          isValidEmail(email) == true &&
          isValidPassword(password) == true;
  //navigation
  const {navigation,route} = props
  //function of navigate to/back
  const {navigate,goBack}= navigation  
  return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
          style={{
            flex: 100,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flex: 30,
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
          <View style={{flex: 30}}>
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
                onChangeText={(text)=>{
                    if (isValidEmail(text) == false) {
                      setErrorEmail('Email not in correct format');
                    } else { 
                      setErrorEmail('');
                    }
                    setEmail(text)
                }}
                style={{color: 'black'}}
                value={email}
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
                <Text style={{color: 'red', marginBottom: 15} }>{errorEmail}</Text>
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
              onChangeText={(text)=>{
                if (isValidPassword(text) == false) {
                    setErrorPassword('Password must be at least 3 character');
                  } else { 
                    setErrorPassword('');
                  }
                setPassword(text)
            }}
                style={{color: 'black'}}
                value={password}
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
                <Text style={{color: 'red',marginBottom: 15}}>{errorPassword}</Text>
            </View>
          
          </View>
          {keyboardIsShow== false && <View style={{flex: 15}}>
            <TouchableOpacity
                disabled={isValidOk ()== false}
              onPress={() => {
                navigate("UITab")
              }}
              style={{
                backgroundColor: isValidOk() == true ? colors.primary : colors.inactive,
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
                  color: 'white'
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
          {keyboardIsShow== false && <View
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
          </View>}
    </KeyboardAvoidingView>
  );
}

export default Login;
