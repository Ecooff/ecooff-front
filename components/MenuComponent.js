import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import globalStyles from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import theIcon from "../assets/theIcon.png";
import cartService from "../services/CartService";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native-web";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

export const MenuComponent = ({ onPress }) => {
  const [cartItems, setCartItems] = useState([]); // tiene que tener algo cargado para que no tome undefined o length sin nada
  const [lenghtCart, setLenghtCart] = useState(0);

  const navigator = useNavigation();

  const user = useSelector(selectUser);

  const { cartLength, openCart } = cartService;

  useEffect(() => {
    cartLength(user).then((response) =>
      setLenghtCart(response.data.cartLength)
    );
  }, []);

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "5%",
        // alignItems: "baseline",
      }}
    >
      <Pressable onPress={() => navigator.navigate("Home")} />
      <View style={{ marginTop: "3%" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(77, 181, 145, 0.97)",
            borderRadius: 12,
            marginRight: 10,
          }}
          onPress={onPress}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={19}
            color="white"
            style={{ padding: 2, position: "relative", left: 3 }}
          />
        </TouchableOpacity>
      </View>
      <Image style={styles.menuLogo} source={theIcon} />
      <View style={[globalStyles.row, globalStyles]}>
        <Pressable onPress={() => navigator.navigate("Cart")}>
          {lenghtCart > 0 && (
            <View
              style={{
                borderRadius: 10,
                backgroundColor: "rgba(77, 181, 145, 0.97)",
                position: "absolute",
                left: 20,
                width: 20,
                height: 20,
                zIndex: 1,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {lenghtCart}
              </Text>
            </View>
          )}

          <Ionicons
            name="ios-cart-outline"
            size={30}
            color="gray"
            style={styles.cartIcon}
          />
        </Pressable>
        {/* <Feather name='bell' size={24} style={styles.icon} color='gray' /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainMenu: {
    justifyContent: "space-between",
  },

  menuLogo: {
    width: 90,
    height: 40,
    marginBottom: 20,
    marginRight: 190,
  },

  icon: {
    marginLeft: 15,
    marginRight: 10,
  },
  cartIcon: {
    marginRight: 20,
    marginTop: 3,
    position: "relative",
  },
});
