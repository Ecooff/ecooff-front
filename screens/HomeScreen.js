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
  Pressable,
  Modal,
} from "react-native";
import globalStyles from "../styles/styles";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
<<<<<<< HEAD
import { FontAwesome5 } from "@expo/vector-icons";
import SplashLogo from '../assets/splash.png';
=======
import axios from "axios";
import { localhost } from "../localhost.json";
>>>>>>> aa38dd34f6d4063704a7b4825c58cdb1e90dfcac

{
  /* COMPONENTS */
}
import { MenuComponent, FooterComponent } from "../components";
<<<<<<< HEAD
import OrderOnRequestComponent from "../components/OrderOnRequestComponent";
import productService from "../services/ProductService";
=======
import OrderComingComponent from "../components/OrderComingComponent";
import FilterComponent from "../components/FilterComponent";
import { fakeData } from "../utils/fakeData";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { myOrder } from "../store/orderSlice";
>>>>>>> aa38dd34f6d4063704a7b4825c58cdb1e90dfcac

const HomeScreen = () => {
  const { getAllProviders, closeToExp, forYou, getByUserId } = productService;

  const [search, setQuery] = useState("");
<<<<<<< HEAD
  const [orderOnRequest, setOrderOnRequest] = useState(true);
  const [providers, setProviders] = useState([]);
  const [closeToExpire, setCloseToExpire] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [userById, setUserById] = useState({});
  const [todos, setTodos] = useState([]);

  console.log("functionProvider", getAllProviders());

  useEffect(() => {
    getAllProviders().then((response) => setProviders(response.data)),
      closeToExp().then((response) => setCloseToExpire(response.data)),
      forYou().then((response) => setFeatured(response.data));
    // userById().then(response => setUserById(response.data))
  }, []);

  console.log("TODOOOS", todos);

  // console.log("Close to expire : ", closeToExpire);
  // console.log("Providers : ", providers);
  console.log("For you : ", featured);
  // console.log('getByUserId', userById)

  const everything = [closeToExpire, featured, providers];

  console.log("EVERYTHING", everything);
=======
  const user = useSelector(selectUser);

  const [orderComing, setOrderComing] = useState(true);

  const [products, setProducts] = useState([]);

  // const [productsCloseToExp, setProductsCloseToExp] = useState([]);
  // const [productsForYou, setProductsForYou] = useState([]);
  // const [providers, setProviders] = useState([])

  const dispatch = useDispatch();

  /**
   * FOR DEMO ONLY
   */
  useEffect(() => {
    setProducts(fakeData.productsBigList)
  }, [])

  // useEffect(() => { // NOTE: it will be out of service ----------
  //   axios
  //     .get(`http://${localhost}/api/products/`, {
  //       headers: {
  //         Authorization: `Bearer ${user?.token}`,
  //       },
  //     })
  //     .then(({data}) => setProducts(data)) //check w console.log(data)
  //     .catch((err) => console.log(err));
  // }, []);
>>>>>>> aa38dd34f6d4063704a7b4825c58cdb1e90dfcac

  // useEffect(() => {
  //   dispatch(myOrder(fakeData.orderHistory[0]))
  //   axios
  //     .get(`http://${localhost}/api/orders/getByUserId`, {userId: user.id}, {
  //       headers: {
  //         Authorization: `Bearer ${user?.token}`,
  //       },
  //     })
  //     .then(({ data }) => data ? setOrderComing(data) : "")
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   axios // PRODUCTS CLOSE TO EXP
  //     .get(`http://${localhost}/api/stock/closeToExp`, { headers: { Authorization: `Bearer ${user?.token}` } })
  //     .then(({ data }) => data ? setProductsCloseToExp(data) : "")
  //     .catch((err) => console.log(err));
  //   axios  // PRODUCTS FOR YOU
  //     .get(`http://${localhost}/api/stock/forYou`, { headers: { Authorization: `Bearer ${user?.token}` } })
  //     .then(({ data }) => data ? setProductsForYou(data) : "")
  //     .catch((err) => console.log(err));
  //   axios // PROVIDERS
  //     .get(`http://${localhost}/api/providers`, { headers: { Authorization: `Bearer ${user?.token}` } })
  //     .then(({ data }) => data ? setProviders(data) : "")
  //     .catch((err) => console.log(err));
  // }, []);

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
    { icon: require("../assets/icons/store.png"), title: "Mercado" },
    { icon: require("../assets/icons/cosmetic.png"), title: "Cosmetica" },
    { icon: require("../assets/icons/pharmacy.png"), title: "Farmacia" },
    { icon: require("../assets/icons/surprice.png"), title: "Sorpresas" },
  ];

  const navigator = useNavigation();

  return (
    <View style={[styles.homeContainer]}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* <Image source={SplashLogo} style={{width: 200, height: 200, position: 'absolute', bottom: 10, zIndex: 1}} /> */}

      <ScrollView style={styles.scrollContainer}>
        {/* MENU */}
        <MenuComponent />

        {/* ORDER ON REQUEST (IN CASE THERE IS ONE) */}
<<<<<<< HEAD
        {orderOnRequest ? <OrderOnRequestComponent /> : <View />}
=======
        {orderComing?.status === 'Pending' || true ? <OrderComingComponent /> : <View />}
>>>>>>> aa38dd34f6d4063704a7b4825c58cdb1e90dfcac

        {/* CATEGORIES SCROLL */}
        <View
          style={[
            styles.categoryScroll,
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
                // onPress={() => console.log("demo")}
                style={styles.iconsContainer}
              >
                <Image style={styles.icons} source={item.icon} onPress={() => console.log("demo")}/>

                <Text style={globalStyles.fontXSmall}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

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
              <EvilIcons name="search" style={globalStyles.icons} />

              <TextInput
                placeholder="Buscar"
                value={search}
                keyboardType="email-address"
                icon="mail"
                onChangeText={(query) => setQuery(query)}
                style={globalStyles.input}
              />
            </View>

            {/* <Pressable
              style={styles.filterContainerBox}
              onPress={() => navigator.navigate("Filter")} //Testing(FilterComponet)
            >
              <View style={styles.filterContainer}>
                <AntDesign name="filter" size={24} color="#979797" />
              </View>
            </Pressable> */}
            <FilterComponent />
          </View>
          
          {/*  */}

          {/* ROW PRODUCTS */}
          {listOfProducts.map((list, index) => {
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
                    <Text>Ver todos</Text>
                  </TouchableOpacity>
                </View>

                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  style={styles.productScroll}
                  horizontal={true}
                >
<<<<<<< HEAD
                  {everything[index].map((product, y) => {
=======
                  {products[index]?.map((product, y) => {
>>>>>>> aa38dd34f6d4063704a7b4825c58cdb1e90dfcac
                    return (
                      <TouchableOpacity
                        key={y}
                        onPress={() => navigator.navigate("Cart", { product })}
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
                          {product.provider || product.title}
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
          })}
        </View>
      </ScrollView>

      {/* FOOTER */}
      <FooterComponent />
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
    width: "83%",
    flexDirection: "row",
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    borderRadius: 12,
  },

  // filterContainerBox: {
  //   width: "10%",
  //   justifyContent: "flex-end",
  //   marginRight: 10,
  // },

  // filterContainer: {
  //   backgroundColor: "#F9FAFB",
  //   textAlign: "center",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: 45,
  //   paddingVertical: 10,
  //   borderRadius: 12,
  // },

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
});
