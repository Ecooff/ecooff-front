import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
} from "react-native";
import globalStyles from "../styles/styles";
import { commonFunctions } from "../utils";

// COMPONENTS
import CheckoutComponent from "../components/CheckOutCoponent";

const OrderListComponent = ({ order, user }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState();

  const getOrderDetail = (id) => {
    setSelectedOrder(id);
    setModalVisible(true);
  };

  const callback = (param) => {
    setModalVisible(param);
  };

  return (
    <View style={[globalStyles.alignItemsCenter, styles.mainContainer]}>
      <View>
        <View style={styles.leftTextContainer}>
          <Text style={styles.leftText}>
            {commonFunctions.dateParse(order.date)}
          </Text>
          <Text
            style={[
              styles.leftText,
              order.status == "Completada" ? styles.success : styles.pending,
            ]}
          >
            {order.status}
          </Text>
        </View>
      </View>

      <View style={styles.rightSide}>
        <Text style={styles.priceText}>${order.total}</Text>
        <Pressable onPress={() => getOrderDetail(order.orderId)}>
          <Text style={styles.editText}>Ver detalle</Text>
        </Pressable>
      </View>

      {/* MODAL */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CheckoutComponent
          orderId={selectedOrder}
          user={user}
          parentCallback={callback}
        />
      </Modal>
    </View>
  );
};

export default OrderListComponent;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    paddingVertical: 20,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  leftTextContainer: {
    marginLeft: 8,
  },

  leftText: {
    fontSize: 17,
    marginTop: 5,
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 15,
    marginRight: 20,
    padding: 3,
  },

  rightSide: {
    marginRight: 10,
  },

  editText: {
    fontSize: 12,
    textDecorationLine: "underline",
    textAlign: "center",
  },

  priceText: {
    fontSize: 21,
    textAlign: "center",
    marginBottom: 4,
  },

  success: {
    color: "green",
  },

  pending: {
    color: "red",
  },
});
