import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import globalStyles from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

{
  /* COMPONENTS */
}
import { MenuComponent } from "../../components";
import CartService from "../../services/CartService";

const ProductScreen = ({ route }) => {
  const { name, expPrice, expDate, img, providerName, description } =
    route.params.product;

  const [alreadyInCart, setAlreadyInCart] = useState(false);
  const [productLenght, setProductLenght] = useState(0);

  useEffect(async () => {
    productLength(user, _id).then((response) => {
      setProductLenght(response.data.productLength);
    });
  }, []);

  useEffect(() => {
    productLenght > 0 && setAlreadyInCart(true);
  }, [productLenght]);

  console.log("number lenght:", productLenght);

  const user = useSelector(selectUser);

  const AddProductToCart = () => {
    addToCart(user, { productId: _id, quantity: "1" })
      .then((response) => response)
      .catch((error) => console.log("CATCH", error.response));
    setAlreadyInCart(true);
  };

  console.log("AAA ROUTE", route.params);

  const navigator = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.viewContainer}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        {/* MENU */}
        <MenuComponent onPress={() => navigator.goBack()} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 15 }}
        >
          <Text
            style={[
              styles.productTitle,
              globalStyles.fontBold,
              globalStyles.fontMain,
            ]}
          >
            {name}
          </Text>

          <View
            style={[
              styles.productBanner,
              styles.bannerLargeMargin,
              globalStyles.row,
              globalStyles.fontSecondary,
            ]}
          >
            <View style={styles.bannetTitles}>
              <Text
                style={[
                  styles.bannerSamllMargin,
                  globalStyles.fontMedium,
                  globalStyles.fontBold,
                ]}
              >
                Precio
              </Text>
              <Text style={[styles.bannerLargeMargin, globalStyles.fontMedium]}>
                $ {expPrice}
              </Text>

              <Text
                style={[
                  styles.bannerSamllMargin,
                  globalStyles.fontMedium,
                  globalStyles.fontBold,
                ]}
              >
                Fecha de Vencimiento
              </Text>
              <Text style={[styles.bannerSamllMargin, globalStyles.fontMedium]}>
                {expDate}
              </Text>
              {/* El objeto no trae "expiration date" */}
            </View>

            <Image style={styles.productImage} source={{ uri: img }} />
          </View>

          <View style={globalStyles.row}>
            <View style={globalStyles.widthHalf}>
              <Text
                style={[
                  styles.bannerSamllMargin,
                  globalStyles.fontMedium,
                  globalStyles.fontBold,
                ]}
              >
                Comercio
              </Text>

              <View
                style={[
                  styles.seller,
                  globalStyles.row,
                  globalStyles.alignItemsCenter,
                  globalStyles.fontSmall,
                ]}
              >
                {/* <Image
                  style={styles.productSeller}
                  source={{ uri: seller.url }}
                /> */}

                {/* <Text>{seller.title}</Text> */}
                <Text>{providerName}</Text>
              </View>
            </View>

            <View style={globalStyles.widthHalf}>
              <Text
                style={[
                  styles.bannerSamllMargin,
                  globalStyles.fontMedium,
                  globalStyles.fontBold,
                ]}
              >
                Cantidad
              </Text>

              <View
                style={[
                  styles.bannerLargeMargin,
                  globalStyles.row,
                  globalStyles.alignItemsCenter,
                ]}
              >
                <Text style={globalStyles.sellIcons}>-</Text>
                <Text style={{ marginHorizontal: 15 }}>1</Text>
                <Text style={globalStyles.sellIcons}>+</Text>
              </View>
            </View>
          </View>

          <Text
            style={[
              styles.bannerSamllMargin,
              globalStyles.fontMedium,
              globalStyles.fontBold,
            ]}
          >
            Descripción
          </Text>

          <Text style={[globalStyles.fontSmall]}>{description}</Text>

          <View style={{ height: 180 }}></View>
        </ScrollView>
      </View>
      {/* BUTTON */}
      <TouchableOpacity
        onPress={() => AddProductToCart()}
        disabled={alreadyInCart}
        style={[
          styles.purchaseButton,
          globalStyles.widthFluid,
          alreadyInCart ? styles.added : globalStyles.primary,
        ]}
      >
        <Text style={globalStyles.textWhite}>
          {!alreadyInCart ? "Agregar al carrito" : "Agregado en el carrito"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  viewContainer: {
    // paddingTop: 40,
    paddingHorizontal: 10,
  },

  seller: {
    width: "50%",
  },

  productTitle: {
    fontSize: 38,
    width: "50%",
  },

  productSeller: {
    width: 40,
    height: 40,
  },

  productBanner: {
    alignItems: "flex-end",
  },

  bannetTitles: {
    paddingBottom: 20,
    width: "50%",
  },

  bannerSamllMargin: {
    marginBottom: 10,
  },

  bannerLargeMargin: {
    marginBottom: 25,
  },

  productImage: {
    width: 250,
    height: 250,
    borderRadius: 300,
    right: -20,
    backgroundColor: "#F4F4F4",
  },

  purchaseButton: {
    position: "absolute",
    bottom: 0,
    padding: 15,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  added: {
    backgroundColor: "#979797",
  },
});
