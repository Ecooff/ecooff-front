import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import React from 'react'

import globalStyles from "../styles/styles";

const AllSubcategories = ({
  idSubcategory,
  idProvider,
  route,
  parentCallback
}) => {

  const [buttonNumber, setButtonNumber] = React.useState(0);

  const MERCADO = [
    { title: "Todos", icon: require("../assets/icons/store.png") },
    { title: "Panaderia", icon: require("../assets/icons/bread.png") },
    { title: "Infusiones", icon: require("../assets/icons/infutions.png") },
    { title: "Enlatados", icon: require("../assets/icons/can.png") },
    { title: "Snacks", icon: require("../assets/icons/snacks.png") },
    { title: "Harinas", icon: require("../assets/icons/flour.png") },
    { title: "Cereales", icon: require("../assets/icons/rice.png") },
    { title: "Aderezos", icon: require("../assets/icons/sauces.png") },
  ];

  const setSubcat = (i, subcategory) => {
    setButtonNumber(i);
    parentCallback(subcategory);
  }

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={styles.categoryScroll}
      horizontal={true}
    >
      {
        idSubcategory == 1 ?
          (MERCADO).map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={()=> setSubcat(index, item.title)} style={styles.iconsSelected}>
                <Image style={[styles.icons, styles.opacity, buttonNumber===index ? styles.selected : null]} source={item.icon} />

                <Text style={[globalStyles.fontXSmall, styles.opacity, buttonNumber===index ? styles.selected : null]}>{item.title}</Text>
              </TouchableOpacity>
            );
          }): null
      }
    </ScrollView>
  );
};

export default AllSubcategories;

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
    paddingLeft: 10
  },

  scrollTitle: {
    marginTop: 30,
    marginBottom: 30,
  },

  iconsSelected: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  icons: {
    width: 60,
    height: 65,
    marginBottom: 10
  },

  opacity: {
    opacity: 0.4
  },

  selected: {
    opacity: 1
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
