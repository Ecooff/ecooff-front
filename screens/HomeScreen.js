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
import { FontAwesome5 } from "@expo/vector-icons";
import SplashLogo from "../assets/splash.png";
import { BackHandler } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

{
  /* COMPONENTS */
}
import { MenuComponent, FooterComponent } from "../components";
// import OrderOnRequestComponent from "../components/OrderOnRequestComponent"; //comente esto tambien porque no encuentra el componente
import productService from "../services/ProductService";

const HomeScreen = () => {
  const { getAllProviders, closeToExp, forYou, getByUserId } = productService;

  const [search, setQuery] = useState("");
  const [orderOnRequest, setOrderOnRequest] = useState(true);
  const [providers, setProviders] = useState([]);
  const [closeToExpire, setCloseToExpire] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [userById, setUserById] = useState({});
  const [todos, setTodos] = useState([]);

  const user = useSelector(selectUser);

  // console.log("THEEUSERRR", user);

  useEffect(() => {
    getAllProviders(user)
      .then((response) => setProviders(response.data))
      .catch((err) => console.log(err.response.data.message)),
      closeToExp(user).then((response) => setCloseToExpire(response.data)),
      forYou(user).then((response) => setFeatured(response.data));
    BackHandler.removeEventListener(true);
    // userById().then(response => setUserById(response.data))
  }, []);

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
            {/* <FilterComponent /> */}
            {/* comente esto porque no encontraba el componente ( FIlterComponent )  */}
          </View>

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
    width: "100%",
    height: "90%",
    flexDirection: "row",
    backgroundColor: "#f8f4f4",
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
