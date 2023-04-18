import {
  Text,
  View,

} from 'react-native';
import {colors, fontSizes} from '../constants';


function UIHeader({title}) {
    return (
        <View style={{height: 55, backgroundColor: colors.primary}}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              alignSelf: 'center',
              lineHeight: 50,
              color: 'white',
            }}>
            {title}
          </Text>
        </View>
        
    );
}

export default UIHeader;