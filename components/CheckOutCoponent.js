import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, Image } from "react-native";
import globalStyles from "../styles/styles";
import { commonFunctions } from "../utils";
import { SimpleLineIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// SERVICES
import ordersService from "../services/OrdersService";

const CheckoutComponent = ({
  orderId,
  user,
  parentCallback
}) => {

  const [order, setOrder] = useState(null);

  useEffect(() => {
    ordersService.getOrderById(user, orderId).then((response) => {
      setOrder(response.data);
    })
  }, []);

  const calculateDate = (date) => {
    let newDate = date.split('T')[0].split('-')[0] + '-' + date.split('T')[0].split('-')[1] + '-' + (parseInt(date.split('T')[0].split('-')[2]) + 1) + 'T' + date.split('T')[1];
    return newDate;
  }

  const getAdress = (adress) => {
    return commonFunctions.capitalize(adress.street) + ' ' + adress.streetNumber;
  }

  const closeModal = () => {
    parentCallback(false);
  }

  return (

    <View style={styles.modalBackground}>

      <TouchableOpacity
        style={styles.touchableBackground}
        onPress={() => closeModal()}
      >

      </TouchableOpacity>

      <View style={styles.centeredView}>

        {
          order != null ?

            <View style={styles.modalView}>

              {/* ORDER NUMBER */}
              <Text style={[globalStyles.fontBold, styles.modalText, { textAlign: 'center' }]}>Compra Nº {order.orderId.substr(order.orderId.length - 5)}</Text>

              {/* ORDER DATA */}
              <View style={[globalStyles.row, globalStyles.alignItemsCenter, styles.infoText]}>

                <View style={[styles.icons, { padding: 8 }]}>
                  <SimpleLineIcons name="handbag" size={18} color="green" />
                </View>

                <Text style={globalStyles.fontBold}>Entrega estimada: </Text>
                <Text>{commonFunctions.dateParse(calculateDate(order.date))}</Text>
              </View>

              <View style={[globalStyles.row, globalStyles.alignItemsCenter, styles.infoText]}>

                <View style={[styles.icons, { paddingVertical: 8 }, { paddingHorizontal: 5 }]}>
                  <MaterialCommunityIcons name="truck-delivery-outline" size={24} color="green" />
                </View>

                <Text style={globalStyles.fontBold}>Entrega: </Text>
                <Text>{getAdress(order.userAddress[0])}</Text>
              </View>

              <View style={[globalStyles.row, globalStyles.alignItemsCenter, styles.infoText]}>

                <View style={[styles.icons, { padding: 8 }]}>
                  <MaterialIcons name="timeline" size={20} color="green" />
                </View>

                <Text style={globalStyles.fontBold}>Estado: </Text>
                <Text style={order.status == 'Completed' ? { color: 'green' } : { color: 'red' }}>{order.status}</Text>
              </View>

              {/* ITEMS SCROLL */}
              <ScrollView style={styles.scrollItemsContainer}>

                {
                  order.productArray.map((item, i) => {

                    return (
                      <View key={i} style={[globalStyles.row, globalStyles.alignItemsCenter]}>

                        <View style={styles.cardImage}>
                          <Image
                            style={styles.productImage}
                            source={{ uri: item.img }}
                          />
                        </View>

                        <Text style={{ left: 10 }}>{item.quantity} x {item.name}</Text>

                      </View>
                    )

                  })
                }

              </ScrollView>

              {/* TOTAL */}
              <Text style={[globalStyles.fontBold, styles.totalTitle]}>Total: ${order.total}</Text>

              {/* BUTTON */}
              <TouchableOpacity
                onPress={() => closeModal()}
                style={[
                  globalStyles.button,
                  globalStyles.primary,
                  globalStyles.widthFluid
                ]}
              >
                <Text style={[styles.loginText, globalStyles.textWhite]}>
                  Confirmar
                </Text>
              </TouchableOpacity>

            </View>

            :

            <ActivityIndicator style={[globalStyles.icons]} color="#4db591" />

        }

      </View>

    </View>

  );

};

export default CheckoutComponent;

const styles = StyleSheet.create({

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },

  touchableBackground: {
    flex: 1,
    position: 'absolute'
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    overflow: 'hidden',
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  modalText: {
    fontSize: 20,
    marginBottom: 30
  },

  icons: {
    marginRight: 12,
    backgroundColor: '#F4F4F4',
    borderRadius: 50,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  infoText: {
    marginBottom: 20,
  },

  totalTitle: {
    marginVertical: 25,
    textAlign: 'center',
    fontSize: 17
  },

  // LIST OF ITEMS
  scrollItemsContainer: {
    maxHeight: 175,
    marginTop: 10
  },

  cardImage: {
    padding: 5,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
  },

  productImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },

});
