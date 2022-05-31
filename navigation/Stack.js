import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthHomeScreen from "../screens/Auth/AuthHomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignupScreen from "../screens/Auth/SignupScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPasswordScreen";
import ForgotSuccess from "../screens/Auth/ForgotSuccessful";
import RestorePassword from "../screens/Auth/RestorePassword";
import ValidateUserScreen from "../screens/Auth/ValidateUserScreen";

// SCREENS
import IndexScreen from "../screens/IndexScreen";
import HomeScreen from "../screens/HomeScreen";

// PRODUCTS
import ProductScreen from "../screens/Products/ProductScreen";
import ListScreen from "../screens/Products/ListScreen";
import GroupListScreen from "../screens/Products/GroupListScreen";

// SCREENS -> USER
import ProfileScreen from "../screens/User/ProfileScreen";
import AddressesScreen from "../screens/User/AddressesScreen";
import PaymentsScreen from "../screens/User/PaymentsScreen";
import OrderHistoryScreen from "../screens/User/OrderHistoryScreen";
import OrderDetailScreen from "../screens/User/OrderDetailScreen";
import EditProfileScreen from "../screens/User/EditProfileScreen";

// SCREENS -> SHOP
import CartScreen from "../screens/Shop/CartScreen";
import OrdersScreen from "../screens/Shop/OrdersScreen";

// TESTING
import FilterComponent from "../components/FilterComponent";

import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

const StackNav = createNativeStackNavigator();

const Stack = () => {
  const user = useSelector(selectUser);
  return (
    <StackNav.Navigator>
      {/* <StackNav.Navigator initialRouteName="List"> */}

      {/* AUTH */}
      <StackNav.Screen
        options={{ headerShown: false }}
        name="AuthHome"
        component={AuthHomeScreen}
      />
      {/* {!user && ( */}
      <StackNav.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="Login"
        component={LoginScreen}
      />
      {/* )} */}

      <StackNav.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={SignupScreen}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="Forgot"
        component={ForgotPasswordScreen}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="ForgotSuccess"
        component={ForgotSuccess}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="Restore"
        component={RestorePassword}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="ValidateUser"
        component={ValidateUserScreen}
      />

      {/* HOME */}
      {
        <StackNav.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name="Home"
          component={IndexScreen}
        />
      }
      {
        <StackNav.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
      }

      {/* PROFILE */}
      <StackNav.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="OrderHistory"
        component={OrderHistoryScreen}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="OrderDetail"
        component={OrderDetailScreen}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="Addresses"
        component={AddressesScreen}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="Payments"
        component={PaymentsScreen}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="Edit"
        component={EditProfileScreen}
      />

      {/* CART */}
      <StackNav.Screen
        options={{ headerShown: false }}
        name="Cart"
        component={CartScreen}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="Orders"
        component={OrdersScreen}
      />

      {/* Product */}
      <StackNav.Screen
        options={{ headerShown: false }}
        name="Product"
        component={ProductScreen}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="List"
        component={ListScreen}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="GroupList"
        component={GroupListScreen}
      />

      {/* TESTING */}
      <StackNav.Screen
        options={{ headerShown: false }}
        name="Filter"
        component={FilterComponent}
      />
    </StackNav.Navigator>
  );
};

export default Stack;
