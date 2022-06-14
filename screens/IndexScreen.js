import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Modal,
} from "react-native";
import globalStyles from "../styles/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { useNavigation } from "@react-navigation/native";

{ /* Screens */ }
import HomeScreen from "../screens/HomeScreen";
import OrderHistoryScreen from "../screens/User/OrderHistoryScreen";

{ /* COMPONENTS */ }
import { MenuComponent, FooterComponent } from "../components";

const IndexScreen = () => {
  const [tab, setTab] = useState(<HomeScreen />);
  const views = [<HomeScreen />, <OrderHistoryScreen menu={true} />]

  const navigator = useNavigation();

  const callback = (param) => {
    setTab(views[param]);
  };

  return (
    <View style={[styles.homeContainer]}>

      <MenuComponent tab={true} style={{position: "absolute", top: 30}} />

      {tab}

      {/* FOOTER */}
      <FooterComponent parentCallback={callback} />

    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({

  homeContainer: {
    flex: 1,
  },

});
