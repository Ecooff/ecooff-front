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
  ActivityIndicator,
} from "react-native";
import globalStyles from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { MaterialIcons } from "@expo/vector-icons";

{
  /* SERVICES */
}
import productService from "../../services/ProductService";

{
  /* COMPONENTS */
}
import { MenuComponent, FooterComponent } from "../../components";
import AllSubcategories from "../../components/AllSubcategories";
import ProductList from "../../components/ProductList";

const GroupListScreen = ({ route }) => {
  const { getByProvSubcat } = productService;
  const titleProvider = route.params.product.providerName;
  const idProvider = route.params.product._id;
  const [searchLoading, setSearchLoading] = useState(false);

  const user = useSelector(selectUser);

  const { img, name, _id } = route.params.product;

  const [search, setQuery] = useState("");
  const [productsProvider, setProductsProvider] = useState([]);

  useEffect(() => {
    callProducts();
  }, []);

  const callProducts = () => {
    productService.getByProvider(user, idProvider).then((response) => {
      setProductsProvider(response.data);
    });
  };

  const callback = (param) => {
    // If the subcategory is equal to de category, it means the user is looking to all items in that category, soy subcategory should bbe null
    if (param != "Todos") {
      setSubcategory(param);
    } else {
      setSubcategory(null);
    }
  };

  const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  };

  const items = [
    { icon: require("../../assets/icons/store.png"), title: "Mercado", id: 1 },
    {
      icon: require("../../assets/icons/cosmetic.png"),
      title: "Cosmetica",
      id: 2,
    },
    {
      icon: require("../../assets/icons/pharmacy.png"),
      title: "Farmacia",
      id: 3,
    },
    {
      icon: require("../../assets/icons/surprice.png"),
      title: "Sorpresas",
      id: 4,
    },
  ];

  // Do Search
  const doSearch = (query) => {
    // Set Query for input
    setSearchLoading(true);
    setQuery(query);

    if (query != null && query != "") {
      // Call API
      productService
        .queryPartialMatch(user, query, null, null, _id)
        .then((response) => {
          setProductsProvider(response.data);
          setSearchLoading(false);
        })
        .catch((err) => {
          setSearchLoading(false);
        });
    } else {
      callProducts();
      setSearchLoading(false);
    }
  };

  const navigator = useNavigation();

  return (
    <View style={[styles.homeContainer]}>
      <View style={styles.menuContainer}>
        {/* MENU */}
        <MenuComponent style={{position: "absolute", top: 30}} onPress={() => navigator.goBack()} />
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
                //            onSubmitEditing={this.searchSubmit}
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
            <Image
              source={{ uri: img }}
              style={{ width: 25, height: 25, marginRight: 10 }}
            />

            <Text
              style={[
                styles.scrollTitle,
                globalStyles.fontLarge,
                globalStyles.fontBold,
              ]}
            >
              {name}
            </Text>
          </View>
          {/* CATEGORIES SCROLL */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.productScroll}
          >
            {productsProvider.length > 0 ? (
              productsProvider.map((product, index) => {
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
            )}
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
