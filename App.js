import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


// AUTHENTICATION
import AuthHomeScreen from './screens/Auth/AuthHomeScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import SignupScreen from './screens/Auth/SignupScreen';
import ForgotPasswordScreen from './screens/Auth/ForgotPasswordScreen';
import ForgotSuccess from './screens/Auth/ForgotSuccessful';
import RestorePassword from './screens/Auth/RestorePassword';
import ValidateUserScreen from './screens/Auth/ValidateUserScreen';

// SCREENS
import HomeScreen from './screens/HomeScreen';

// PRODUCTS
import ProductScreen from './screens/Products/ProductScreen';
import ListScreen from './screens/Products/ListScreen';
import GroupListScreen from './screens/Products/GroupListScreen';

// SCREENS -> USER
import ProfileScreen from './screens/User/ProfileScreen';

// SCREENS -> SHOP
import CartScreen from './screens/Shop/CartScreen';
import OrdersScreen from './screens/Shop/OrdersScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  const navTheme = DefaultTheme;
  navTheme.colors.background = '#FFF';

  return (
    <NavigationContainer
      theme={navTheme}
    >
      <Stack.Navigator>

        {/* AUTH */}
        <Stack.Screen options={{ headerShown: false }} name="AuthHome" component={AuthHomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Forgot" component={ForgotPasswordScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ForgotSuccess" component={ForgotSuccess} />
        <Stack.Screen options={{ headerShown: false }} name="Restore" component={RestorePassword} />
        <Stack.Screen options={{ headerShown: false }} name="ValidateUser" component={ValidateUserScreen} />

        {/* HOME */}
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />

        {/* PROFILE */}
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />

        {/* CART */}
        <Stack.Screen options={{ headerShown: false }} name="Cart" component={CartScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Orders" component={OrdersScreen} />

        {/* Product */}
        <Stack.Screen options={{ headerShown: false }} name="Product" component={ProductScreen} />
        <Stack.Screen options={{ headerShown: false }} name="List" component={ListScreen} />
        <Stack.Screen options={{ headerShown: false }} name="GroupList" component={GroupListScreen} />

      </Stack.Navigator>

    </NavigationContainer>
    
  );
}
