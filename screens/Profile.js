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
} from 'react-native';
import {
  user as UserRepository,
  population as PopulationRepository,
  population,
} from '../reponsitories';
import {colors, fontSizes} from '../constants';
import {convertDateTimeToString} from '../utilies/Datetime';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
const chartConfig={
    backgroundColor: "white",
    backgroundGradientFrom: "#white",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    color: (opacity) => colors.primary,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }
//import {SafeAreaView} from 'react-navigation'
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHight = Dimensions.get("window").height;
function Profile(props) {
  const [user, setUser] = useState({});
  const [populations, setPopulations] = useState({});
  console.log(populations)
  useEffect(() => {
    UserRepository.getUserDetails().then(res => setUser(res));
    PopulationRepository.getPopulation({
      drilldowns: 'Nation',
      measures: 'Population',
    }).then(resPopulations => setPopulations(resPopulations));
  }, []);
  const {
    email,
    dateOfBirth,
    gender,
    userId,
    address,
    username,
    url,
    phone,
    registered,
  } = user;
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 10,
      }}>
      <Image
        style={{
          height: 160,
          width: 160,
          resizeMode: 'cover',
          borderRadius: 80,
          marginLeft: 10,
          alignSelf: 'center',
          marginBottom: 20,
        }}
        source={{
          uri: url,
        }}
      />
      <View style={{flexDirection: 'row', paddingStart: 10}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>UserName: </Text>
        <Text style={{color: 'black', fontSize: fontSizes.h5}}>{username}</Text>
      </View>
      <View style={{flexDirection: 'row', paddingStart: 10}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Email: </Text>
        <Text style={{color: 'black', fontSize: fontSizes.h5}}>{email}</Text>
      </View>
      <View style={{flexDirection: 'row', paddingStart: 10}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>DOB: </Text>
        <Text style={{color: 'black', fontSize: fontSizes.h5}}>
          {convertDateTimeToString(dateOfBirth)}
        </Text>
      </View>
      <View style={{flexDirection: 'row', paddingStart: 10}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Gender: </Text>
        <Text style={{color: 'black', fontSize: fontSizes.h5}}>{gender}</Text>
      </View>
      <View style={{flexDirection: 'row', paddingStart: 10}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>address: </Text>
        <Text style={{color: 'black', fontSize: fontSizes.h5}}>{address}</Text>
      </View>
      <View style={{flexDirection: 'row', paddingStart: 10}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Phone: </Text>
        <Text style={{color: 'black', fontSize: fontSizes.h5}}>{phone}</Text>
      </View>
      <View>
        <Text style={{color: "red"}}>{JSON.stringify(populations)}
        </Text>
        <LineChart
          data= {{
            labels: populations.map(item=>item.year),
            datasets: [
              {
                data: populations.map(item=>item.population),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
              }
            ],
            legend: ["Rainy Days"] // optional
          }}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </View>
  );
}

export default Profile;
