import React, { useEffect } from 'react';
import { View } from 'react-native';
import StackNavigation from './navigation/Stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';
import { LogBox } from 'react-native';

// App Tracking Transparency
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';


export default function App() {

  useEffect(() => {
    (async () => {
      const { status } = await requestTrackingPermissionsAsync();
      if (status === 'granted') {
        console.log('Yay! I have user permission to track data');
      }
    })();
  }, []);

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