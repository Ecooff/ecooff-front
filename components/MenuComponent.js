import React, { Component } from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import globalStyles from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import theIcon from '../assets/theIcon.png';
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

  console.log('AAAA', cartItems)

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Pressable onPress={() => navigator.navigate('Home')} />
      <Image style={styles.menuLogo} source={theIcon} />
      <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>
        <Pressable onPress={() => navigator.navigate('Cart')}>
          {cartItems > 0 ? 
        <View
        style={{
          borderRadius: 10,
          backgroundColor: 'rgba(77, 181, 145, 0.97)',
          position: 'absolute',
          top: -2,
          left: 21,
          width: 20,
          height: 20,
          zIndex: 1,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          {cartItems}
        </Text>
      </View> :
      <Text></Text>
        }
          
          <Ionicons name='ios-cart-outline' size={30} color='gray' />
        </Pressable>
        {/* <Feather name='bell' size={24} style={styles.icon} color='gray' /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainMenu: {
    justifyContent: 'space-between',
  },

  menuLogo: {
    width: 68,
    height: 30,
    marginTop: 15,
    marginBottom: 25
  },

  icon: {
    marginLeft: 15,
    marginRight: 10,
  },
});
