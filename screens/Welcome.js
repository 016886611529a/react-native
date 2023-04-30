import React, {useState,useRef} from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Platform
} from 'react-native';
import {sum2Number, substract2Number, PI} from '../utilies/Calculation';
import {images, icons,fontSizes} from '../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import {UIButton} from '../components';

function Welcome(props) {
  const index = useRef()
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: true,
    },
    {
      name: 'Business',
      isSelected: false,
    },
    {
      name: 'Individual',
      isSelected: false,
    },
  ]);
  //navigation
  const {navigation,route} = props
  //function of navigate to/back
  const {navigate,goBack}= navigation
  return (
    <View style={{backgroundColor: 'white', flex: 100}}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{flex: 100}}>
        <View
          style={{
            flex: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              justifyContent: 'flex-start',
              alignItems: 'center', 
              marginTop: Platform.OS === "ios" ? 40:0
            }}>
            <Image
              source={icons.fire}
              style={{
                width: 30,
                height: 30,
                marginLeft: 10,
                marginRight: 5,
              }}
            />
            <Text style={{color: 'white'}}>YOURCOMPANY.CO</Text>
            <View style={{flex: 1}} />
            <Icon
              name={'question-circle'}
              style={{
                fontSize: fontSizes.h2,
                marginRight: 10,
                color: 'white',
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{marginBottom: 10, color: 'white', fontSize: 14}}>
            Welcome to
          </Text>
          <Text style={{marginBottom: 10, color: 'white', fontWeight: 'bold'}}>
            YOURCOMPANY.CO !
          </Text>
          <Text style={{marginBottom: 10, color: 'white', fontSize: 13}}>
            Please select your account type
          </Text>
        </View>
        <View
          style={{
            //backgroundColor: 'purple',
            flex: 40,
          }}>
          {accountTypes.map(accountType => (
            <UIButton key={accountType.name}
              onPress={() => {
                let newAccountType = accountTypes.map(eachAccountType => {
                  return {
                    ...eachAccountType,
                    isSelected: eachAccountType.name == accountType.name,
                  };
                });
                setAccountTypes(newAccountType);
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>
        <View
          style={{
            flex: 20,
          }}>
          <UIButton onPress={()=>{
            navigate('Login')
          }} title={'Login'.toLocaleUpperCase()}></UIButton>
          <Text
            style={{
              marginBottom: 10,
              color: 'white',
              fontSize: 14,
              alignSelf: 'center',
            }}>
            Want to register new Account?
          </Text>
          <TouchableOpacity onPress={()=>{
            Alert.alert('Register')
          }}>
            <Text
              style={{
                marginBottom: 10,
                color: 'white',
                fontSize: 14,
                alignSelf: 'center',
                textDecorationLine: 'underline',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
export default Welcome;

// function Welcome(props) {
//     const {x,y} = props
//     const {person}= props
//     const {name, age,email} = person
//     const {products} = props

// return  <View style={{backgroundColor: '#fff' ,height: "100%"}}>
//             <Text style={{color: '#333', fontSize: 30}}>x= {props.x}, y= {props.y}</Text>
//             <Text style={{color: '#333', fontSize: 30}}>Tên: {name}, Tuổi: {age}, Email: {email}</Text>
//             <Image style={{width: "100%", height: "30%"}}source = {require('../Image/reactnative.png')} />
//             {products.map((product,index) =>
//                 <Text style={{color: '#333',fontSize: 20}} key={index}>
//                     {product.productName}
//                     ,{product.year}
//                 </Text>)}
//             <Text style={{fontSize: 20}}>tổng của 2 số= {sum2Number(2,3)}</Text>
//             <Text style={{fontSize: 20}}>Hiệu của 2 số= {substract2Number(10,2)}</Text>
//             <Text>PI={PI}</Text>
//         </View>

// }
