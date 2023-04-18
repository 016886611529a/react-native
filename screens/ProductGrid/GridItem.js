import {Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FiveStars from './FiveStars';
function GridItem({item,index,onPress}) {
  return (
    <View
      style={{
        flex: 0.5,
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.inactive,
      }}>
      <View style={{flexDirection: 'row', marginRight: 10}}>
        <Image
          style={{
            height: 90,
            width: 90,
            resizeMode: 'cover',
            borderRadius: 20,
            marginRight: 15,
          }}
          source={{
            uri: item.url,
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: fontSizes.h2,
            flex: 1,
            textAlign: 'right',
          }}>
          $ {item.price}
        </Text>
      </View>
      <Text
        style={{
          color: colors.primary,
          fontSize: fontSizes.h5,
          fontWeight: 'bold',
          marginHorizontal: 10,
          marginTop: 5,
        }}>
        {item.productName}
      </Text>
      {item.specifications.map(specification => (
        <Text
          key={specification}
          style={{
            color: 'black',
            fontSize: fontSizes.h5,
            paddingHorizontal: 5,
            paddingBottom: 5,
          }}>
          * {specification}
        </Text>
      ))}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={onPress}>
          <Icon
            style={{marginRight: 5}}
            name="heart"
            size={22}
            color={
              item.isSaved == undefined || item.isSaved == false
                ? colors.inactive
                : 'red'
            }
          />
          <Text
            style={{
              color:
                item.isSaved == undefined || item.isSaved == false
                  ? colors.inactive
                  : 'red',
              fontSize: fontSizes.h6,
              width: 50,
            }}>
            Saved for later
          </Text>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <FiveStars numberOfStars={item.stars} />
          <Text
            style={{
              color: colors.success,
              fontSize: fontSizes.h6,
              textAlign: 'right',
              paddingRight: 10,
              paddingTop: 5,
            }}>
            {item.reviews} Reviews
          </Text>
        </View>
      </View>
    </View>
  );
}

export default GridItem;
