import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { MenuComponent } from "../../components";
import userStyles from "../../styles/userStyles";
import RadioButton from "../../commons/RadioButton";
import AddAddressComponent from "../../components/AddAddressComponent";

const AddressesScreen = () => {
  const [user, setUser] = useState({});
  const [deliveryAddress, setDeliveryAddress] = useState("");
//   const [selected, setSelected] = useState(true);

  // useEffect(() => {
  //     setUser()
  // }, []);

  // useEffect(() => {
  //     setDelilveryAddress()
  // }, []);

  const fakeDeliveryAddresses = [{address: "Libertador 11**", selected: false}, {address: "Mendoza 17**", selected: false}];

  const MyAddresses = () => {
    return fakeDeliveryAddresses.map((address, i) => {
      return (
        <View style={styles.mainContainer} key={i}>
          <View style={styles.container}>
            <Ionicons name="location-outline" size={22} color="#3D9D5D" style={styles.icon}/>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Dirección {i + 1}</Text>
              <Text style={styles.text}>{address.address}</Text>
            </View>
          </View>
          <RadioButton select={address.selected ? address.selected : false} style={styles.radioButton}/>
        </View>
      );
    });
  };

  const AddAddress = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.addAdressText}>Agregar dirección</Text>
          </View>
        </View>
          <Pressable>
            {/* <Ionicons name="add-circle-outline" size={24} color="#3D9D5D" style={styles.addIcon} onPress={() => showAddCard()}/> */}
            <AddAddressComponent />
          </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.homeConteiner}>
      <MenuComponent />
      <Text style={styles.title}>Tus Direcciones</Text>

      <MyAddresses />

      <AddAddress />

    </View>
  );
};

export default AddressesScreen;

const styles = StyleSheet.create({
  homeConteiner: {
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 38,
    alignSelf: 'center',
    marginVertical: 8,
    marginBottom: 20,
  },
  mainContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addAdressText: {
    fontSize: 14,
    marginLeft: 44
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4
  },
  textContainer: {
   marginLeft: 4, 
  },
  text: {
    fontSize: 14,
    margin: 1,
  },
  icon: {
    marginRight: 15,
    padding: 4,
  },
  addIcon: {
    marginTop: 12
  },
  radioButton: {
    marginTop: 12,
    marginRight: 1,
  },
});
