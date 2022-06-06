import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  ActivityIndicator
} from "react-native";
import globalStyles from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { MaterialIcons } from '@expo/vector-icons';

{/* COMPONENTS */ }
import { MenuComponent, FooterComponent } from "../../components";
import AllSubcategories from "../../components/AllSubcategories";
import ProductList from "../../components/ProductList";

// SERVICES
import productService from "../../services/ProductService";

const ListScreen = ({ route }) => {
  const [search, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [subcategory, setSubcategory] = useState(null);
  const user = useSelector(selectUser);
  const title = route.params.item.title;
  const [loadingItem, setLoadingItem] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    callByCategory()
  }, []);

  useEffect(() => {
    if(search != null && search != '') {
      doSearch(search);
    } else {
      subcategory != null ? callSubcategory() : callByCategory();
    }
  }, [subcategory]);

  const idSubcategory = route.params.item.id;

  const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  };

  const navigator = useNavigation();

  const callByCategory = () => {
    setLoadingItem(true);
    productService.getByCategory(user, title).then((response) => {
      setProducts(response.data);
      setLoadingItem(false);
    });
  }

  const callSubcategory = () => {
    productService.getBySubcategory(user, subcategory).then((response) => setProducts(response.data));
  }

  // Revieve the subcategoy from child when it changes
  const callback = (param) => {
    // If the subcategory is equal to de category, it means the user is looking to all items in that category, soy subcategory should bbe null
    if (param != 'Todos') {
      setSubcategory(param);
    } else {
      setSubcategory(null);
    }

  }

  // Do Search
  const doSearch = (query) => {

    // Set Query for input
    setSearchLoading(true);
    setQuery(query);

    // Call API
    if (query != null && query != '') {

      productService.queryPartialMatch(user, query, title, subcategory)
        .then((response) => {
          setProducts(response.data);
      setSearchLoading(false);
        })
        .catch((err) => {
          console.log("Something was wrong", err);
      setSearchLoading(false);
        });

    } else if(subcategory == null) {
      callByCategory();
      setSearchLoading(false);
    } else {
      callSubcategory();
      setSearchLoading(false);
    }

  }

  return (
    <View style={[styles.homeContainer]}>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />

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
              <ActivityIndicator style={[globalStyles.icons, {left:2}, {marginEnd:4}]} color="#4db591" />
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

          {/* TITLE */}
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
          <AllSubcategories idSubcategory={idSubcategory} parentCallback={callback} />

          <Text style={[styles.scrollTitle, globalStyles.fontSmall]}>
            Productos
          </Text>

          {/* CATEGORIES SCROLL */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.productScroll}
          >
            
            {
              !loadingItem ?
                products.length > 0 ?
                  products.map((product, index) => {
                    return (
                      <ProductList key={product._id} product={product} index={index} />
                    );
                  })
                  :
                  <View style={[styles.scrollTitle, globalStyles.row, globalStyles.justifyContentCenter]}>
                    <MaterialIcons name="search-off" size={200} color="lightgrey" />
                  </View>
                :
                <ActivityIndicator style={[globalStyles.icons]} size={200} color="#4db591" />

            }
          </ScrollView>
        </View>
      </ScrollView>
      
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
    marginTop: 10,
    justifyContent: "space-between",
  },

  inputSearch: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#f8f4f4",
    alignItems: "center",
    borderRadius: 12
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
