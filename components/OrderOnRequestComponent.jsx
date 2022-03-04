import { useEffect, useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import globalSyles from "../styles/styles";
import { fakeData } from "../utils/fakeData";

const OrderOnRequestComponent = () => {
  const [detailView, setDetailView] = useState(false);
  const [order, setOrder] = useState({});

  useEffect(() => {
    setOrder(fakeData.orderHistory[0]);
  }, []);

  const SmallOrderView = () => {
    return (
      <View style={[styles.smallView, globalSyles.shadow]}>
        <View style={styles.smallContainer}>
          <MaterialCommunityIcons
            name="truck-fast-outline"
            size={20}
            color="#3D9D5D"
          />
          <Text style={styles.smallTitle}>Pedido en curso...</Text>
        </View>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setDetailView(true)}
        >
          <Text style={styles.textBtn}>Ver Detalle</Text>
        </Pressable>
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
      // <Pressable
      //   style={[styles.smallView, styles.bigView, globalSyles.shadow]}
      //   onPress={() => setDetailView(false)}
      // >
         <View style={[styles.smallView, styles.bigView, globalSyles.shadow]}> 
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

        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setDetailView(false)}
        >
          <Text style={styles.textBtn}>Ocultar Detalle</Text>
        </Pressable> 
        </View>
      // </Pressable>
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
    marginBottom: 30,
  },
  button: {
    alignSelf: "flex-end",
  },
  textBtn: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
    marginRight: 4,
  },

  // SmallOrderView -----------
  smallView: {
    backgroundColor: "#E5E5E5",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 10,
    width: "100%",
  },
  smallTitle: {
    fontSize: 18,
    textAlign: "center",
    marginLeft: 15,
  },
  smallContainer: {
    flexDirection: "row",
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

export default OrderOnRequestComponent;
