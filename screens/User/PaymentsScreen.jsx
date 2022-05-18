import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { MenuComponent } from "../../components";
import userStyles from "../../styles/userStyles";
import RadioButton from "../../commons/RadioButton";
import AddPaymentComponent from "../../components/AddPaymentComponet";
import { useNavigation } from "@react-navigation/native";

{/* <MaterialCommunityIcons name="credit-card-plus-outline" size={24} color="black" /> */}
const AddressesScreen = () => {
  const [user, setUser] = useState({});
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const navigator = useNavigation();
//   const [selected, setSelected] = useState(true);

  // useEffect(() => {
  //     setUser()
  // }, []);

  // useEffect(() => {
  //     setDelilveryAddress()
  // }, []);

  const fakePaymentMethods = [{card: "1256 **** **** **12", selected: false}, {card: "1256 **** **** **54", selected: false}];

  const MyPaymentMethods = () => {
    return fakePaymentMethods.map((card, i) => {
      return (
        <View style={styles.mainContainer} key={i}>
          <View style={styles.container}>
            <MaterialIcons name="payment" size={22} color="#3D9D5D" style={styles.icon}/>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Tarjeta {i + 1}</Text>
              <Text style={styles.text}>{card.card}</Text>
            </View>
          </View>
          <RadioButton select={card.selected ? card.selected : false} style={styles.radioButton}/>
        </View>
      );
    });
  };

  const AddPaymentMethod = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <MaterialCommunityIcons name="credit-card-plus-outline" size={22} color="#3D9D5D" style={styles.icon}/>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Nueva tarjeta</Text>
            <Text style={styles.text}>Agregar tarjeta</Text>
          </View>
        </View>
          <Pressable>
            {/* <Ionicons name="add-circle-outline" size={24} color="#3D9D5D" style={styles.addIcon}/> */}
            <AddPaymentComponent />
          </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.homeConteiner}>
      <MenuComponent style={{position: "absolute", top: 30}} onPress={() => navigator.goBack()} />
      <Text style={styles.title}>Medios de pago</Text>

      <MyPaymentMethods />

      <AddPaymentMethod />

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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4
  },
  textContainer: {
   marginLeft: 4, 
  },
  text: {
    fontSize: 12,
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
  }
});
