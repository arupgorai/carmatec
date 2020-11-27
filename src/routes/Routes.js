import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import ProductList from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetail';

const Stack = createStackNavigator();

function AppRouter() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Products" component={ProductList} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppRouter;