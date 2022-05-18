import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Modal,
} from "react-native";
import globalStyles from "../styles/styles";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import SplashLogo from "../assets/splash.png";
import { BackHandler } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { MaterialIcons } from "@expo/vector-icons";
import { commonFunctions } from "../utils";

{
  /* COMPONENTS */
}
import { MenuComponent, FooterComponent } from "../components";
import ProductList from "../components/ProductList";
import CheckoutComponent from "../components/CheckOutCoponent";

{
  /* SERVICES */
}
import productService from "../services/ProductService";
import ordersService from "../services/OrdersService";

const HomeScreen = () => {
  const { getAllProviders, closeToExp, forYou, getByUserId } = productService;

  const [search, setQuery] = useState("");
  const [queryProducts, setQueryProducts] = useState([]);
  const [orderOnRequest, setOrderOnRequest] = useState(true);
  const [order, setOrder] = useState({});
  const [providers, setProviders] = useState([]);
  const [closeToExpire, setCloseToExpire] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const user = useSelector(selectUser);

  useEffect(() => {
    getAllProviders(user)
      .then((response) => setProviders(response.data))
      .catch((err) => console.log(err.response.data.message)),
      closeToExp(user).then((response) => setCloseToExpire(response.data)),
      forYou(user).then((response) => setFeatured(response.data));

    ordersService.getListOfOrders(user).then((response) => {
      setOrder(response.data[0].order);
      console.log("Data ", response.data[0].order);
    });

    BackHandler.removeEventListener(true);
  }, []);

  // FOR CLOSEING THE MODAL
  const callback = (param) => {
    setModalVisible(param);
  };

  const everything = [closeToExpire, featured, providers];

  const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  };

  const listOfProducts = [
    "Próximos a vencer",
    "Pensados para vos",
    "Comercios",
  ];

  const items = [
    { icon: require("../assets/icons/store.png"), title: "Mercado", id: 1 },
    {
      icon: require("../assets/icons/cosmetic.png"),
      title: "Cosmetica",
      id: 2,
    },
    { icon: require("../assets/icons/pharmacy.png"), title: "Farmacia", id: 3 },
    {
      icon: require("../assets/icons/surprice.png"),
      title: "Sorpresas",
      id: 4,
    },
  ];

  const navigator = useNavigation();

  // Do Search
  const doSearch = (query) => {
    // Set Query for input
    setSearchLoading(true);
    setQuery(query);

    // Call API
    if (query != null && query != "") {
      productService
        .queryPartialMatch(user, query)
        .then((response) => {
          setQueryProducts(response.data);
          setSearchLoading(false);
        })
        .catch((err) => {
          setSearchLoading(false);
        });
    } else {
      setQueryProducts([]);
      setSearchLoading(false);
    }
  };

  return (
    <View style={[styles.homeContainer]}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* <Image source={SplashLogo} style={{width: 200, height: 200, position: 'absolute', bottom: 10, zIndex: 1}} /> */}

      <ScrollView style={styles.scrollContainer}>
        {/* MENU */}
        <MenuComponent />

        {/* ORDER ON REQUEST (IN CASE THERE IS ONE) */}
        {/* {orderOnRequest ? <OrderOnRequestComponent /> : <View />} */}

        {/* CATEGORIES SCROLL */}
        <View
          style={[
            globalStyles.row,
            globalStyles.alignItemsCenter,
            globalStyles.justifyContentBetween,
          ]}
        >
          {items.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigator.navigate("List", { item })}
                // onPress={() => navigator}
                // onPress={() => console.log("demo")}
                style={styles.iconsContainer}
              >
                <Image
                  style={styles.icons}
                  source={item.icon}
                  onPress={() => console.log("demo")}
                />

                <Text style={globalStyles.fontXSmall}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {order != null && order.status != "Completada" ? (
          <View style={styles.pendingOrder}>
            <View
              style={[
                globalStyles.row,
                globalStyles.justifyContentBetween,
                globalStyles.alignItemsCenter,
                styles.infoText,
              ]}
            >
              <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>
                <View
                  style={[
                    styles.orderIcons,
                    { paddingVertical: 8 },
                    { paddingHorizontal: 5 },
                  ]}
                >
                  <EvilIcons name="location" size={24} color="green" />
                </View>

                <Text>Tenés un pedido en curso</Text>
              </View>

              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={{ textDecorationLine: "underline" }}>Ver</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        <View style={styles.products}>
          {/* SEARCHER */}
          <View
            style={[
              styles.searchContainer,
              globalStyles.row,
              globalStyles.alignItemsCenter,
              shadowStyle,
            ]}
          >
            <View style={styles.inputSearch}>
              {searchLoading ? (
                <ActivityIndicator
                  style={[globalStyles.icons, { left: 2 }, { marginEnd: 4 }]}
                  color="#4db591"
                />
              ) : (
                <EvilIcons name="search" style={globalStyles.icons} />
              )}

              <TextInput
                placeholder="Buscar"
                value={search}
                keyboardType="email-address"
                icon="mail"
                onChangeText={(query) => doSearch(query)}
                style={globalStyles.input}
              />
            </View>
          </View>

          {/* ROW PRODUCTS */}
          {
            // IF I'M SEARCHING
            search == null || search == "" ? (
              listOfProducts.map((list, index) => {
                return (
                  <View key={index} style={styles.productsListContainer}>
                    <View
                      style={[
                        styles.listTitle,
                        globalStyles.row,
                        globalStyles.alignItemsCenter,
                        globalStyles.justifyContentBetween,
                      ]}
                    >
                      <Text style={[globalStyles.fontMedium]}>{list}</Text>

                      <TouchableOpacity
                        onPress={() => navigator.navigate("GroupList")}
                        // onPress={() => console.log("demo")}
                        style={globalStyles.fontSmall}
                      >
                        {/* <Text>Ver todos</Text> */}
                      </TouchableOpacity>
                    </View>

                    <ScrollView
                      showsHorizontalScrollIndicator={false}
                      style={styles.productScroll}
                      horizontal={true}
                    >
                      {everything[index].map((product, y) => {
                        return (
                          <TouchableOpacity
                            key={y}
                            onPress={() =>
                              index <= 1
                                ? navigator.navigate("Product", { product })
                                : navigator.navigate("GroupList", { product })
                            }
                            // onPress={() => console.log("demo")}
                            style={styles.productsContainer}
                          >
                            <View style={shadowStyle}>
                              <Image
                                style={
                                  index < 2
                                    ? styles.productOfList
                                    : styles.commerceOfList
                                }
                                source={{ uri: product.img }}
                              />
                            </View>

                            <Text
                              style={[
                                styles.alignTextStart,
                                globalStyles.fontSmall,
                                globalStyles.fontBold,
                                globalStyles.widthFluid,
                                index >= 2 ? globalStyles.textCenter : null,
                              ]}
                            >
                              {product.provider ||
                                commonFunctions.capitalize(product.name)}
                            </Text>
                            {index < 2 ? (
                              <Text
                                style={[
                                  styles.alignTextStart,
                                  styles.secondLabel,
                                  globalStyles.fontSmall,
                                ]}
                              >
                                $ {product.expPrice}
                              </Text>
                            ) : null}
                          </TouchableOpacity>
                        );
                      })}
                    </ScrollView>
                  </View>
                );
              })
            ) : // IF I'M SEARCHING HANDLER RESULTS/ NO RESULTS
            queryProducts.length > 0 ? (
              queryProducts.map((product, index) => {
                return (
                  <ProductList
                    key={product._id}
                    product={product}
                    index={index}
                  />
                );
              })
            ) : (
              <View
                style={[
                  styles.scrollTitle,
                  globalStyles.row,
                  globalStyles.justifyContentCenter,
                ]}
              >
                <MaterialIcons name="search-off" size={200} color="lightgrey" />
              </View>
            )
          }
        </View>
      </ScrollView>

      {/* FOOTER */}
      <FooterComponent />

      {/* MODAL */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CheckoutComponent
          orderId={order.orderId}
          user={user}
          parentCallback={callback}
        />
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },

  products: {
    paddingHorizontal: 10,
    marginBottom: 150,
  },

  scrollContainer: {
    // paddingTop: 40,
    paddingHorizontal: 10,
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
    marginVertical: 40,
    justifyContent: "space-between",
  },

  inputSearch: {
    width: "100%",
    height: "90%",
    flexDirection: "row",
    backgroundColor: "#f8f4f4",
    alignItems: "center",
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
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
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
    paddingHorizontal: 10,
  },

  pendingOrder: {
    marginTop: 35,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  orderIcons: {
    marginRight: 12,
    backgroundColor: "#F4F4F4",
    borderRadius: 50,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
