import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
// import CheckoutContent from './CheckoutContent';

const Checkout = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [order, setOrder] = useState({});
  const [total, setTotal] = useState(0);
  const navigator = useNavigation();

  // useEffect(() => {
  //   // setOrder and setTotal
  // },[])

  const confirmOrder = () => {
    setModalVisible(!modalVisible);
    navigator.navigate("Orders");
  };

  const goToEdit = () => {
    setModalVisible(!modalVisible);
    navigator.navigate("Profile"); // NOTE: should go to the edit view
  };

  const CheckoutContent = () => {
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MaterialCommunityIcons name="shopping-outline" size={18} color="#3D9D5D" />
          <View style={styles.mainText}>
            <Text style={styles.baseText}>Cantindad de productos: </Text>
            <Text>{order.products?.length ? order.products.length : 3}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Ionicons name="location-outline" size={18} color="#3D9D5D" />
          <View style={styles.mainText}>
            <Text style={styles.baseText}>Dirección: </Text>
            <Text>{order.address ? order.address : "Libertador 1100"}</Text>
          </View>
          <Pressable onPress={goToEdit}>
            <Text style={styles.editText}> Editar</Text>
          </Pressable>
        </View>
        <View style={styles.container}>
          <MaterialCommunityIcons name="truck-fast-outline" size={18} color="#3D9D5D" />
          <View style={styles.mainText}>
            <Text style={styles.baseText}>Entrega estimada: </Text>
            <Text>{order.deliveryTime ? order.deliveryTime : "90 mins" }</Text>
          </View>
        </View>
        <View style={styles.container}>
          <MaterialIcons name="payment" size={18} color="#3D9D5D" />
          <View style={styles.mainText}>
            <Text style={styles.baseText}>Método de pago: </Text>
            <Text>{order.payment ? order.payment : "Effectivo"}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    // <View style={{flex:1, marginBottom: -15}}>

    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeaderText}>
              Compra Nº {!order.id ? "..." : order.id}
            </Text>

            <CheckoutContent />

            <Text style={styles.modalFooterText}>
              Total ${!total ? 850 : total}
            </Text>
            <View style={styles.footerModal}>
              <Pressable
                style={[styles.button, styles.cancelModelButton]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.cancelModelText}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.confirmModelButton]}
                onPress={() => confirmOrder()}
                >
                <Text style={styles.textStyle}>Confirmar</Text>
              </Pressable>
            </View>
          </View>
        </View>    
      </Modal>
      
      <Pressable
        style={styles.buttonPurchase}
        onPress={() => setModalVisible(true)}
        >
        <View style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Confirmar pago</Text>
          <Text style={styles.textStyle}>$850</Text>
        </View>
      </Pressable>
    </View>
        // </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    marginHorizontal: 4,
    flexDirection: "row",
  },
  content: {
    margin: 15,
  },
  baseText: {
    fontWeight: "bold",
  },
  editText: {
    textDecorationLine: "underline",
  },
  editDisabledText: {
    textDecorationLine: "underline",
  },
  container: {
    flexDirection: "row",
    margin: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "100%",
    backgroundColor: "#3D9D5D",
  },
  buttonPurchase: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 20,
    elevation: 2,
    width: "100%",
    backgroundColor: "#3D9D5D",
    bottom: -20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalHeaderText: {
    textAlign: "center",
    fontWeight: "bold",
    margin: 10,
  },
  modalFooterText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    margin: 10,
  },
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  footerModal: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "30%",
    marginTop: 10,
  },
  cancelModelButton: {
    color: "#3D9D5D",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 4,
    borderColor: "#3D9D5D",
    borderWidth: 0.5,
  },
  cancelModelText: {
    color: "#3D9D5D",
    fontWeight: "bold",
    textAlign: "center",
  },
  confirmModelButton: {
    borderRadius: 10,
    marginHorizontal: 4,
  },
});

export default Checkout;
