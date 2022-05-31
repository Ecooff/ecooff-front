import { Pressable, Image, ScrollView, StatusBar, StyleSheet, Text, View, ActivityIndicator, Modal
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import globalStyles from "../../styles/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

// SERVICE
import cartService from "../../services/CartService";

// COMPONENTS
import { MenuComponent } from "../../components";
import CheckoutComponent from "../../components/CheckOutCoponent";

const OrdersScreen = () => {
  const user = useSelector(selectUser);
  const [cart, setCart] = useState([]);
  const [saving, setSaving] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [newOrder, setNewOtrder] = useState({});
  const [getDefaultAddress, setGetDefaultAddress] = useState({});
  const [loading, setLoader] = useState(false);
  const dispatch = useDispatch();

  const navigator = useNavigation();

  const callback = (param) => {
    setModalVisible(param);
    navigator.navigate('Home');
  };

  useEffect(() => {
    cartService.confirmCart(user)
      .then((response) => {
        setCart(response.data.listOfProducts);
        setSaving(response.data.savings);
      }).catch((error) => console.log("CATHORDERS", error.response));

      const defaultAddress = user.addresses.filter(
        (address) => address.defaultAddress === true
      );
    setGetDefaultAddress(defaultAddress[0]);
  }, []);

  const confirmCartHandle = () => {

    setLoader(true);

    let address = {
      street: getDefaultAddress.street,
      streetNumber: getDefaultAddress.streetNumber,
      floor: getDefaultAddress.floor,
      door: getDefaultAddress.door,
      CP: getDefaultAddress.CP,
    };

    cartService.createOrder(user, address).then((response) => {
      setNewOtrder(response.data);
      setModalVisible(true);
      setLoader(false);
      // Poner dispatch

    }).catch((error) => console.log('ERROR', error.response.data.message));

  };

  return (
    <View style={[styles.homeContainer, { flex: 1 }]}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={{ marginTop: 25 }}>
        <MenuComponent tyle={{position: "absolute", top: 30}} onPress={() => navigator.goBack()} />
      </View>

      <Text style={styles.header}>Con tu compra</Text>

      {/* LIST OF ITEMS */}
      <ScrollView style={styles.itemsScroll}>
        {cart.length > 0 ? (
          cart.map((item, i) => {
            return (
              <View
                key={i}
                style={[
                  globalStyles.row,
                  globalStyles.alignItemsCenter,
                  { marginBottom: 8 },
                ]}
              >
                <View style={styles.cardImage}>
                  <Image
                    style={styles.productImage}
                    source={{ uri: item.img }}
                  />
                </View>

                <Text style={{ marginLeft: 8 }}>
                  {item.quantity} x {item.name}
                </Text>
              </View>
            );
          })
        ) : (
          <ActivityIndicator
            style={[{ fontSize: 30 }, { left: 2 }, { marginEnd: 4 }]}
            color="#4db591"
          />
        )}
      </ScrollView>

      {/* SAVEING */}
      <View style={styles.savingContainer}>
        <Text style={styles.header_2}>Ahorraste</Text>

        <View
          style={[
            globalStyles.row,
            globalStyles.justifyContentBetween,
            styles.saveingItems,
          ]}
        >
          <Text style={globalStyles.fontBold}>Agua</Text>

          {saving.waterSaveTotal != null ? (
            <Text> {saving.waterSaveTotal} L</Text>
          ) : (
            <Text>0 L</Text>
          )}
        </View>

        <View
          style={[
            globalStyles.row,
            globalStyles.justifyContentBetween,
            styles.saveingItems,
          ]}
        >
          <Text style={globalStyles.fontBold}>Huella de cabono</Text>

          {saving.carbonFootprintTotal != null ? (
            <Text> {saving.carbonFootprintTotal} ppm</Text>
          ) : (
            <Text>0 ppm</Text>
          )}
        </View>

        <View
          style={[
            globalStyles.row,
            globalStyles.justifyContentBetween,
            styles.saveingItems,
          ]}
        >
          <Text style={globalStyles.fontBold}>Dinero</Text>
          <Text>$ {saving.moneySaveTotal}</Text>
        </View>
      </View>

      {/* BUTTON */}
      <Pressable
        style={styles.buttonPurchase}
        disabled={loading}
        onPress={() => confirmCartHandle()}
      >
        <View>

          {
            !loading ?
              <Text style={styles.textStyle}>Finalizar</Text>
              :
              <ActivityIndicator color="#4db591" />
          }

        </View>
      </Pressable>

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
          orderId={newOrder._id}
          user={user}
          parentCallback={callback}
        />
      </Modal>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 38,
    alignSelf: "center",
    marginBottom: 20,
  },

  header_2: {
    fontWeight: "bold",
    fontSize: 28,
    alignSelf: "center",
    marginBottom: 20,
  },

  itemsScroll: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },

  cardImage: {
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
  },

  productImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  saveingItems: {
    marginBottom: 20,
  },

  savingContainer: {
    paddingHorizontal: 30,
  },

  /* btn confirm */
  buttonPurchase: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 30,
    elevation: 2,
    width: "100%",
    backgroundColor: "#3D9D5D",
    // bottom: -20,
    marginTop: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
