import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import { MenuComponent } from "../../components";
import Checkout from "./Checkout";
import { fakeData } from "../../utils/fakeData";
import { FontAwesome5 } from '@expo/vector-icons'; 


const CartScreen = () => {
  // const [user, setUser] = useState("");//should by global state
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setBasket(fakeData.productsList);
  }, []);

  const MyBasket = () => {
    if (basket.length === 0) return <Text>Nada en el carrito</Text>;
    
    return basket.map((product, i) => {
      const [counter, setCounter] = useState(1);

      const decreaseAmount = () => {
        return counter > 1 ? setCounter(counter - 1) : "";
      }

      const increaseAmount = () => {
        return setCounter(counter + 1);
      }

      const removeProduct = () => {
        console.log("removeProduct is working")
      }

      return (
        <View key={i} style={styles.productCard}>
            <View style={styles.cardImage}>
              <Image style={styles.productImage} source={{ uri: product.url }} />
            </View>

            <View style={styles.dataContainer}>
              <View style={styles.productHeader}>
                <Text style={styles.productHeaderText}>
                  {product.title}
                </Text>
                <Text style={styles.productHeaderText}>
                  $ {product.price*counter}
                </Text>
              </View>

                  <Text style={styles.subHeaderText}>
                    {product.date}
                  </Text>
                  
                  {/* BOTONERA */}
                  <View style={styles.botonera}>
                    <Pressable onPress={() => increaseAmount()}>
                      <FontAwesome5 name="plus-square" size={20} color="#3D9D5D" />
                    </Pressable>
                    <Text style={{ marginHorizontal: 10 }}>{counter}</Text>
                    <Pressable onPress={() => decreaseAmount()}>
                      <FontAwesome5 name="minus-square" size={20} color="#3D9D5D" />
                    </Pressable>                    
                    <Pressable onPress={() => removeProduct()}>
                      <FontAwesome5 name="trash-alt" size={20} color="#3D9D5D" style={styles.trashIcon}/>
                    </Pressable>
                  </View>
            </View>
        </View>
      );
    });
  };

  const Total = () => {
    return (
      <View>
        <View style={styles.footerContainer}>
          <Text style={[styles.footerMainText]}>Total</Text>
          <Text style={[styles.footerMainText]}>$850</Text>
        </View>
        <View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerSecondaryText}>Delivery</Text>
            <Text style={styles.footerSecondaryText}>$200</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerSecondaryText}>Productos</Text>
            <Text style={styles.footerSecondaryText}>$650</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.homeContainer}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView style={styles.menuContainer}>
        <MenuComponent />

        <Text style={styles.header}>Tu carrito</Text>

        <MyBasket />

        <Total />
      </ScrollView>

      <Checkout />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 38,
    alignSelf: "center",
    marginBottom: 20,
  },

  footerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 3,
  },

  footerMainText: {
    fontWeight: "bold",
    fontSize: 28,
  },

  footerSecondaryText: {
    fontWeight: "bold",
    fontSize: 12,
  },

  productHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dataContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "75%"
  },

  botonera: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55%",
  },

  trashIcon: {
    marginLeft: 40,
  },

  // ............
  homeContainer: {
    flex: 1,
  },

  menuContainer: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },

  cardImage: {
    padding: 5,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
  },

  productImage: {
    width: 60,
    height: 60,
  },

  subHeaderText: {
    marginVertical: 5,
    fontSize: 14,
  },

  productCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },

  cardBody: {
    paddingHorizontal: 15,
    width: "60%",
  },
});
