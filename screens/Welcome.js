import React from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {sum2Number, substract2Number, PI} from '../utilies/Calculation';
import {images, icons} from '../constants/index';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
function Welcome(props) {
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
            <Image
              source={icons.question}
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
                tintColor: 'white',
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
          <TouchableOpacity
            style={{
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 5,
              height: 45,
              marginVertical: 20,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
              
            }}>
              <Icon name={"check-circle"} style={{color: "#fff",fontSize: 15}}/>
            <Text style={{color: '#F3705A',fontSize: 15}}>Influencer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 5,
              height: 45,
              marginVertical: 10,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
              
            }}>
            <Text style={{color: '#F3705A',fontSize: 15}}>Business</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 5,
              height: 45,
              marginVertical: 20,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
              
            }}>
            <Text style={{color: '#F3705A',fontSize: 15}}>Indivodual</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 20,
          }}></View>
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
