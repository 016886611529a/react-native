import React from 'react';
import { Text,View,Image, Alert } from 'react-native';
import {sum2Number,substract2Number,PI} from '../utilies/Calculation'
function Welcome(props) {
    return (
        <View>
            <Text>This is welcome</Text>
        </View>
    )
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

