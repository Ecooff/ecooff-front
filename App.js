import { View } from 'react-native';
import StackNavigation from './navigation/Stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { LogBox } from 'react-native';


export default function App() {

  LogBox.ignoreAllLogs(true);

  const navTheme = DefaultTheme;

  navTheme.colors.background = '#FFF';

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