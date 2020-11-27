import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Icon, H3} from 'native-base';
import {Theme} from '../theme/AppTheme';
import Stars from '../components/Stars';
import NumericInput from 'react-native-numeric-input'

class ProductDesc extends React.Component {
  state = {
    value: 0
  }
  render() {
    return (
      <>
        <View style={styles.pDesc}>
          <H3 style={{color: '#444'}}>Shining Diva Fashion</H3>
          <Stars />
          <View style={styles.pPriceWrapper}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 20, color: Theme.red}}>QR 499</Text>
              <Text style={{fontSize: 14, color: Theme.gray, marginLeft: 4, textDecorationLine: 'line-through'}}>QR 799</Text>
            </View>
            <Text style={{marginHorizontal: 10, color: Theme.gray, fontSize: 18}}>/</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: Theme.red, fontSize: 20}}>6778</Text>
              <Text style={{fontSize: 16, color: Theme.gray, marginLeft: 2}}>Doha Miles</Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 16, color: Theme.red}}>35% Off</Text>
          </View>
        </View>
        <View style={styles.pAction}>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{marginRight: 15}}>Quantity</Text>
            <NumericInput
              value={this.state.value}
              onChange={value => this.setState({value})}
              onLimitReached={(isMax,msg) => console.log(isMax,msg)}
              totalWidth={130}
              totalHeight={40}
              iconSize={25}
              step={1}
              valueType='real'
              minValue={0}
              textColor='#B0228C'
              iconStyle={{ color: 'white' }}
              rightButtonBackgroundColor={Theme.primary}
              leftButtonBackgroundColor={Theme.primary}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems:'center', marginVertical: 15}}>
            <Text style={{marginRight: 35}}>Size</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={styles.size} activeOpacity={0.6}>
                <Text>S</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.size} activeOpacity={0.6}>
                <Text>M</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.size} activeOpacity={0.6}>
                <Text>L</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.size} activeOpacity={0.6}>
                <Text>XL</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{marginRight: 30}}>Color</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={styles.color} activeOpacity={0.6} />
              <TouchableOpacity style={{...styles.color, backgroundColor: Theme.green}} activeOpacity={0.6} />
              <TouchableOpacity style={{...styles.color, backgroundColor: Theme.blue}} activeOpacity={0.6} />
              <TouchableOpacity style={{...styles.color, backgroundColor: Theme.primary}} activeOpacity={0.6} />
            </View>
          </View>
        </View>
        <View style={styles.pDescWrpr}>
          <Text style={{color: '#444', fontSize: 18}}>Description</Text>
          <Text style={{color: '#444', marginVertical: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Text>
          <View>
            <View style={styles.pListStyle}>
              <Icon name="chevron-right" type="FontAwesome5" style={{color: Theme.gray, fontSize: 12, marginTop: 3}} />
              <Text style={{color: '#444', marginLeft: 5}}>text of the printing industry.</Text>
            </View>
            <View style={styles.pListStyle}>
              <Icon name="chevron-right" type="FontAwesome5" style={{color: Theme.gray, fontSize: 12, marginTop: 3}} />
              <Text style={{color: '#444', marginLeft: 5}}>text of the printing industry.</Text>
            </View>
            <View style={styles.pListStyle}>
              <Icon name="chevron-right" type="FontAwesome5" style={{color: Theme.gray, fontSize: 12, marginTop: 3}} />
              <Text style={{color: '#444', marginLeft: 5}}>text of the printing industry.</Text>
            </View>
            <View style={styles.pListStyle}>
              <Icon name="chevron-right" type="FontAwesome5" style={{color: Theme.gray, fontSize: 12, marginTop: 3}} />
              <Text style={{color: '#444', marginLeft: 5}}>text of the printing industry.</Text>
            </View>
            <View style={styles.pListStyle}>
              <Icon name="chevron-right" type="FontAwesome5" style={{color: Theme.gray, fontSize: 12, marginTop: 3}} />
              <Text style={{color: '#444', marginLeft: 5}}>text of the printing industry.</Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  pDesc: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Theme.lightgray,
    borderBottomColor: Theme.lightgray,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  pPriceWrapper: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  pAction: {
    borderBottomWidth: 1,
    borderBottomColor: Theme.lightgray,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  pDescWrpr: {
    paddingHorizontal: 15,
    paddingTop: 10,
    marginBottom: 25
  },
  pListStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3
  },
  size: {
    borderWidth: 1,
    borderColor: Theme.lightgray,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 5
  },
  color: {
    borderWidth: 1,
    borderColor: Theme.lightgray,
    marginLeft: 5,
    height: 35,
    width: 35
  }
});

export default ProductDesc;