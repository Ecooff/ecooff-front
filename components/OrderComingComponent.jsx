import { useEffect, useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import globalSyles from "../styles/styles";
import { fakeData } from "../utils/fakeData";
import { useSelector } from "react-redux";
import { selectOrder } from "../store/orderSlice";

const OrderComingComponent = () => {
  const [detailView, setDetailView] = useState(false);
  // const order = useSelector(selectOrder);
  console.log("ORDER STATE ORDERCOMINGCOMP", order)
  const [order, setOrder] = useState(fakeData.orderHistory[0])

  const SmallOrderView = () => {
    return (
      <View style={styles.smallView}>
        <View style={styles.smallContainer}>
          <View style={styles.smallLeftContainer}>

            <MaterialCommunityIcons
              name="truck-fast-outline"
              size={20}
              color="#3D9D5D"
              />
            <Text style={styles.smallTitle}>Pedido en curso...</Text>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => setDetailView(true)}
            >
            <Text style={styles.textBtn}>Ver Detalle</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  const Products = () => {
    return order.description?.map((product, i) => {
      return (
        <Text style={styles.textStyle} key={i}>
          {product.amount}x {product.title}
        </Text>
      );
    });
  };

  const BigOrderView = () => {
    return (
      <Pressable
        style={[styles.smallView, styles.bigView, globalSyles.shadow]}
        onPress={() => setDetailView(false)}
      >
        <Text style={styles.title}>Pedido en curso...</Text>

        <View style={styles.container}>
          <MaterialCommunityIcons
            name="shopping-outline"
            size={18}
            color="#3D9D5D"
          />
          <View>
            <Products />
          </View>
        </View>

        <View style={styles.container}>
          <Ionicons name="location-outline" size={18} color="#3D9D5D" />
          <Text style={styles.textStyle}>{order.deliveryAddress}</Text>
        </View>

        <View style={styles.container}>
          <MaterialCommunityIcons
            name="truck-fast-outline"
            size={18}
            color="#3D9D5D"
          />
          <Text style={styles.textStyle}>{order.deliveryTime} MINS</Text>
        </View>

        <View style={styles.container}>
          <MaterialIcons name="payment" size={18} color="#3D9D5D" />
          <Text style={styles.textStyle}>${order.totalPrice}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.centeredView}>
      {!detailView ? <SmallOrderView /> : <BigOrderView />}
    </View>
  );
};

const styles = StyleSheet.create({
  // Whole Component -----------
  centeredView: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    alignSelf: "flex-end",
  },
  textBtn: {
    color: '#c0c0c0',
    textAlign: "center",
    marginRight: 4,
  },

  // SmallOrderView -----------
  smallView: {
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 15,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  smallTitle: {
    fontSize: 18,
    textAlign: "center",
    marginLeft: 15,
  },
  smallLeftContainer: {
    flexDirection: "row",
  },
  smallContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  // BigOrderView --------------
  bigView: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    margin: 10,
  },
  textStyle: {
    fontSize: 12,
    marginLeft: 44,
  },
});

export default OrderComingComponent;
