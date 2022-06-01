import { useState, useEffect } from "react";
import { TextInput, Alert, Modal, StyleSheet, Text, Pressable, View, KeyboardAvoidingView  } from "react-native";
import {
  Ionicons,
} from "@expo/vector-icons";
import AdressService from "../services/AdressService";
import { useInput } from "../hooks/hookForm";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, updateAddress } from '../store/userSlice';
import globalStyles from '../styles/styles';


import { useNavigation } from "@react-navigation/native";

const AddAddressComponent = ({ parentCallback }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

 const [street, setStreet] = useState('');
 const [streetNumber, setStreetNumber] = useState(null);
 const [floor, setFloor] = useState(null);
 const [door, setDoor] = useState(null);
 const [CP, setCP] = useState(null);

  const { addUserAdress } = AdressService;
  const navigator = useNavigation();


  const handleSubmit = () => {
    addUserAdress({
      street: street,
      streetNumber: streetNumber,
      floor: floor,
      door: door,
      CP: CP,
    }, user).then(response => {
      console.log('ENTRA Al DISPATCH', response.data)
      console.log('kath', user)
      dispatch(updateAddress({addresses : [...user.addresses, response.data] }))
      parentCallback(response.data);
      // navigator.navigate('Cart')
    }).catch(err => console.log(err.response))
    setModalVisible(!modalVisible);
  }

  console.log('UserInAddress', user)

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
    <View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        accessibilityViewIsModal={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
        <KeyboardAvoidingView
            style={[globalStyles.scrollContainer]}
            behavior="padding"
        >
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>Añadir Dirección</Text>

            <View>
        <View style={styles.listItem}>
          <Text style={styles.modalText}>Calle</Text>
          <TextInput
          style={styles.input}
          // onTextInput={(text) => setStreet(text)}
          onChangeText={(text) => setStreet(text)}
          value={street}
          placeholder="Av. Santa Fe"
          />
        </View>
        <View style={styles.listItem}>
          <Text style={styles.modalText}>Número</Text>
          <TextInput
          style={styles.input}
          onChangeText={(text) => setStreetNumber(text)}
          value={streetNumber}
          placeholder="4910"
          />
        </View>
        <View style={[styles.listItem, styles.lastListItem]}>
          <Text style={styles.modalText}>Piso</Text>
          <TextInput
          style={styles.input}
          onChangeText={(text) => setFloor(text)}
          value={floor}
          placeholder="12 A"
          />
        </View>
        <View style={[styles.listItem, styles.lastListItem]}>
          <Text style={styles.modalText}>Puerta</Text>
          <TextInput
          style={styles.input}
          onChangeText={(text) => setDoor(text)}
          value={door}
          placeholder="32"
          />
        </View>
        <View style={[styles.listItem, styles.lastListItem]}>
          <Text style={styles.modalText}>Codigo postal</Text>
          <TextInput
          style={styles.input}
          onChangeText={(text) => setCP(text)}
          value={CP}
          placeholder="7220"
          />
        </View>
      </View>

            <ModalFooter />

          </View>
        </KeyboardAvoidingView>
        </View>
      </Modal>
    </View>
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
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,    
    elevation: 10,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    marginLeft: 18,
    shadowColor: "#000",
    width : '80%' , //en realidad va 80%
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 170
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
    width: "40%",
    marginTop: 20,
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
