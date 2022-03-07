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
import axios from "axios";
import {localhost} from "../localhost.json"

{
  /* COMPONENTS */
}
import { MenuComponent, FooterComponent } from "../components";
import OrderOnRequestComponent from "../components/OrderOnRequestComponent";
import FilterComponent from "../components/FilterComponent";
import { fakeData } from "../utils/fakeData";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

const HomeScreen = () => {
  const [search, setQuery] = useState("");
  const user = useSelector(selectUser);
  const [orderOnRequest, setOrderOnRequest] = useState(false); // set true to see OrderOnRequestComponent
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("CHECKING STORE USER STATE --> ",user)

    // setProducts(fakeData.productsBigList)
    axios.get(`http://${localhost}/api/products/`, {
      headers: {
        // 'Authorization': `Bearer ${user?.token}`
      }
    })
    // .then(({data}) => setProducts(data)) //check w console.log(data)
    .then(({ data }) => console.log("DATA", data)) //tst line, delete then
    .catch((err) => {
      console.log("something was wrong", err)
      setProducts(fakeData.productsBigList)
    }) //check w console.log(e)
  }, []);

  // useEffect(() => {
  //   setOrderOnRequest()
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

      <ScrollView style={styles.scrollContainer}>
        {/* MENU */}
        <MenuComponent />

        {/* ORDER ON REQUEST (IN CASE THERE IS ONE) */}
        {orderOnRequest ? <OrderOnRequestComponent /> : <View />}

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
                style={styles.iconsContainer}
              >
                <Image style={styles.icons} source={item.icon} />

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

            <Pressable
              style={styles.filterContainerBox}
              onPress={() => navigator.navigate('Filter')} //Testing(FilterComponet)
            >
              <View style={styles.filterContainer}>
                <AntDesign name="filter" size={24} color="#979797" />
              </View>
            </Pressable>
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
                  {products[index]?.map((product, y) => {
                    return (
                      <TouchableOpacity
                        key={y}
                        onPress={() => navigator.navigate("Cart", { product })}
                        style={styles.productsContainer}
                      >
                        <View style={shadowStyle}>
                          <Image
                            style={
                              index < 2
                                ? styles.productOfList
                                : styles.commerceOfList
                            }
                            source={{ uri: product.url }}
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
                          {product.title}
                        </Text>
                        {index < 2 ? (
                          <Text
                            style={[
                              styles.alignTextStart,
                              styles.secondLabel,
                              globalStyles.fontSmall,
                            ]}
                          >
                            $ {product.price}
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
    paddingTop: 40,
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
