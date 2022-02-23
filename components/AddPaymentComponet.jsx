import { useState } from "react";
import { TextInput, Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {
  Ionicons,
} from "@expo/vector-icons";

const AddPaymentComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [cardNumber, onChangeCardNumber] = useState(0);
  const [cardName, onChangeCardName] = useState("");
  const [expirationDateCard, onChangeExpirationDateCard] = useState(0);
  const [securityCodeCard, onChangeSecurityCodeCard] = useState(0);

  const addPaymentMethod = () => {
    setModalVisible(!modalVisible);
    console.log("addPaymentMethod is working");
  }
// á é í ó ú
  const ModalContent = () => {
    return (
      <View>
        <View style={styles.listItem}>
          <Text style={styles.modalText}>Número de tarjeta</Text>
          <TextInput
          style={styles.input}
          onChangeText={() => onChangeCardNumber()}
          value={cardNumber}
          placeholder="0000 0000 0000 0000"
          />
        </View>

        <View style={styles.listItem}>
          <Text style={styles.modalText}>Nombre</Text>
          <TextInput
          style={styles.input}
          onChangeText={() => onChangeCardName()}
          value={cardName}
          placeholder="Nombre que dice en la tarjeta"
          />
        </View>

        <View style={[styles.listItem, styles.lastListItem]}>
          <Text style={styles.modalText}>Fecha de expiración</Text>
          <TextInput
          style={styles.input}
          onChangeText={() => onChangeExpirationDateCard()}
          value={expirationDateCard}
          placeholder="--/--"
          />
          <Text style={styles.modalText}>Código de seguridad</Text>
          <TextInput
          style={styles.input}
          onChangeText={() => onChangeSecurityCodeCard()}
          value={securityCodeCard}
          placeholder="----"
          />
        </View>
      </View>
    );
  };
  
  // BOTONERA (Cancel / Confirm)
  const ModalFooter = () => {
    return (
      <View style={styles.footerModal}>
        <Pressable
          style={[styles.button, styles.cancelModalButton]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.cancelModalText}>Cancelar</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.confirmModalButton]}
          onPress={() => addPaymentMethod()}
        >
          <Text style={styles.textStyle}>Confirmar</Text>
        </Pressable>
      </View>
    )
  }


  return (
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
            <Text style={styles.modalHeading}>Añadir tarjeta</Text>

            <ModalContent />

            <ModalFooter />

          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        {/* <Text style={styles.textStyle}>Show Modal</Text> */}
        <Ionicons
          name="add-circle-outline"
          size={24}
          color="#3D9D5D"
          style={styles.addBtn}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalHeading: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  },
  modalText: {
    fontSize: 12,
    marginBottom: 40
  },
  listItem: {
    // flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, .2)",
    marginHorizontal: -20,
    // flexDirection: "column",
    // justifyContent: "space-between",
  },
  lastListItem: {
    borderBottomWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  input: {
    alignItems: "flex-start",
  },

  //------ to styles (modal btn)
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "100%",
    backgroundColor: "#3D9D5D",
  },

  footerModal: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "40%",
    marginTop: 10,
  },
  cancelModalButton: {
    color: "#3D9D5D",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 4,
    borderColor: "#3D9D5D",
    borderWidth: 0.5,
  },
  cancelModalText: {
    color: "#3D9D5D",
    fontWeight: "bold",
    textAlign: "center",
  },
  confirmModalButton: {
    borderRadius: 10,
    marginHorizontal: 4,
  },

});

export default AddPaymentComponent;