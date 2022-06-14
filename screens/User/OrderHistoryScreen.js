import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, ActivityIndicator, SafeAreaView, TouchableOpacity } from "react-native";
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

const OrderHistoyScreen = ({ menu }) => {
  const user = useSelector(selectUser);
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState(0);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const navigator = useNavigation();

  useEffect(() => {
    getOrders(filter);
    console.log(menu);
  }, []);

  const getFilteredData = (option) => {
    setFilter(option);
    option != filter && getOrders(option);
  }

  const getOrders = (option) => {
    setLoadingOrders(true);
    ordersService.getListOfOrders(user, option).then((response) => {
      setOrders(response.data);
      setLoadingOrders(false);
    })

  }

  return (
    <View style={styles.homeConteiner}>

      <ScrollView style={{ paddingBottom: 30 }}>

        {
          !menu && <MenuComponent style={{ position: "absolute", top: 30 }} onPress={() => navigator.goBack()} />
        }
        <Text style={styles.title}>Mis pedidos</Text>

        {/* FILTERS */}
        <View style={[globalStyles.row, globalStyles.justifyContentAround, globalStyles.alignItemsCenter, styles.buttonsRow]}>

          <TouchableOpacity
            style={[styles.buttonFilter, filter == 0 && globalStyles.secondary]}
            onPress={() => getFilteredData(0)}
          >

            <Text style={filter == 0 && globalStyles.textWhite}>
              En curso
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonFilter, filter == 1 && globalStyles.secondary]}
            onPress={() => getFilteredData(1)}
          >

            <Text style={filter == 1 && globalStyles.textWhite}>
              Completedas
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonFilter, filter == 2 && globalStyles.secondary]}
            onPress={() => getFilteredData(2)}
          >

            <Text style={filter == 2 && globalStyles.textWhite}>
              Todas
            </Text>

          </TouchableOpacity>


        </View>

        {
          !loadingOrders ?
            orders.length > 0 ?
              orders.map((order, i) => {
                return (
                  <View style={{ paddingHorizontal: 20 }} key={i}>
                    <OrderListComponent order={order.order} user={user} />
                    {i == orders.length - 1 && <SafeAreaView style={{ height: 120 }}></SafeAreaView>}
                  </View>
                )
              })
              :
              <View style={[styles.scrollTitle, globalStyles.row, globalStyles.justifyContentCenter]}>
                <MaterialIcons name="search-off" size={200} color="lightgrey" />
              </View>
            :
            <ActivityIndicator style={{ marginTop: '30%' }} color="#4db591" />
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

  buttonsRow: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  buttonFilter: {
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  }

});
