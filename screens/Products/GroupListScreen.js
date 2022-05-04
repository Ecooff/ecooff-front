import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import productService from "../../services/ProductService";
import AllSubcategories from "../../components/AllSubcategories";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

{
  /* COMPONENTS */
}
import { MenuComponent, FooterComponent } from "../../components";

const GroupListScreen = ({ route }) => {
  const { getByProvSubcat } = productService;
  const titleProvider = route.params.product.providerName;
  const idProvider = route.params.product._id;

  const user = useSelector(selectUser);

  console.log("ROUTEPARAMSS", route.params.product);

  const { img, name } = route.params.product;

  console.log(img, name);

  const [search, setQuery] = useState("");
  const [productsProvider, setProductsProvider] = useState([]);

  useEffect(() => {
    getByProvSubcat(idProvider, "1", user).then((response) =>
      setProductsProvider(response.data)
    );
  }, []);

  const callback = (IDSUBCATEGORY) => {
    console.log("IDSUBCATEGGORY", IDSUBCATEGORY);
  };

  // const CARREFOUR = productsProvider.filter((product) => product.providerName === 'Carrefour');
  // const COTO = productsProvider.filter((product) => product.providerName === 'Coto');
  // const DIA = productsProvider.filter((product) => product.providerName === 'Dia');
  // const FARMACITY = productsProvider.filter((product) => product.providerName === 'Farmacity');
  // const KIOSCO = productsProvider.filter((product) => product.providerName === '365');

  console.log("productsProvider", productsProvider);

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

  const navigator = useNavigation();

  return (
    <View style={[styles.homeContainer]}>
      {/* <StatusBar backgroundColor="blue" barStyle="dark-content" /> */}

      <View style={styles.menuContainer}>
        {/* MENU */}
        <MenuComponent onPress={() => navigator.goBack()} />
      </View>

      <ScrollView style={styles.scrollContainer}>
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

            {/* <View style={styles.filterContainerBox}>
              <View style={styles.filterContainer}>
                <AntDesign name="filter" size={24} color="#979797" />
              </View>
            </View> */}
          </View>
          <View style={{ marginTop: 20 }}>
            <AllSubcategories
              idProvider={idProvider}
              parentCallback={callback}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                styles.scrollTitle,
                globalStyles.fontLarge,
                globalStyles.fontBold,
              ]}
            >
              {name}
            </Text>
            <Image
              source={{ uri: img }}
              style={{ width: 55, height: 55, marginLeft: 20 }}
            />
          </View>
          {/* CATEGORIES SCROLL */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.productScroll}
          >
            {productsProvider.map((product, index) => {
              return (
                <View key={index} style={shadowStyleProducts}>
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
                      <Image
                        style={styles.product}
                        source={{ uri: product.url }}
                      />
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
                        <View style={[styles.cardBody, { width: "70%" }]}>
                          <Text
                            style={[styles.cardTitles, globalStyles.fontSmall]}
                          >
                            $ {product.expPrice}
                          </Text>
                          <Text
                            style={[styles.cardTitles, globalStyles.fontSmall]}
                          >
                            {product.expirationDate}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <FooterComponent />
    </View>
  );
};

export default GroupListScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },

  products: {
    paddingHorizontal: 10,
    marginBottom: 150,
  },

  menuContainer: {
    // paddingTop: 40,
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
    width: "100%",
    height: "90%",
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
    marginBottom: 8,
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
