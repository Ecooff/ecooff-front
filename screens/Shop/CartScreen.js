import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FooterComponent, MenuComponent } from "../../components";
import { StatusBar } from "expo-status-bar";
import globalStyles from "../../styles/styles";
import authStyles from "../../styles/authStyles";
import { useNavigation } from "@react-navigation/native";
import Checkout from "./Checkout";

const CartScreen = () => {
  // const [user, setUser] = useState("");//should by global state
  const [basket, setBasket] = useState([]);

  // const { title } = route.params.item;
  const navigator = useNavigation();

  const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  };

  const shadowStyleProducts = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  };

  const productsList = [
    {
      url: "http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0de.png",
      title: "Coca Cola",
      price: "340",
      expirationDate: "7 días",
      seller: {
        url: "http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png",
        title: "Carrefour",
      },
    },
    {
      url: "https://bimbocentroamerica-com-assets.s3.amazonaws.com/s3fs-public/inline-images/1-Pan-Blanco.png?gYmTW593ZNv45iX3zRB7iV9pQ7Njocpj",
      title: "Pan Lactal Bimbo",
      price: "230",
      expirationDate: "4 días",
      seller: {
        url: "http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png",
        title: "Carrefour",
      },
    },
    {
      url: "https://sicarfarms.com/wp-content/uploads/2021/01/Platano.png",
      title: "Bananas",
      price: "404",
      expirationDate: "5 días",
      seller: {
        url: "http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png",
        title: "Carrefour",
      },
    },
  ];

  useEffect(() => {
    setBasket(productsList);
  }, []);

  const MyBasket = () => {
    console.log("checking BASKET-->", basket);
    if (basket.length === 0) return <Text>Nada en el carrito</Text>;
    return basket.map((product, i) => {
      console.log(`checking PRODUCT n${i}--> `, product);
      return (
        <View key={i} style={shadowStyleProducts}>
          <TouchableOpacity
            onPress={() => navigator.navigate("Product", { product })}
            style={[
              styles.productCard,
              globalStyles.row,
              shadowStyle,
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
                {product.title}
              </Text>

              <View style={[{ width: "100%" }, globalStyles.row]}>
                <View style={[styles.cardBody, { width: "50%" }]}>
                  <Text style={[styles.cardTitles, globalStyles.fontSmall]}>
                    $ {product.price}
                  </Text>
                  <Text style={[styles.cardTitles, globalStyles.fontSmall]}>
                    {product.expirationDate}
                  </Text>

                  <View
                    style={[
                      styles.cardTitles,
                      styles.seller,
                      globalStyles.row,
                      globalStyles.alignItemsCenter,
                      globalStyles.fontSmall,
                    ]}
                  >
                    <Image
                      style={styles.productListSeller}
                      source={{ uri: product.seller.url }}
                    />

                    <Text>{product.seller.title}</Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.bannerLargeMargin,
                    globalStyles.row,
                    globalStyles.alignItemsCenter,
                  ]}
                >
                  <Text style={globalStyles.sellIcons}>-</Text>
                  <Text style={{ marginHorizontal: 10 }}>1</Text>
                  <Text style={globalStyles.sellIcons}>+</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };

  return (
    <View>
      {/* <StatusBar backgroundColor="blue" barStyle="dark-content" /> */}
      <ScrollView style={styles.menuContainer}>
        <MenuComponent />
        <Text style={[authStyles.title, globalStyles.fontLarge]}>
          Tu carrito
        </Text>

        <MyBasket />
        {/* <View style={{justifyContent: 'space-between'}}>
            <Text style={[authStyles.title, globalStyles.fontLarge]}>
              Total
            </Text>
            <Text style={[authStyles.title, globalStyles.fontLarge]}>$850</Text>
        </View>
        <View>
          <Text>
            <Text style={[authStyles.title, globalStyles.fontLarge]}>
              Delivery
            </Text>
            <Text style={[authStyles.title, globalStyles.fontLarge]}>$200</Text>
          </Text>
          <Text>
            <Text style={[authStyles.title, globalStyles.fontLarge]}>
              Productos
            </Text>
            <Text style={[authStyles.title, globalStyles.fontLarge]}>$650</Text>
          </Text>
        </View> */}
        <Checkout />

        {/* <View style={globalStyles.widthHalf}>
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
        </View> */}
      </ScrollView>
      {/* <FooterComponent /> */}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
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
    borderRadius: 10,
  },

  product: {
    width: 90,
    height: 90,
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
