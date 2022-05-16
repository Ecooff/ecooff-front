import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import globalStyles from "../styles/styles";
import { commonFunctions } from "../utils";
import { MaterialIcons } from '@expo/vector-icons';

const ProductList = ({
  product,
  index
}) => {

  const shadowStyleProducts = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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

  const navigator = useNavigation();

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
            {commonFunctions.capitalize(product.name)}
          </Text>

          <View style={[{ width: "100%" }, globalStyles.row]}>

            <View style={[styles.cardBody, { width: "75%" }]}>

              <View style={[globalStyles.row, globalStyles.alignItemsCenter, {marginBottom: 10}]}>

                <Image
                  source={{ uri: product.providerImg }}
                  style={styles.commerceOfList}
                />

                <Text
                  style={[globalStyles.fontSmall]}
                >
                  {product.providerName}  <Text styles={globalStyles.fontBold}>$ {product.expPrice}</Text>
                </Text>

              </View>

              <Text
                style={[styles.cardTitles, globalStyles.fontSmall]}
              >
                {commonFunctions.dateParse(product.expDate)}
                {/* {product.expDate} */}
              </Text>

            </View>

            <View>
              <MaterialIcons name="arrow-forward-ios" size={20} color="grey" />
            </View>

          </View>

        </View >

      </TouchableOpacity >

    </View >

  );

};

export default ProductList;

const styles = StyleSheet.create({

  cardImage: {
    padding: 5,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
  },

  product: {
    width: 90,
    height: 90,
  },

  productCard: {
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },

  cardTitles: {
    marginBottom: 8,
  },

  cardBody: {
    paddingHorizontal: 15,
  },

  commerceOfList: {
    width: 20,
    height: 20,
    marginEnd: 5,
    borderRadius: 100,
    backgroundColor: "#F4F4F4",
  },

});
