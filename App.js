import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import commonFunctions from './utils/CommonFunctions';


// AUTHENTICATION
import LoginScreen from './screens/Auth/LoginScreen';
import SignupScreen from './screens/Auth/SignupScreen';
import ForgotPasswordScreen from './screens/Auth/ForgotPasswordScreen';
import ForgotSuccess from './screens/Auth/ForgotSuccessful';

// SCREENS
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* AUTH */}
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Forgot" component={ForgotPasswordScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ForgotSuccess" component={ForgotSuccess} />

        {/* HOME */}
        <Stack.Screen name="Home" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
