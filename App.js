import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import StackNavigation from './navigation/Stack';
import { Provider } from 'react-redux';
import store from './store';

const navTheme = DefaultTheme;

navTheme.colors.background = '#FFF';

export default function App() {
  return (
    <React.Fragment>

      <Provider store={store}>

        <NavigationContainer theme={navTheme}>

          <StackNavigation />
          
        </NavigationContainer>


      </Provider>

    </React.Fragment>
  );
}
