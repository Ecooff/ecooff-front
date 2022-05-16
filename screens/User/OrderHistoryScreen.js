import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ScrollView, Pressable, StyleSheet, Text, View } from "react-native";
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
  const navigator = useNavigation();

  useEffect(() => {
    ordersService.getListOfOrders(user).then((response) => {
      setOrders(response.data);
    })
  }, []);

  const getOrderDetail = (id) => {
    ordersService.getOrderById(user, id).then((response) => {
      console.log('Orders data: ', response.data);
    })
  }

  return (
    <View style={styles.homeConteiner}>

      <ScrollView>

        <MenuComponent onPress={() => navigator.goBack()} />

        <Text style={styles.title}>Mis pedidos</Text>

        {
          orders.length > 0 ?
            orders.map((order, i) => {
              <OrderListComponent key={order._id} order={order} />
            })
            :
            <View style={[styles.scrollTitle, globalStyles.row, globalStyles.justifyContentCenter]}>
                  <MaterialIcons name="search-off" size={200} color="lightgrey" />
            </View>
        }

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

  scrollTitle: {
    marginTop: 30,
    marginBottom: 30,
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
      height: 4,
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
    fontSize: 17,
    marginTop: 5
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: '#FFFFFF', shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 15,
    marginRight: 20,
    padding: 3
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
    fontSize: 21,
    textAlign: "center",
    marginBottom: 4
  },

  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 10
  }

});
