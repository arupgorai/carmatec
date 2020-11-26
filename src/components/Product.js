import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Icon} from 'native-base';
import {Theme} from '../theme/AppTheme';

class Product extends React.Component {
  render() {
    const {productName, image, star, onPrice, offPrice, discount} = this.props;
    return (
      <TouchableOpacity activeOpacity={.7} style={styles.productBox}>
        <View>
          <View style={styles.pTop}>
            <View
              style={styles.rate}
              >
              <Text style={{fontSize: 14, marginRight: 5, color: '#fff'}}>{star}</Text>
              <Icon
                name="star"
                type="FontAwesome5"
                style={{color: '#fff', fontSize: 12}}
              />
            </View>
            <TouchableOpacity>
              <Icon name="heart" type="FontAwesome5" style={{color: Theme.gray, fontSize: 20}} />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <AutoHeightImage
              width={150}
              source={image}
            />
          </View>
          <View style={styles.pDetail}>
            <Text style={styles.title}>{productName}</Text>
            <View style={styles.priceDetail}>
              <Text style={{fontSize: 18, color: Theme.red}}>QR {onPrice}</Text>
              <Text style={{fontSize: 13, color: Theme.gray, marginLeft: 8, textDecorationLine: 'line-through',}}>QR {offPrice}</Text>
            </View>
            <Text style={{textAlign: 'center', color: Theme.red}}>{discount}% Off</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  productBox: {
    borderWidth: 1,
    borderColor: '#e7e7e7',
    flex: 1,
    padding: 10
  },
  pTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rate: {
    borderWidth: 1,
    borderColor: 'transparent',
    flexDirection: 'row',
    alignItems:'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: 'green'
  },
  pDetail: {
    // borderWidth: 1,
    // borderColor: 'blue'
  },
  title: {
    fontSize: 16,
    textAlign: 'center'
  },
  priceDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  }
});

export default Product;