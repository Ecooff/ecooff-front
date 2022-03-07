import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

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
import AddressesScreen from './screens/User/AddressesScreen';
import PaymentsScreen from './screens/User/PaymentsScreen';
import OrderHistoryScreen from './screens/User/OrderHistoryScreen';
import OrderDetailScreen from './screens/User/OrderDetailScreen';
import EditProfileScreen from './screens/User/EditProfileScreen';

// SCREENS -> SHOP
import CartScreen from './screens/Shop/CartScreen';
import OrdersScreen from './screens/Shop/OrdersScreen';

// TESTING
import FilterComponent from './components/FilterComponent';


const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs(true);

  const navTheme = DefaultTheme;
  navTheme.colors.background = '#FFF';

  return (
    <Provider store={store}>

    <NavigationContainer theme={navTheme}>

      <Stack.Navigator>
      {/* <Stack.Navigator initialRouteName="List"> */}

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
        <Stack.Screen options={{ headerShown: false }} name="OrderHistory" component={OrderHistoryScreen} />
        <Stack.Screen options={{ headerShown: false }} name="OrderDetail" component={OrderDetailScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Addresses" component={AddressesScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Payments" component={PaymentsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Edit" component={EditProfileScreen} />

        {/* CART */}
        <Stack.Screen options={{ headerShown: false }} name="Cart" component={CartScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Orders" component={OrdersScreen} />

        {/* Product */}
        <Stack.Screen options={{ headerShown: false }} name="Product" component={ProductScreen} />
        <Stack.Screen options={{ headerShown: false }} name="List" component={ListScreen} />
        <Stack.Screen options={{ headerShown: false }} name="GroupList" component={GroupListScreen} />

        {/* TESTING */}
        <Stack.Screen options={{ headerShown: false }} name="Filter" component={FilterComponent} />

      </Stack.Navigator>

    </NavigationContainer>

    </Provider>
    
  );
}
