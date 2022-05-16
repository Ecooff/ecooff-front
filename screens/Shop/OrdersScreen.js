import {
  Pressable,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { MenuComponent } from "../../components";
import globalStyles from "../../styles/styles";
import productStyles from "../../styles/productStyles";
import { fakeData } from "../../utils/fakeData";
import Checkout from "./Checkout";
import CartService from "../../services/CartService";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

// SERVICES
const cartService = CartService;

const OrdersScreen = () => {
  const user = useSelector(selectUser);
  const [cart, setCart] = useState([]);
  const [saving, setSaving] = useState({});

  const navigator = useNavigation();

  useEffect(() => {
    cartService.confirmCart(user).then((response) => {
      setCart(response.data.listOfProducts);
      setSaving(response.data.savings);
    });
  }, []);

  return (
    <View style={[styles.homeContainer, {flex: 1}]}>

      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <MenuComponent onPress={() => navigator.goBack()} />

      <Text style={styles.header}>Con tu compra</Text>

      {/* LIST OF ITEMS */}
      <ScrollView style={styles.itemsScroll}>

        {

          cart.length > 0 ?

            cart.map((item, i) => {

              return (

                <View style={[globalStyles.row, globalStyles.alignItemsCenter, {marginBottom: 8}]}>

                  <View style={styles.cardImage}>
                    <Image
                      style={styles.productImage}
                      source={{ uri: item.img }}
                    />
                  </View>

                  <Text style={{ marginLeft: 8 }}>{item.quantity} x {item.name}</Text>

                </View>

              )
            })
            :
            <Text>No hay nada en el carrito</Text>
        }

      </ScrollView>

      {/* SAVEING */}
      <View style={styles.savingContainer}>

        <Text style={styles.header_2}>Ahorraste</Text>

        <View style={[globalStyles.row, globalStyles.justifyContentBetween, styles.saveingItems]}>

          <Text style={globalStyles.fontBold}>Agua</Text>

          {
            saving.waterSaveTotal != null ?
              <Text>  {saving.waterSaveTotal} L</Text>
              :
              <Text>0 ppm</Text>
          }

        </View>

        <View style={[globalStyles.row, globalStyles.justifyContentBetween, styles.saveingItems]}>

          <Text style={globalStyles.fontBold}>Juella de cabono</Text>

          {
            saving.carbonFootprintTotal != null ?
              <Text>  {saving.carbonFootprintTotal} L</Text>
              :
              <Text>0 L</Text>
          }

        </View>

        <View style={[globalStyles.row, globalStyles.justifyContentBetween, styles.saveingItems]}>

          <Text style={globalStyles.fontBold}>Dinero</Text>
          <Text>$ {saving.moneySaveTotal}</Text>

        </View>

      </View>

      {/* BUTTON */}
      <Pressable
        style={styles.buttonPurchase}
        onPress={() => confirmCart()}
      >
        <View>
          <Text style={styles.textStyle}>Finalizar</Text>
        </View>
      </Pressable>

    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({

  header: {
    fontWeight: "bold",
    fontSize: 38,
    alignSelf: "center",
    marginBottom: 20,
  },

  header_2: {
    fontWeight: "bold",
    fontSize: 28,
    alignSelf: "center",
    marginBottom: 20,
  },

  itemsScroll: {
    paddingHorizontal: 30,
    marginBottom: 20
  },

  cardImage: {
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
  },

  productImage: {
    width: 50,
    height: 50,
  },

  saveingItems: {
    marginBottom: 20
  },

  savingContainer: {
    paddingHorizontal: 30
  },

  /* btn confirm */
  buttonPurchase: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 20,
    elevation: 2,
    width: "100%",
    backgroundColor: "#3D9D5D",
    // bottom: -20,
    marginTop: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  }

});
