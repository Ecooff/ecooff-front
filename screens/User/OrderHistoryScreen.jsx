import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ScrollView, Pressable, StyleSheet, Text, View } from "react-native";
import { FooterComponent, MenuComponent } from "../../components";
import { fakeData } from "../../utils/fakeData";

const OrderHistoyScreen = () => {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const navigator = useNavigation();
  MyOrderHistory;
  // useEffect(() => {
  //     setUser()
  // }, []);

  useEffect(() => {
    setOrders(fakeData.orderHistory);
  }, []);

  const MyOrderHistory = () => {
    return orders.map((order, i) => {
      let statusColor;
      order.status === "Pendiente" ? statusColor = "#FF1200" : statusColor = "#3D9D5D";
      return (
        <View style={styles.mainContainer} key={i}>
          <View>
            <View style={styles.leftTextContainer}>
              <Text>{order.date}</Text>
              <Text style={{color: statusColor}}>
                {order.status}
              </Text>
            </View>
            <View style={styles.icons}>
              <AntDesign name="edit" size={20} color={statusColor} />
              <Ionicons name="trash-outline" size={20} color={statusColor} />
            </View>
          </View>

          <View style={styles.rightSide}>
            <Text style={styles.priceText}>${order.totalPrice}</Text>
            <Pressable onPress={() => navigator.navigate("OrderDetail")}>
              <Text style={styles.editText}>Ver detalle</Text>
            </Pressable>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.homeConteiner}>
      <ScrollView>
        <MenuComponent />

        <Text style={styles.title}>Mis pedidos</Text>

        <MyOrderHistory />
      </ScrollView>

      <View>
        <FooterComponent />
      </View>
    </View>
  );
};

export default OrderHistoyScreen;

const styles = StyleSheet.create({
  homeConteiner: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 38,
    alignSelf: "center",
    marginBottom: 40,
  },
  mainContainer: {
    borderWidth: .8,
    margin: 10,
    padding: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,

    borderColor: "#979797",
    borderBottomColor: "rgba(0, 0, 0, 0.25)",
    borderBottomWidth: 3,
    borderStartColor: "rgba(0, 0, 0, 0.25)",
    borderStartWidth: 2,
    borderEndColor: "rgba(0, 0, 0, 0.25)",
    borderEndWidth: 2,
  },
  leftTextContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rightSide: {
    marginRight: 10
  },
  editText: {
    textDecorationLine: "underline",
    textAlign: "center",
  },
  priceText: {
    fontSize: 22,
    textAlign: "center",
  },
});
