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
  SafeAreaView,
} from 'react-native';
import {images, icons, colors, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import {isValidPassword, isValidEmail} from '../../utilies/Validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FoodItem from './FoodItem';

function FoodList(props) {
  const [foods, setFoods] = useState([
    {
      name: 'Paella Valenciana',
      url: 'https://media.zenfs.com/en/galvanized/52ee429864e4d78b1e810244ee63a25e',
      status: 'Opening soon',
      price: 120.45,
      website: 'https://edition.cnn.com/',
      socialNetwork: {
        facebook: 'https://www.facebook.com/chim.haihon.3',
        twitter: 'https://twitter.com/',
        instagram: 'https://instagram',
      },
    },
    {
      name: 'Gazpacho',
      url: 'https://www.seriouseats.com/thmb/CpfMCdoSDXTdR6C0KXEiIvM-9Jc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__08__20140818-tomato-sauce-vicky-wasik-3-5a82a74045764203a01410754b129601.jpg',
      status: 'Opening now',
      price: 1240.45,
      website: 'https://edition.cnn.com/',
      socialNetwork: {
        twitter: 'https://twitter.com/',
      },
    },
    {
      name: 'Patatas bravas',
      url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-373482_12-3705798.jpg',
      status: 'Closing soon',
      price: 5520.45,
      website: 'https://edition.cnn.com/',
      socialNetwork: {
        instagram: 'https://instagram',
      },
    },
    {
      name: 'Pimientos de Padron',
      url: 'https://fooddrinkdestinations.com/wp-content/uploads/2021/02/Pimientos-De-Padron-9.jpg',
      status: 'Coming soon',
      price: 1720.45,
      website: 'https://edition.cnn.com/',
      socialNetwork: {
        facebook: 'https://www.facebook.com/chim.haihon.3',
      },
    },
    {
      name: 'Jamón',
      url: 'https://germanystore.vn/wp-content/uploads/2021/01/JAMON-SERRANA-5KG-3-300x300.jpg',
      status: 'Opening soon',
      price: 920.45,
      website: 'https://edition.cnn.com/',
      socialNetwork: {
        facebook: 'https://www.facebook.com/chim.haihon.3',
        twitter: 'https://twitter.com/',
      },
    },
    {
      name: 'Jamóna',
      url: 'https://germanystore.vn/wp-content/uploads/2021/01/JAMON-SERRANA-5KG-3-300x300.jpg',
      status: 'Opening soon',
      price: 920.45,
      website: 'https://edition.cnn.com/',
      socialNetwork: {
        facebook: 'https://www.facebook.com/chim.haihon.3',
        twitter: 'https://twitter.com/',
      },
    },
    {
      name: 'Jamónf',
      url: 'https://germanystore.vn/wp-content/uploads/2021/01/JAMON-SERRANA-5KG-3-300x300.jpg',
      status: 'Opening soon',
      price: 920.45,
      website: 'https://edition.cnn.com/',
      socialNetwork: {
        facebook: 'https://www.facebook.com/chim.haihon.3',
        twitter: 'https://twitter.com/',
      },
    },
    {
      name: 'Jamónb',
      url: 'https://germanystore.vn/wp-content/uploads/2021/01/JAMON-SERRANA-5KG-3-300x300.jpg',
      status: 'Opening soon',
      price: 920.45,
      website: 'https://edition.cnnd.com/',
      socialNetwork: {
        facebook: 'https://www.facebook.com/chim.haihon.3',
        twitter: 'https://twitter.com/',
      },
    },
  ]);
  const [categories, setCategories] = useState([
    {
      name: 'BBQ',
      url: 'https://www.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
    },
    {
      name: 'Breakfast',
      url: 'https://reviewed-com-res.cloudinary.com/image/fetch/s---oGP6J6d--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_729,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1568123038734/Bfast.png',
    },
    {
      name: 'Coffee',
      url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg',
    },
    {
      name: 'HotDog',
      url: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_27/1586836/hotdogs-te-square-200702.jpg',
    },
    {
      name: 'Noodle',
      url: 'https://static.onecms.io/wp-content/uploads/sites/43/2023/01/12/270770-garlic-noodles-ddmfs-4x3-0189.jpg',
    },
    {
      name: 'Dinner',
      url: 'https://images.immediate.co.uk/production/volatile/sites/2/2021/04/LAMBFINAL-cf7a4ad.jpg?quality=90&resize=556,505',
    },
    {
      name: 'Beverages',
      url: 'https://media.nutrition.org/wp-content/uploads/2019/06/beverages-carbonated-drink-cold-drink-1571849-1030x631.jpg',
    },
    {
      name: 'Dessert',
      url: 'https://www.tasteofhome.com/wp-content/uploads/2019/05/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms-2.jpg',
    },
    {
      name: 'wine',
      url: 'https://static01.nyt.com/images/2023/02/08/multimedia/08pour-01-fmlw/08pour-01-fmlw-videoSixteenByNine3000.jpg',
    },
    {
      name: 'barbecue',
      url: 'https://phatdatbinhthoi.com.vn/upload/sanpham/610-ve-hang-bep-nuong-dien-khong-khoibarbercue-grill-2000w.jpg',
    },
    {
      name: 'waters',
      url: 'https://www.tasteofhome.com/wp-content/uploads/2019/05/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms-2.jpg',
    },
  ]);
  const [searchText,setSearchText]= useState('')
  const filteredFoods = () =>
    foods.filter(eachFood =>
      eachFood.name.toLowerCase().includes(searchText.toLowerCase()))
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        {/* <ScrollView>
          
            {foods.map(result => (
              <FoodItem data={result} key={result.name} />
            ))}
          </ScrollView> */}
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            marginTop: 5,
            alignItems: 'center',
          }}>
          <Icon
            style={{position: 'absolute', top: 10, left: 10}}
            name="search"
            size={20}
            color={'black'}
          />
          <TextInput
            onChangeText={text => {
              setSearchText(text);
            }}
            autoCorrect={false}
            style={{
              backgroundColor: colors.inactive,
              height: 40,
              marginRight: 5,
              borderRadius: 5,
              flex: 1,
              opacity: 0.8,
              paddingStart: 35,
            }}
          />
          <Icon style={{}} name="bars" size={30} color={colors.inactive} />
        </View>
        <View style={{height: 100, backgroundColor: ''}}>
          <View
            style={{
              height: 1,
              color: 'black',
              backgroundColor: 'black',
            }}></View>
          <FlatList
            horizontal={true}
            style={{flex: 1, flexDirection: 'row'}}
            data={categories}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(`Your choice was selected:${item.name}`);
                  }}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <Image
                    style={{
                      height: 40,
                      width: 40,
                      margin: 10,
                      resizeMode: 'cover',
                      borderRadius: 10,
                    }}
                    source={{
                      uri: item.url,
                    }}
                  />
                  <Text style={{color: 'black', fontSize: fontSizes.h5 * 0.8}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}></FlatList>
          <View
            style={{
              height: 1,
              color: 'black',
              backgroundColor: 'black',
            }}></View>
        </View>
        </View>
        {filteredFoods().length > 0 ? (
          <FlatList
            data={filteredFoods()}
            renderItem={({item}) => {
              return (
                <FoodItem
                  data={item}
                  key={item.name}
                  onPress={() => {
                    Alert.alert(`Your press item's name: ${item.name}`);
                  }}
                />
              );
            }}
            keyExtractor={item => item.name}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: fontSizes.h3}}>
              No food found
            </Text>
          </View>
        )}
      
    </SafeAreaView>
  );
}
{
  /* {foods.map(result => {
            return <FoodItem data={result} />
          }
              
            )} */
}
export default FoodList;
