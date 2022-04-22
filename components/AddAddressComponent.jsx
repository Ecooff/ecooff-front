import { useState, useEffect } from "react";
import { TextInput, Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {
  Ionicons,
} from "@expo/vector-icons";
import AdressService from "../services/AdressService";
import { useInput } from "../hooks/hookForm";

const AddAddressComponent = ({ parentCallback }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [textStreet, onChangeTextStreet] = useState("");
  const [textNumber, onChangeTextNumber] = useState("");
  const [textFloor, onChangeTextFloor] = useState("");
  const [ validateStreetNumber, setValidateStreetNumber] = useState('')

  const street = useInput('street', '')
  const streetNumber = useInput('streetNumber', '')
  const floor = useInput('floor', '')
  const door = useInput('door', '')
  const CP = useInput('CP', '')

  const { addUserAdress } = AdressService;

  const handleSubmit = () => {
    addUserAdress({
      street: street.value,
      streetNumber: streetNumber.value,
      floor: floor.value,
      door: door.value,
      CP: CP.value
    }).then(response => {
      console.log('FUNCIONA ADDADRESS', response.data)
      parentCallback(response.data);
    }).catch(err => console.log(err.response.data.message))
    setModalVisible(!modalVisible);
  }

  console.log(street.value)
  console.log('BBBB', floor.value)


  const ModalContent = () => {
    return (
      <View>
        <View style={styles.listItem}>
          <Text style={styles.modalText}>Calle</Text>
          <TextInput
          style={styles.input}
          onChangeText={street.onChangeText}
          {...street}
          placeholder="Av. Santa Fe"
          />
        </View>
        <View style={styles.listItem}>
          <Text style={styles.modalText}>Número</Text>
          <TextInput
          style={styles.input}
          onChangeText={streetNumber.onChangeText}
          {...streetNumber}
          placeholder="4910"
          />
        </View>
        <View style={[styles.listItem, styles.lastListItem]}>
          <Text style={styles.modalText}>Piso</Text>
          <TextInput
          style={styles.input}
          onChangeText={floor.value}
          {...floor}
          placeholder="12 A"
          />
        </View>
        <View style={[styles.listItem, styles.lastListItem]}>
          <Text style={styles.modalText}>Puerta</Text>
          <TextInput
          style={styles.input}
          onChangeText={door.value}
          {...door}
          placeholder="32"
          />
        </View>
        <View style={[styles.listItem, styles.lastListItem]}>
          <Text style={styles.modalText}>Codigo postal</Text>
          <TextInput
          style={styles.input}
          onChangeText={CP.value}
          {...CP}
          placeholder="7220"
          />
        </View>
      </View>
    );
  };
  
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
          onPress={() => handleSubmit()}
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
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>Añadir Dirección</Text>

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
    marginBottom: 20
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
    width: "30%",
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

export default AddAddressComponent;
