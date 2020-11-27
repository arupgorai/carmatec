import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableHighlight
} from 'react-native';
import {Container, Header, H1, Title, Left, Body, Right, Content, Icon, Button, Footer, FooterTab} from 'native-base';
import FastImage from 'react-native-fast-image'
import { SliderBox } from "react-native-image-slider-box";
import {Theme} from '../theme/AppTheme';
import Product from '../components/Product';
import { setLogin, getLogin } from '../config/Auth';
import ProductDesc from '../components/ProductDesc';
const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('window');

class ProductDetail extends React.Component {
  state = {
    images: [
      require('../assets/pendant-1.jpg'),
      require('../assets/pendant-2.jpg'),
      require('../assets/pendant-3.jpg'),
      require('../assets/pendant-4.jpg'),
      require('../assets/pendant-5.jpg')
    ]
  }

  render() {
    const {images} = this.state;
    return (
      <Container>
        <Header transparent androidStatusBarColor='lightgray'>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="chevron-left" type="FontAwesome5" style={{color: Theme.gray, fontSize: 20}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#555'}}>PRODUCTS</Title>
          </Body>
          <Right>
            <TouchableOpacity style={styles.cartWrapper}>
              <Icon name="cart-plus" type="FontAwesome5" style={{color: '#777', fontSize: 18}} />
              <View style={styles.cartQty}>
                <Text style={{fontSize: 10, color: '#fff', fontWeight: 'bold'}}>2</Text>
              </View>
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <SliderBox
            ImageComponent={FastImage}
            images={this.state.images}
            sliderBoxHeight={300}
            dotColor={Theme.primary}
            inactiveDotColor={Theme.gray}
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10
            }}
          />
          <ProductDesc />
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: Theme.gray}}>
            <Button style={{borderRightWidth: 1, borderRightColor: '#95989c'}}>
              <Icon name="heart" type="FontAwesome5" style={{color: '#fff', fontSize: 15}} />
              <Text style={{color: '#fff'}}>Wishlist</Text>
            </Button>
            <Button>
              <Icon name="shopping-cart" type="FontAwesome5" style={{color: '#fff', fontSize: 15}} />
              <Text style={{color: '#fff'}}>Add to Cart</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  cartWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartQty: {
    position: 'relative',
    top: '0%',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Theme.primary,
    marginLeft: 2,
  },
});

export default ProductDetail;