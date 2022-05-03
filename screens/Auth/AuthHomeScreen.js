import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import globalStyles from "../../styles/styles";
import authStyles from "../../styles/authStyles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { localhost } from "../../localhost.json";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";

const AuthHomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const me = (user, token) => {
    user.token = token;
    dispatch(login(user));
    navigator.navigate("Home");
  };

  const verifyData = (data) => {
    if (data) {
      //setIsLoading(true);
      console.log("data true"); 
    } else {
      //setIsLoading(false);
      console.log("data false");
      setIsLoading(false)
    }
  };

  useEffect(async () => {

    setTimeout(() => {
      console.log('procede a mostrar botones de login') // la logica de esto es esperar a que traiga los datos en el GET, y si
      setIsLoading(false);                              // no trae los datos muestra los botones 
   }, 2000)

    try {
      const token = await AsyncStorage.getItem("@me");
      const user = await axios.get(
        `http://${localhost}/api/users/retrieveUser`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("userrr", user.data); //hacer un if user.data es undefined que muestre el loading . la idea es que espere 10segs y cambie el estado
      user ? me(user.data, token) : setIsLoading(false);
      //!user ? setIsLoading(false) : setIsLoading(true);
      //user ? setIsLoading(false) : setIsLoading(true);
       
      //verifyData(user.data)
      //user ? setIsLoading(true) : setIsLoading(false);
      // SI isLoading es TRUE se muestra el loading
      // funcion que haga un await en data y despues verifique si es true y si es false, y a partir de eso haga cambios
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={[styles.mainContaner, globalStyles.alignItemsCenter]}>
      <StatusBar barStyle="light-content" />

      {/* LOGO */}
      <Image
        style={[styles.logoBanner, styles.absolute]}
        source={require("../../assets/icon-white.png")}
      />

      {/* BANNER */}
      <View style={[styles.imgBanner, styles.absolute]}>
        <Image
          style={styles.banner}
          source={require("../../assets/bg-plants.png")}
        />
      </View>

      {/* WELCOME MESSAGE */}
      <View style={authStyles.titleContainer}>
        <Text
          style={[
            authStyles.title,
            globalStyles.fontLarge,
            globalStyles.textCenter,
          ]}
        >
          ¡Bienvenidx a Ecooff!
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View
          style={[authStyles.buttonContainer, globalStyles.widthEightyFive]}
        >
          <TouchableOpacity
            onPress={() => navigator.navigate("Login")}
            style={[
              styles.loginButton,
              globalStyles.button,
              globalStyles.primary,
              globalStyles.widthFluid,
            ]}
          >
            <Text style={globalStyles.textWhite}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigator.navigate("Signup")}
            style={[
              globalStyles.button,
              globalStyles.secondary,
              globalStyles.widthFluid,
            ]}
          >
            <Text style={globalStyles.textWhite}>Registrarme</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* ROCIAL ROW */}
      <View
        style={[
          styles.socialRow,
          globalStyles.row,
          globalStyles.alignItemsCenter,
        ]}
      >
        <View style={styles.lines}></View>

        <AntDesign name="instagram" size={18} style={styles.socialColor} />

        <FontAwesome name="facebook-f" size={18} style={styles.socialColor} />

        <Entypo name="twitter" size={18} style={styles.socialColor} />

        <View style={styles.lines}></View>
      </View>
    </View>
  );
};

export default AuthHomeScreen;

const styles = StyleSheet.create({
  mainContaner: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 60,
  },

  loginButton: {
    marginBottom: 15,
  },

  socialRow: {
    width: "85%",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 60,
  },

  lines: {
    width: "30%",
    height: 1,
    backgroundColor: "#8ba495",
  },

  socialColor: {
    color: "#8ba495",
  },

  absolute: {
    position: "absolute",
  },

  imgBanner: {
    top: 0,
  },

  logoBanner: {
    width: 120,
    height: 120,
    top: 30,
    zIndex: 3,
    // elevation: 3,
  },

  banner: {
    top: -100,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
  },
});
