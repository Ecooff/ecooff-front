import React, { Component } from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import globalStyles from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SplashLogo from '../assets/splash.png';

export const MenuComponent = () => {
  const navigator = useNavigation();
    return (
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between'}}
      >
        <Pressable onPress={() => navigator.navigate('Home')}>
        <Image
          style={styles.menuLogo}
<<<<<<< HEAD
          source={SplashLogo}
        />
=======
          source={require("../assets/icon.png")}
          />
        </Pressable>
>>>>>>> aa38dd34f6d4063704a7b4825c58cdb1e90dfcac

        <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>
          <Pressable onPress={() => navigator.navigate("Cart")}>
            <Ionicons name="ios-cart-outline" size={30} color="gray" /> 
          </Pressable>
          <Feather name="bell" size={24} style={styles.icon} color="gray" />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  mainMenu: {
    marginTop: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    
  },

  menuLogo: {
    width: 50,
    height: 60,
  },

  icon: {
    marginLeft: 15,
    marginRight: 10
  },
});
