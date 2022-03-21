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
import globalStyles from "../styles/styles";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

{
  /* COMPONENTS */
}
import { MenuComponent, FooterComponent } from "../components";
import OrderOnRequestComponent from "../components/OrderOnRequestComponent";
import productService from '../services/ProductService';

const HomeScreen = () => {

  const { getAllProviders, closeToExp, forYou, getByUserId } = productService

  const [search, setQuery] = useState("");
  const [orderOnRequest, setOrderOnRequest] = useState(true);
  const [providers, setProviders] = useState([]);
  const [closeToExpire, setCloseToExpire] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [userById, setUserById] = useState({});

 

  console.log('functionProvider', getAllProviders())

  useEffect(() => {
    getAllProviders().then(response => setProviders(response.data))
    closeToExp().then(response => setCloseToExpire(response.data))
    forYou().then(response => setFeatured(response.data))
    // userById().then(response => setUserById(response.data))
  }, [])

  console.log('Close to expire : ', closeToExpire)
  console.log('Providers : ', providers)
  console.log('For you : ', featured)
  // console.log('getByUserId', userById)

  

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

  const products = [
    [
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
      {
        url: "https://cepadevinos.com/wp-content/uploads/2018/06/Santa-Julia-Reserva-Malbec-Cabernet-Franc.jpg",
        title: "Santa Julia Malbec",
        price: "478",
        expirationDate: "1 día",
        seller: {
          url: "http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png",
          title: "Carrefour",
        },
      },
      {
        url: "https://www.casa-segal.com/wp-content/uploads/2019/10/chocolate-taza-aguila-semi-amargo-100-gramos-reposteria-mendoza-casa-segal.jpg",
        title: "Chocolate aguila",
        price: "239",
        expirationDate: "7 días",
        seller: {
          url: "http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png",
          title: "Carrefour",
        },
      },
    ],
    [
      {
        url: "https://www.distribuidorapop.com.ar/wp-content/uploads/2019/05/galletitas-oreo-venta-ml.jpg",
        title: "Oreo",
        price: "187",
        expirationDate: "2 días",
      },
      {
        url: "https://hiperlibertad.vteximg.com.br/arquivos/ids/160060-600-600/345303-01.a.jpg?v=637248023600270000",
        title: "Fideos Matarazzo",
        price: "146",
        expirationDate: "5 días",
      },
      {
        url: "https://elsuperweb.com/wp-content/uploads/2020/07/GARBANZO-768x768.png",
        title: "GArbanzos en lata",
        price: "86",
        expirationDate: "4 días",
      },
      {
        url: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2120128_f.jpg",
        title: "Pan dulce",
        price: "530",
        expirationDate: "4 días",
      },
      {
        url: "https://http2.mlstatic.com/D_NQ_NP_698348-MLA44886982846_022021-O.jpg",
        title: "Tofu soyana",
        price: "326",
        expirationDate: "7 días",
      },
    ],
    [
      {
        url: "http://assets.stickpng.com/images/5842906ca6515b1e0ad75abb.png",
        title: "Carrefour",
      },
      {
        url: "http://www.dogoseguridad.com.ar/images/logos-clientes/logo1.png",
        title: "Coto",
      },
      {
        url: "https://3.bp.blogspot.com/-5VIGChwPq0I/W3Qs0e8KX7I/AAAAAAAAHCs/Ms18CWXimAkJvEKpPUSfA61rUAF5xQiYwCKgBGAs/s640/DIA%2525.png",
        title: "Día",
      },
      {
        url: "https://cdn.theorg.com/ba262ed8-039d-41f9-b7dd-053c75d4d48d_thumb.jpg",
        title: "Farmacity",
      },
      {
        url: "https://www.gaf-franquicias.com/images/notas/logos/1606400097_365kioscos_franquicia.jpg",
        title: "365",
      },
    ],
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
        {orderOnRequest ? <OrderOnRequestComponent /> : <View/>}

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

            <View style={styles.filterContainerBox}>
              <View style={styles.filterContainer}>
                <AntDesign name="filter" size={24} color="#979797" />
              </View>
            </View>
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
                  {/* {providers.map((provider, i) => (
                    <View key={i}>
                    <Text>{provider.provider}</Text>
                    <Image source={{uri: provider.img}}/>
                    </View>
                  ))} */}
                   {providers.map((product, y) => {
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
                          {product.provider}
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
