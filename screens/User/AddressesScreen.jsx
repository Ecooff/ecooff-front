import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { MenuComponent } from "../../components";
import userStyles from "../../styles/userStyles";
import RadioButton from "../../commons/RadioButton";
import AddAddressComponent from "../../components/AddAddressComponent";
import AdressService from "../../services/AdressService";
import { useSelector } from "react-redux";
import { selectUser } from '../../store/userSlice';
import { useNavigation } from "@react-navigation/native";

const AddressesScreen = () => {
  // const [user, setUser] = useState({});
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [userAdresses, setUserAdresses] = useState([])
  const { getUserAddresses, changeDefaultAdress } = AdressService
  const [selected, setSelected] = useState({});
 const user = useSelector(selectUser)

 const navigator = useNavigation();

  const callback = (newAddress) => {
    // do something with value in parent component, like save to state
    setUserAdresses(userAdresses => [...userAdresses, newAddress])
  }

  useEffect(() => {
    getUserAddresses(user).then(response => setUserAdresses(response.data[0].addresses))
  }, [])

  const selectFn = (id, i) => {
    selected ? setSelected(false) : setSelected(true);
    AdressService.changeDefaultAdress(id, user).then(response => {}).catch(error => console.log('ERROR', error.response.data.message))
    userAdresses.map(address => {
      address.defaultAddress = false;
    })
    userAdresses[i].defaultAddress = true
}

  const MyAddresses = () => {
    return userAdresses.map((address, i) => {
      return (
        <View style={styles.mainContainer} key={i}>
          <View style={styles.container}>
            <Ionicons name="location-outline" size={22} color="#3D9D5D" style={styles.icon}/>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Dirección {i + 1}</Text>
              <Text style={styles.text}>{address.street}</Text>
            </View>
          </View>
          <Pressable style={[styles.selectedFalse]} onPress={() => selectFn(address._id, i)}>
        {
          address.defaultAddress ?
            <View style={[styles.selectedTrue]}/>
            : null
        }
      </Pressable>
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
            <AddAddressComponent parentCallback={callback} />
          </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.homeConteiner}>
      <MenuComponent style={{position: "absolute", top: 30}} onPress={() => navigator.goBack()} />
      <Text style={styles.title}>Tus Direcciones</Text>
      <ScrollView  style={styles.globalMaxHeight}>
      <MyAddresses />
      </ScrollView>
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
  globalMaxHeight: {
    maxHeight: 500
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
  selectedFalse: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3D9D5D',
    alignItems: 'center',
    justifyContent: 'center',
},
selectedTrue: {
    height: 11,
    width: 11,
    borderRadius: 6,
    backgroundColor: '#3D9D5D',
}
});
