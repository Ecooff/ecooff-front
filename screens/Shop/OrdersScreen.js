import {
  Pressable,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { MenuComponent } from "../../components";
import globalStyles from "../../styles/styles";
import productStyles from "../../styles/productStyles";
import { fakeData } from "../../utils/fakeData";
import Checkout from "./Checkout";

const OrdersScreen = () => {
  const [order, setOrder] = useState([]);

  // const { title } = route.params.item;
  const navigator = useNavigation();

  useEffect(() => {
    setOrder(fakeData.productsList);
  }, []);

  const MyOrder = () => {
    if (order.length === 0) return <Text>Nada en esta orden</Text>;
    return order.map((product, i) => {
      return (
        <View key={i}>
          <TouchableOpacity
            onPress={() => navigator.navigate("Product", { product })}
            style={[
              styles.productCard,
              globalStyles.row,
              productStyles.shadow,
              globalStyles.alignItemsCenter,
            ]}
          >
            <View style={styles.cardImage}>
              <Image style={styles.product} source={{ uri: product.url }} />
            </View>

            <View>
              <Text
                style={[
                  { paddingLeft: 15 },
                  styles.cardTitles,
                  globalStyles.fontSmall,
                  globalStyles.fontBold,
                ]}
              >
                {!product.amount ? 1 : product.amount} x {product.title}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };

  //NOTE: product.amount to request in the future

  // const DeliveryAndPayment = () => {
  //   return (
  //     <View style={styles.deliveryMainContainer}>
  //       <View style={styles.deliveryContainer}>
  //         <MaterialCommunityIcons name="truck-fast-outline" size={33} color="#3D9D5D" />
  //         <View style={styles}>
  //           <Text style={styles.deliveryMainText}>Delivery a dirección</Text>
  //           <Text style={styles.deliverySmallText}>Order de más de $7000 tiene envío gratis</Text>
  //         </View>
  //         <Pressable onPress={() => navigator.navigate("Profile")}>
  //             <Text style={styles.editText}>Editar</Text>
  //         </Pressable>
  //       </View>
  //       <View style={styles.deliveryContainer}>
  //         <MaterialIcons name="payment" size={33} color="#3D9D5D" />
  //         <View style={styles}>
  //           <Text style={styles.deliveryMainText}>Método de pago</Text>
  //           <Text style={styles.deliverySmallText}>Efectivo</Text>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  const Saving = () => {
    return (
      <View>
        <View style={styles.savingTextContainer}>
          <Text style={styles.savingText}>Agua</Text>
          <Text style={styles.savingText}>8 litros</Text>
        </View>
        <View style={styles.savingTextContainer}>
          <Text style={styles.savingText}>Comida</Text>
          <Text style={styles.savingText}>3 platos</Text>
        </View>
      </View>
    );
  };

  const goToHome = () => {
    navigator.navigate("Home");
  };

  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView style={styles.menuContainer}>
        <MenuComponent />

        <Text style={styles.header}>Con tu compra</Text>

        <MyOrder />

        {/* <DeliveryAndPayment /> */}

        <Text style={styles.savingHeader}>Ahorraste</Text>

        <Saving />

        {/* <Pressable style={styles.button} onPress={goToHome}>
          <Text style={styles.buttonText}>Continuar</Text>
        </Pressable> */}
        <Checkout />
      </ScrollView>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  content: {
    margin: 15,
  },

  header: {
    fontWeight: "bold",
    fontSize: 38,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
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
  },

  savingContainer: {
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: "95%",
    backgroundColor: "#3D9D5D",
    alignSelf: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  savingHeader: {
    fontWeight: "bold",
    fontSize: 24,
    alignSelf: "center",
    marginTop: 60,
  },
  savingTextContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  savingText: {
    fontWeight: "bold",
    margin: 15,
  },

  //----------------------------------------------

  homeContainer: {
    flex: 1,
  },

  products: {
    paddingHorizontal: 10,
    marginBottom: 150,
  },

  menuContainer: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },

  scrollContainer: {
    paddingHorizontal: 10,
  },

  categoryScroll: {
    marginHorizontal: -20,
    paddingLeft: 10,
  },

  scrollTitle: {
    marginTop: 30,
    marginBottom: 30,
  },

  iconsContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  icons: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },

  searchContainer: {
    justifyContent: "space-between",
    marginTop: 10,
  },

  inputSearch: {
    width: "83%",
    flexDirection: "row",
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    borderRadius: 12,
  },

  filterContainerBox: {
    width: "10%",
    justifyContent: "flex-end",
    marginRight: 10,
  },

  filterContainer: {
    backgroundColor: "#F9FAFB",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    paddingVertical: 10,
    borderRadius: 12,
  },

  productsListContainer: {
    marginBottom: 25,
  },

  productsContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: 110,
    marginHorizontal: 10,
    alignItems: "flex-start",
  },

  listTitle: {
    marginBottom: 25,
  },

  productOfList: {
    width: 110,
    height: 110,
    marginBottom: 15,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    borderTopStartRadius: 50,
    backgroundColor: "#F4F4F4",
  },

  commerceOfList: {
    width: 110,
    height: 110,
    marginBottom: 15,
    borderRadius: 100,
    backgroundColor: "#F4F4F4",
  },

  secondLabel: {
    marginTop: 10,
  },

  productScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },

  productCard: {
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },

  cardImage: {
    padding: 5,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    borderWidth: 0.2,
    marginLeft: 20,
  },

  product: {
    width: 50,
    height: 50,
  },

  cardBody: {
    paddingHorizontal: 15,
  },

  cardTitles: {
    marginBottom: 5,
  },

  bannerLargeMargin: {
    width: "30%",
    justifyContent: "flex-end",
    marginBottom: 20,
  },

  productListSeller: {
    width: 30,
    height: 30,
  },
});
