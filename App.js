/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {

  Icon,
} from 'native-base';


const App = () => {
  return (
    <View>
      <Text>hello world</Text>
      <Icon name="filter" type="MaterialCommunityIcons"></Icon>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
