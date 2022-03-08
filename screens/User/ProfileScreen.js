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
} from "react-native";
import { Ionicons, Entypo, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import globalStyles from "../../styles/styles";
import { MenuComponent } from "../../components";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const navigator = useNavigation();

  console.log("USER PROFILE SCREEM", user)

  const shadowStyleProducts = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  };

  // to Components then
  const Profile = () => {
    return (
      <View
      style={[
        { marginTop: 10, marginBottom: 20 },
        globalStyles.row,
        globalStyles.alignItemsCenter,
      ]}
    >
      <View style={shadowStyleProducts}>
        <Image
          style={[styles.profileImg]}
          source={require("../../assets/avatar.png")}
        />
      </View>

      <View>
        <Text style={globalStyles.fontLarge}>{user.firstName ? `${user.firstName}, ${user.lastName}` : "Nombre Apellido"}</Text>

        <Text style={globalStyles.fontMedium}>
          {user.email ? user.email : "tobias.matarasso@gmail.com"}
        </Text>
      </View>
    </View>
    )
  }

  // to Components then
  const Options = () => {
    return (
      <View>
      <TouchableOpacity onPress={() => navigator.navigate("OrderHistory")} style={ styles.listItem}>
        <Entypo name={"back-in-time"} size={24} style={styles.icons} />
        <Text style={globalStyles.fontMedium}>Pedidos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigator.navigate("Addresses")} style={ styles.listItem }>
        <Ionicons name="location-outline" size={24} style={styles.icons} />
        <Text style={globalStyles.fontMedium}>Direcciones para delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigator.navigate("Payments")} style={ styles.listItem }>
        <MaterialIcons name={"payment"} size={24} style={styles.icons} />
        <Text style={globalStyles.fontMedium}>Método de pago</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigator.navigate("Edit")} style={ styles.listItem }>
        <MaterialCommunityIcons name={"account-edit-outline"} size={24} style={styles.icons} />
        <Text style={globalStyles.fontMedium}>Detalles del perfíl</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigator.navigate("AuthHome")} style={[ styles.listItem, styles.lastListItem ]}>
        <MaterialIcons name={"logout"} size={24} style={styles.icons} />
        <Text style={globalStyles.fontMedium}>Cerrar sesión</Text>
      </TouchableOpacity>
      </View>
    );
}

  return (
    <View style={styles.homeConteiner}>
      <MenuComponent />
      <View style={{ paddingHorizontal: 10 }}>
        <Profile />
        <Options />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  homeConteiner: {
    // paddingTop: 40,
    paddingHorizontal: 10,
  },

  profileImg: {
    width: 80,
    height: 80,
    backgroundColor: "#F9FAFB",
    borderRadius: 100,
    marginRight: 20,
  },

  listItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, .2)",
    marginHorizontal: -20,
    flexDirection: "row",
    alignItems: "center",
  },

  lastListItem: {
    borderBottomWidth: 1,
  },

  icons: {
    color: "#6CAA7A",
    marginRight: 15,
  },
});
