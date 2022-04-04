import React, { Component } from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import globalStyles from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SplashLogo from '../assets/splash.png';
import cartService from '../services/CartService';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native-web';

export const MenuComponent = () => {
  const [cartItems, setCartItems] = useState([]); // tiene que tener algo cargado para que no tome undefined o length sin nada

  const navigator = useNavigation();

  const { addToCart } = cartService;

  useEffect(() => {
    addToCart().then((response) => setCartItems(response.products.length));
  }, []);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Pressable onPress={() => navigator.navigate('Home')} />
      <Image style={styles.menuLogo} source={SplashLogo} />

      <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>
        <Pressable onPress={() => navigator.navigate('Cart')}>
          <Text
            style={{
              position: 'absolute',
              top: 21,
              left: 13,
              backgroundColor: 'rgba(77, 181, 145, 0.97)',
              width: 20,
              height: 20,
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            {cartItems}
          </Text>
          <Ionicons name='ios-cart-outline' size={30} color='gray' />
        </Pressable>
        <Feather name='bell' size={24} style={styles.icon} color='gray' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainMenu: {
    marginTop: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },

  menuLogo: {
    width: 50,
    height: 60,
  },

  icon: {
    marginLeft: 15,
    marginRight: 10,
  },
});
