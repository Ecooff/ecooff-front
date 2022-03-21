import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ScrollView, Pressable, StyleSheet, Text, View } from "react-native";
import { FooterComponent, MenuComponent } from "../../components";
import { fakeData } from "../../utils/fakeData";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import localhost from "../../localhost.json";
import axios from "axios";

const OrderHistoyScreen = () => {
  const user = useSelector(selectUser);
  const [orders, setOrders] = useState([]);
  const navigator = useNavigation();

  /* FOR DEMO ONLY */
  useEffect(() => {
    setOrders(fakeData.orderHistory)
  }, [])
  //-------------------------

  // useEffect(() => {
  //   axios.get(`http://${localhost}/api/orders`, {
  //     headers: { Authorization: `Bearer ${user?.token}` },
  //   }) //it shoud get only user's orders
  //   .then(({ data }) => data?.length > 0 ? setOrders(data) : setOrders(fakeData.orderHistory))
  //   .catch((err) => console.log(err))
  // }, []);

  const MyOrderHistory = () => {
    return orders.map((order, i) => {
      let statusColor;
      order.status === "Pendiente"
        ? (statusColor = "#FF1200")
        : (statusColor = "#3D9D5D");
      return (
        <View style={styles.mainContainer} key={i}>
          <View>
            <View style={styles.leftTextContainer}>
              <Text style={styles.leftText}>{order.date}</Text>
              <Text style={[styles.leftText, { color: statusColor }]}>
                {order.status}
              </Text>
            </View>
            <View style={styles.icons}>
              <AntDesign name="edit" size={18} color={statusColor} />
              <Ionicons name="trash-outline" size={18} color={statusColor} />
            </View>
          </View>

          <View style={styles.rightSide}>
            <Text style={styles.priceText}>${order.totalPrice}</Text>
            <Pressable
              onPress={() => navigator.navigate("OrderDetail", { order })}
            >
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
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
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
  leftTextContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  leftText: {
    fontSize: 12,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rightSide: {
    marginRight: 10,
  },
  editText: {
    fontSize: 12,
    textDecorationLine: "underline",
    textAlign: "center",
  },
  priceText: {
    fontSize: 18,
    textAlign: "center",
  },
});
