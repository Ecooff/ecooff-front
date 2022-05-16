import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import { MenuComponent } from "../../components";
import Checkout from "./Checkout";
import { localhost } from "../../localhost.json";
import { fakeData } from "../../utils/fakeData";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import CartService from "../../services/CartService";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [newCart, setNewCart] = useState([]);

  const { addToCart, openCart, productLength, deleteItem } = CartService;

  useEffect(() => {
    // addToCart().then((response) => setCartItems(response.products));
    openCart(user).then((response) => setCartItems(response.data));
  }, [newCart]);

  console.log("ItemsInCart", cartItems);

  const user = useSelector(selectUser);
  const [basket, setBasket] = useState([]);
  const navigator = useNavigation();

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/cart`, {
        //this doesnt work, i need me cart/basket
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then(({ data }) =>
        data.products
          ? setBasket(data.products)
          : setBasket(fakeData.productsList)
      )
      .catch((err) => {
        console.log(err);
        setBasket(fakeData.productsList); //line to delete
      });
  }, []);

  const MyBasket = () => {
    {
      return cartItems.length === 0 ? (
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginTop: "20%",
            fontWeight: "700",
          }}
        >
          No hay nada en el carrito
        </Text>
      ) : (
        cartItems.map((product, i) => {
          {
            console.log("RRRRR", quantity);
          }
          const decreaseAmount = (id) => {
            return quantity > 1 ? setQuantity(quantity - 1) : "";
          };

          const increaseAmount = (id) => {
            return setQuantity(quantity + 1);
          };

          const removeProduct = (id) => {
            console.log("IDPROCUT", id);
            console.log("removeProduct is working");
            deleteItem(user, id)
              .then((response) => setNewCart(response.data))
              .catch((err) => console.log("Catch", err.response));
          };

          return (
            <View key={i} style={styles.productCard}>
              <View style={styles.cardImage}>
                <Image
                  style={styles.productImage}
                  source={{ uri: product.img }}
                />
              </View>

              <View style={styles.dataContainer}>
                <View style={styles.productHeader}>
                  <Text style={styles.productHeaderText}>{product.name}</Text>
                  <Text style={styles.productHeaderText}>
                    ${" "}
                    {(quantity <= product.quantity &&
                      product.expPrice * quantity) ||
                      (product.quantity === 0 && product.expPrice)}
                  </Text>
                </View>
                <Text style={styles.subHeaderText}>{product.date}</Text>
                {/* CAMBIE STOCK POR QUANTITY */}
                {/* BOTONERA */}
                <View style={styles.botonera}>
                  <Pressable onPress={() => decreaseAmount(product._id)}>
                    <FontAwesome5
                      name="minus-square"
                      size={20}
                      color="#3D9D5D"
                    />
                  </Pressable>
                  <Text style={{ marginHorizontal: 10 }}>
                    {quantity > product.quantity ? (
                      <Text>out of stock</Text>
                    ) : (
                      product.quantity
                    )}
                  </Text>
                  <Pressable
                    onPress={() =>
                      product.stock > quantity && increaseAmount(product._id)
                    }
                  >
                    <FontAwesome5
                      name="plus-square"
                      size={20}
                      color="#3D9D5D"
                    />
                  </Pressable>

                  <TouchableOpacity onPress={() => removeProduct(product.id)}>
                    <FontAwesome5
                      name="trash-alt"
                      size={20}
                      color="#3D9D5D"
                      style={styles.trashIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })
      );
    }
  };

  const Total = () => {
    return (
      <View style={styles.menuContainer}>
        <View style={styles.footerContainer}>
          <Text style={[styles.footerMainText]}>Total</Text>
          <Text style={[styles.footerMainText]}>{total}</Text>
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
      <MenuComponent onPress={() => navigator.goBack()} />
      <Text style={styles.header}>Tu carrito</Text>
      <ScrollView style={styles.menuContainer}>
        <MyBasket />
      </ScrollView>
      <View style={styles.deliveryMainContainer}>
        <View style={styles.deliveryContainer}>
          <MaterialCommunityIcons
            name="truck-fast-outline"
            size={33}
            color="#3D9D5D"
          />
          <View style={styles}>
            <Text style={styles.deliveryMainText}>Delivery a dirección</Text>
            <Text style={styles.deliverySmallText}>
              Order de más de $7000 tiene envío gratis
            </Text>
          </View>
          <Pressable onPress={() => navigator.navigate("Profile")}>
            <Text style={styles.editText}>Editar</Text>
          </Pressable>
        </View>
        <View style={styles.deliveryContainer}>
          <MaterialIcons name="payment" size={33} color="#3D9D5D" />
          <View style={styles}>
            <Text style={styles.deliveryMainText}>Método de pago</Text>
            <Text style={styles.deliverySmallText}>Efectivo</Text>
          </View>
        </View>
      </View>
      <Total />

      {/* <Checkout /> */}
      <Pressable
        style={styles.buttonPurchase}
        onPress={() => navigator.navigate("Orders")}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Confirmar pago</Text>
          <Text style={styles.textStyle}>$850</Text>
        </View>
      </Pressable>
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
    marginLeft: 10,
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
    fontWeight: "bold",
  },

  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dataContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "75%",
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
    paddingHorizontal: 10,
  },

  cardImage: {
    padding: 5,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
  },

  productImage: {
    width: 90,
    height: 85,
  },

  subHeaderText: {
    marginVertical: 5,
    fontSize: 14,
  },

  productCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 30,
    paddingRight: 10,
    backgroundColor: "white",
  },

  cardBody: {
    paddingHorizontal: 15,
    width: "60%",
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
  },
  deliveryMainContainer: {
    margin: 10,
  },
  deliveryContainer: {
    flexDirection: "row",
    margin: 4,
    marginHorizontal: 10,
  },
  deliveryMainText: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  deliverySmallText: {
    fontSize: 12,
    marginLeft: 10,
  },
  editText: {
    textDecorationLine: "underline",
    marginLeft: 15,
  },
});
