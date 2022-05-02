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

const ListScreen = ({ route }) => {
  const [search, setQuery] = useState("");
  const [sorpresas, setSorpresas] = useState([]);
  const [cosmetica, setCosmetica] = useState([]);
  const [mercado, setMercado] = useState([]);
  const [farmacia, setFarmacia] = useState([]);
  const { getBySorpresas, getByCosmetica, getByMercado, getByFarmacia } =
    productService;

  const user = useSelector(selectUser);

  useEffect(() => {
    getBySorpresas(user).then((response) => setSorpresas(response.data));
    getByCosmetica(user).then((response) => setCosmetica(response.data));
    getByMercado(user).then((response) => setMercado(response.data));
    getByFarmacia(user).then((response) => setFarmacia(response.data));
  }, []);

  const title = route.params.item.title;

  const idSubcategory = route.params.item.id;

  console.log("ASI SI", title);

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

  const items = [
    { icon: require("../../assets/icons/bread.png"), title: "Panaderia" },
    { icon: require("../../assets/icons/infutions.png"), title: "Infusiones" },
    { icon: require("../../assets/icons/can.png"), title: "Enlatados" },
    { icon: require("../../assets/icons/snacks.png"), title: "Snacks" },
    { icon: require("../../assets/icons/flour.png"), title: "Harinas" },
    { icon: require("../../assets/icons/rice.png"), title: "Cereales" },
    { icon: require("../../assets/icons/sauces.png"), title: "Aderezos" },
  ];

  const MERCADO = [
    { title: "Panaderia" },
    { title: "Infusiones" },
    { title: "Enlatados" },
    { title: "Snacks" },
    { title: "Harinas" },
    { title: "Cereales" },
    { title: "Aderezos" },
  ];

  const COSMETICA = [
    { title: "Cosmetico 1" },
    { title: "Cosmetico 2" },
    { title: "Cosmetico 3" },
    { title: "Cosmetico 4" },
    { title: "Cosmetico 5" },
    { title: "Cosmetico 6" },
    { title: "Cosmetico 7" },
  ];

  const FARMACIA = [
    { title: "Dermocosmética" },
    { title: "Higiene" },
    { title: "Higiene Personal" },
    { title: "Higiene de la cabeza" },
    { title: "Higiene de la piel" },
    { title: "Higiene de la ropa" },
    { title: "Higiene de la piel" },
  ];

  const SORPRESAS = [
    { title: "Sorpresas 1" },
    { title: "Sorpresas 2" },
    { title: "Sorpresas 3" },
    { title: "Sorpresas 4" },
    { title: "Sorpresas 5" },
    { title: "Sorpresas 6" },
    { title: "Sorpresas 7" },
  ];

  const navigator = useNavigation();

  return (
    <View style={[styles.homeContainer]}>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />

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
                style={styles.searchInput}
              />
            </View>

            <View style={styles.filterContainerBox}>
              <View style={styles.filterContainer}>
                <AntDesign name="filter" size={24} color="#979797" />
              </View>
            </View>
          </View>

          <Text
            style={[
              styles.scrollTitle,
              globalStyles.fontMedium,
              globalStyles.fontBold,
            ]}
          >
            {title}
          </Text>

          {/* CATEGORIES SCROLL */}

          <AllSubcategories idSubcategory={idSubcategory} />

          <Text style={[styles.scrollTitle, globalStyles.fontSmall]}>
            Productos
          </Text>

          {/* CATEGORIES SCROLL */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.productScroll}
          >
            {(
              (title === "Sorpresas" && sorpresas) ||
              (title === "Cosmetica" && cosmetica) ||
              (title === "Mercado" && mercado) ||
              (title === "Farmacia" && farmacia)
            ).map((product, index) => {
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
                        source={{ uri: product.img }}
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
                        <View style={[styles.cardBody, { width: "50%" }]}>
                          <Text
                            style={[
                              styles.productPrice,
                              globalStyles.fontSmall,
                            ]}
                          >
                            $ {product.price}
                          </Text>
                          <Text
                            style={[styles.cardTitles, globalStyles.fontSmall]}
                          >
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
                            {/* <Image style={styles.productListSeller} source={{ uri: product.seller.url }} /> */}

                            <Text>{product.providerName}</Text>
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
            })}
          </ScrollView>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <FooterComponent />
    </View>
  );
};

export default ListScreen;

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
  searchInput: {
    marginVertical: 5,
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
    height: "100%",
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
    paddingVertical: 8,
    borderRadius: 12,
  },

  productsListContainer: {
    marginBottom: 25,
  },

  productPrice: {
    position: "relative",
    top: 8,
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
    borderWidth: 0.2,
  },

  product: {
    width: 70,
    height: 70,
  },

  cardBody: {
    paddingHorizontal: 15,
  },

  cardTitles: {
    // marginBottom: 5,
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
