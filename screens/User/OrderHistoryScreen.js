import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ScrollView, Pressable, StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from "react-native";
import { fakeData } from "../../utils/fakeData";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import globalStyles from "../../styles/styles";
import { MaterialIcons } from '@expo/vector-icons';

// SERVICES
import ordersService from "../../services/OrdersService";

// COMMPONENTS
import { FooterComponent, MenuComponent } from "../../components";
import OrderListComponent from "../../components/OrderListComponent";

const OrderHistoyScreen = () => {
  const user = useSelector(selectUser);
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const navigator = useNavigation();

  useEffect(() => {
    ordersService.getListOfOrders(user).then((response) => {
      setOrders(response.data);
      setLoadingOrders(false);
    })
  }, []);

  return (
    <View style={styles.homeConteiner}>

      <ScrollView style={{ paddingBottom: 30 }}>

        <Text style={styles.title}>Mis pedidos</Text>

        {
          !loadingOrders ?
            orders.length > 0 ?
              orders.map((order, i) => {
                return (
                  <View style={ { paddingHorizontal: 20 } } key={i}>
                    <OrderListComponent order={order.order} user={user} />
                    {i == orders.length - 1 && <SafeAreaView style={{ height: 120 }}></SafeAreaView>}
                  </View>
                )
              })
              :
              <View key={i} style={[styles.scrollTitle, globalStyles.row, globalStyles.justifyContentCenter]}>
                <MaterialIcons name="search-off" size={200} color="lightgrey" />
              </View>
            :
            <ActivityIndicator style={[globalStyles.icons]} color="#4db591" />
        }

      </ScrollView>

    </View>
  );
};

export default OrderHistoyScreen;

const styles = StyleSheet.create({

  homeConteiner: {
    flex: 1
  },

  title: {
    fontWeight: "bold",
    fontSize: 38,
    alignSelf: "center",
    marginBottom: 40,
  },

  scrollTitle: {
    marginTop: 30,
    marginBottom: 30,
  },

});
