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

  const [newCart, setNewCart] = useState([]);

  const { addToCart, openCart, deleteItem } = CartService;

  useEffect(() => {
    openCart(user).then((response) => setCartItems(response.data));
  }, [newCart]);

  const totalPrice = cartItems.map((item) => item.price);
  console.log("SEE PRICE", totalPrice);

  const getTotal = (a) => {
    let total = 0;
    for (let i in a) {
      total += a[i];
    }
    return total;
  };

  const verTotal = getTotal(totalPrice);

  console.log(verTotal);

  const user = useSelector(selectUser);
  const [basket, setBasket] = useState([]);
  const navigator = useNavigation();

  const updateQuantity = (id, quantity, i) => {
    addToCart(user, {
      productId: id,
      quantity: quantity,
    }).then(() => {
      cartItems[i].quantity = quantity;
      setNewCart((product) => [...cartItems, product]);
    });
  };

  // useEffect(() => {
  //   axios
  //     .get(`http://${localhost}/api/cart`, {
  //       //this doesnt work, i need me cart/basket
  //       headers: {
  //         Authorization: `Bearer ${user?.token}`,
  //       },
  //     })
  //     .then(({ data }) =>
  //       data.products
  //         ? setBasket(data.products)
  //         : setBasket(fakeData.productsList)
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //       setBasket(fakeData.productsList); //line to delete
  //     });
  // }, []);

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
          console.log("price in map", product);
          const removeProduct = () => {
            deleteItem(user, product.cartId)
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
                    {product.price * product.quantity ||
                      (product.quantity === 0 && product.price)}
                  </Text>
                </View>
                <Text style={styles.subHeaderText}>{product.date}</Text>
                {/* CAMBIE STOCK POR QUANTITY */}
                {/* BOTONERA */}
                <View style={styles.botonera}>
                  <TouchableOpacity
                    onPress={() =>
                      updateQuantity(product.id, product.quantity - 1, i)
                    }
                  >
                    <FontAwesome5
                      name="minus-square"
                      size={20}
                      color="#3D9D5D"
                    />
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10 }}>
                    {product.quantity}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      updateQuantity(product.id, product.quantity + 1, i)
                    }
                  >
                    <FontAwesome5
                      name="plus-square"
                      size={20}
                      color="#3D9D5D"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => removeProduct()}>
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

  //         addToCart(user, {
  //           productId: product.id,
  //           quantity: quantity >= 1 && quantity - 1,
  //         })
  //           .then((response) => response)
  //           .catch((error) => console.log("CATCH", error.response));
  //         {
  //           console.log("PRODUCT", product);
  //           console.log("QUANTITY", quantity);
  //         }
  //         const decreaseAmount = () => {
  //           return quantity > 1 && setQuantity(product.quantity - 1);
  //         };

  //         const increaseAmount = () => {
  //           return setQuantity(product.quantity + 1);
  //         };

  //         const removeProduct = () => {
  //           deleteItem(user, product.cartId)
  //             .then((response) => setNewCart(response.data))
  //             .catch((err) => console.log("Catch", err.response));
  //         };

  const Total = () => {
    return (
      <View style={styles.menuContainer}>
        <View style={styles.footerContainer}>
          <Text style={[styles.footerMainText]}>Total</Text>
          <Text style={[styles.footerMainText]}>$ {verTotal}</Text>
        </View>
        <View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerSecondaryText}>Delivery</Text>
            <Text style={styles.footerSecondaryText}>$ 200</Text>
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
          <Text style={styles.textStyle}>$ {verTotal}</Text>
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
