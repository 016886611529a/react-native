import {
    View,
  } from 'react-native';
  import {colors} from '../../constants';
  import Icon from 'react-native-vector-icons/FontAwesome';
  Icon.loadFont();
function FiveStars({numberOfStars}) {
    return <View style={{flexDirection: 'row',justifyContent: 'flex-end'}}>
        {[0,1,2,3,4].map(item=> <Icon key={`${item}`}
            style={{marginRight: 5}}
            name="star"
            size={12}
            color={item<=numberOfStars-1? colors.warning : colors.inactive}
          /> )}
    </View>
}

export default FiveStars;