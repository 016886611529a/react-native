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
  ScrollView,
  FlatList,
  Switch,
  SafeAreaView,
} from 'react-native';
import {images, icons, colors, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import { UIHeader } from '../components';

function Settings(props) {
    const [isEnabledLockApp,setIsEnabledLockApp] = useState(true);
    const [isUseFingerPrint,setIsUseFingerPrint] = useState(false);
    const [isEnabledChangePassword,setIsEnabledChangePassword] = useState(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <UIHeader title={'Setting'} />
      <ScrollView>
        <View
          style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'red', paddingLeft: 10}}>Common</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            style={{marginRight: 5, marginLeft: 10}}
            name="globe"
            size={30}
            color={'black'}
          />
          <Text style={{color: 'black', paddingLeft: 10}}>Language</Text>
          <View style={{flex: 1}}></View>
          <Text style={{color: 'black', paddingEnd: 10, opacity: 0.5}}>
            English
          </Text>
          <Icon
            style={{paddingEnd: 10}}
            name="chevron-right"
            size={30}
            color={'black'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            style={{marginRight: 5, marginLeft: 10}}
            name="cloud"
            size={28}
            color={'black'}
          />
          <Text style={{color: 'black', paddingLeft: 10}}>Environment</Text>
          <View style={{flex: 1}}></View>
          <Text style={{color: 'black', paddingEnd: 10, opacity: 0.5}}>
            Productions
          </Text>
          <Icon
            style={{paddingEnd: 10}}
            name="chevron-right"
            size={30}
            color={'black'}
          />
        </View>
        <View
          style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'red', paddingLeft: 10}}>Account</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            style={{marginRight: 5, marginLeft: 10}}
            name="phone"
            size={28}
            color={'black'}
          />
          <Text style={{color: 'black', paddingLeft: 10}}>Phone number</Text>
          <View style={{flex: 1}}></View>
          <Icon
            style={{paddingEnd: 10}}
            name="chevron-right"
            size={30}
            color={'black'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            style={{marginRight: 5, marginLeft: 10}}
            name="envelope"
            size={28}
            color={'black'}
          />
          <Text style={{color: 'black', paddingLeft: 10}}>Email</Text>
          <View style={{flex: 1}}></View>
          <Icon
            style={{paddingEnd: 10}}
            name="chevron-right"
            size={30}
            color={'black'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            style={{marginRight: 5, marginLeft: 10}}
            name="sign-out-alt"
            size={28}
            color={'black'}
          />
          <Text style={{color: 'black', paddingLeft: 10}}>Sign out</Text>
          <View style={{flex: 1}}></View>
          <Icon
            style={{paddingEnd: 10}}
            name="chevron-right"
            size={30}
            color={'black'}
          />
        </View>
        <View
          style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'red', paddingLeft: 10}}>Security</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            style={{marginRight: 5, marginLeft: 10}}
            name="door-closed"
            size={28}
            color={'black'}
          />
          <Text style={{color: 'black', paddingLeft: 10}}>
            Lock app in background
          </Text>
          <View style={{flex: 1}}></View>
          <Switch style={{marginEnd: 5}}
            trackColor={{false: colors.inactive, true: colors.primary}}
            thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={()=>{
                setIsEnabledLockApp(!isEnabledLockApp)
            }}
            value={isEnabledLockApp}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            style={{marginRight: 5, marginLeft: 10}}
            name="fingerprint"
            size={28}
            color={'black'}
          />
          <Text style={{color: 'black', paddingLeft: 10}}>
            You fingerprint
          </Text>
          <View style={{flex: 1}}></View>
          <Switch style={{marginEnd: 5}}
            trackColor={{false: colors.inactive, true: colors.primary}}
            thumbColor={isUseFingerPrint ? colors.primary : colors.inactive}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={()=>{
                setIsUseFingerPrint(!isUseFingerPrint)
            }}
            value={isUseFingerPrint}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            style={{marginRight: 5, marginLeft: 10}}
            name="lock"
            size={28}
            color={'black'}
          />
          <Text style={{color: 'black', paddingLeft: 10}}>
            Change password
          </Text>
          <View style={{flex: 1}}></View>
          <Switch style={{marginEnd: 5}}
            trackColor={{false: colors.inactive, true: colors.primary}}
            thumbColor={isEnabledChangePassword ? colors.primary : colors.inactive}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={()=>{
                setIsEnabledChangePassword(!isEnabledChangePassword)
            }}
            value={isEnabledChangePassword}
          />
        </View>
        <View
          style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'red', paddingLeft: 10}}>Miss</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            style={{marginRight: 5, marginLeft: 10}}
            name="file-alt"
            size={30}
            color={'black'}
          />
          <Text style={{color: 'black', paddingLeft: 10}}>Term of Service</Text>
          <View style={{flex: 1}}></View>
          <Icon
            style={{paddingEnd: 10}}
            name="chevron-right"
            size={30}
            color={'black'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Icon
            style={{marginRight: 5, marginLeft: 10}}
            name="passport"
            size={30}
            color={'black'}
          />
          <Text style={{color: 'black', paddingLeft: 10}}>Open source licenses</Text>
          <View style={{flex: 1}}></View>
          <Icon
            style={{paddingEnd: 10}}
            name="chevron-right"
            size={30}
            color={'black'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Settings;