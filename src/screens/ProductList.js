import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {Container, Header, H1, Title, Left, Body, Right, Content, Icon, Button, Footer, FooterTab} from 'native-base';
import {Theme} from '../theme/AppTheme';
import Product from '../components/Product';
import { setLogin, getLogin, clearLogin } from '../config/Auth';
const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('window');
const DATA = [
  {
    id: 1,
    productName: 'Shining Dlva Fashion',
    onPrice: 499,
    offPrice: 799,
    discount: 36,
    star: 4,
    image: require('../assets/pendant.png')
  },
  {
    id: 2,
    productName: 'Shining Dlva Fashion',
    onPrice: 499,
    offPrice: 799,
    discount: 36,
    star: 2,
    image: require('../assets/pendant.png')
  },
  {
    id: 3,
    productName: 'Shining Dlva Fashion',
    onPrice: 499,
    offPrice: 799,
    discount: 36,
    star: 1,
    image: require('../assets/pendant.png')
  },
  {
    id: 4,
    productName: 'Shining Dlva Fashion',
    onPrice: 499,
    offPrice: 799,
    discount: 36,
    star: 4,
    image: require('../assets/pendant.png')
  },
];

class ProductList extends React.Component {
  state = {
    isLoggedIn: false,
  }

  componentDidMount = () => {
    // clearLogin().then().catch();
    getLogin()
      .then(user => {
        if (user !== null) {
          this.setState({isLoggedIn: true});
        } else {
          this.setState({isLoggedIn: false});
        }
      })
      .catch(er => er && console.log(er));
  }

 renderItem = ({ item }) => (
  <Product {...item} {...this.props} />
 );
  render() {
    const {isLoggedIn} = this.state;
    return (
      <Container>
        <Header transparent androidStatusBarColor='lightgray'>
          <Left>
            <Button transparent onPress={() => !isLoggedIn && this.props.navigation.goBack()}>
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
            <View style={styles.header}>
                <H1 style={{textAlign: 'center', color: '#fff'}}>Jewellery - Pendant</H1>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold', color: '#fff'}}>45654</Text>
                  <Text style={{color: '#fff', marginLeft: 5}}>PRODUCTS</Text>
                </View>
            </View>
            <FlatList
              data={DATA}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              numColumns={2}
            />
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: Theme.gray}}>
            <Button style={{borderRightWidth: 1, borderRightColor: '#95989c'}}>
              <Icon name="filter" type="FontAwesome5" style={{color: '#fff', fontSize: 15}} />
              <Text style={{color: '#fff'}}>Apps</Text>
            </Button>
            <Button>
              <Icon name="sort" type="FontAwesome5" style={{color: '#fff', fontSize: 15}} />
              <Text style={{color: '#fff'}}>Sort</Text>
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
  header: {
    backgroundColor: Theme.primary,
    paddingVertical: 20
  }
});

export default ProductList;