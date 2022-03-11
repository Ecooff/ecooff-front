import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import globalStyles from "../../styles/styles";
import authStyles from "../../styles/authStyles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';

// SERVICES
import { AuthService } from "../../services";

{
  /* COMPONENTS */
}
import AuthMenuComponent from "../../components/AuthMenuComponent";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const navigator = useNavigation();
  const dispatch = useDispatch();

  
  const handleLogin = () => {
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('@me', value)
      } catch (e) {
        console.log(e)
      }
    }
    setLoader(true);

    let user = {
      email: email,
      password: password,
    };

    // AuthService.login(user) //NOTE: comment to delete
    //   .then((res) => {
    //     console.log("LOGIN LOGIN LOGIN---> ", res); // line to delete

    //     // if (response.message) {
    //     //     createAlert(response.message);
    //     // } else if (!response.verified) {
    //     //     createAlert(response.message);
    //     // } else {
    //     //     navigator.navigate('Home')
    //     // }

    //     res.verified
    //       ? navigator.navigate("Home")
    //       : createAlert(res.message || "Por favor verifique su cuenta");

    //     setLoader(false);
    //   })
    //   .catch((err) => console.log("something was wrong", err))

    AuthService.login(user)
      .then((user) => {
        if (user.verified) {
          storeData(user.token);
          dispatch(login(user));
          navigator.navigate("Home");
        } else {
          return createAlert(user.message || "Por favor verifique su cuenta");
        }
      })
      .catch((err) => console.log("something was wrong", err))
      .finally(() => setLoader(false));
  };

  const createAlert = (message) =>
    Alert.alert("Acceso denegado", message, [
      { text: "OK", onPress: () => console.log() },
    ]);

  return (
    <KeyboardAvoidingView
      style={[globalStyles.scrollContainer]}
      behavior="padding"
    >
      <StatusBar barStyle="dark-content" />

      {/* BACK ARROW */}
      <AuthMenuComponent />

      {/* WELCOME MESSAGE */}
      <View style={authStyles.titleContainer}>
        <Text style={[authStyles.title, globalStyles.fontLarge]}>
          ¡Bienvenidx de vuelta!
        </Text>
        <Text
          style={[
            styles.subTitle,
            authStyles.subTitle,
            globalStyles.fontMedium,
          ]}
        >
          Accede a tu cuenta
        </Text>
      </View>

      {/* INPUTS */}
      <View style={globalStyles.widthEightyFive}>
        <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
          EMAIL / NOMBRE DE USUARIO
        </Text>
        <View style={globalStyles.inputRow}>
          <AntDesign name="user" style={globalStyles.icons} />
          <TextInput
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            icon="mail"
            onChangeText={(text) => setEmail(text)}
            style={globalStyles.input}
          />
        </View>

        <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
          CONTRASEÑA
        </Text>
        <View style={globalStyles.inputRow}>
          <AntDesign name="lock" style={globalStyles.icons} />
          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={globalStyles.input}
            secureTextEntry
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigator.navigate("Forgot")}
        style={styles.forgotContainer}
      >
        <Text
          style={[
            styles.headerTitle,
            globalStyles.fontSmall,
            globalStyles.fontBold,
          ]}
        >
          ¿Olvidaste tu contraseña?
        </Text>
      </TouchableOpacity>

      {/* SOCIAL BUTTONS */}
      <View
        style={[
          styles.socialRow,
          globalStyles.row,
          globalStyles.alignItemsCenter,
        ]}
      >
        {/* APPLE */}
        <TouchableOpacity
          onPress={() => navigator.navigate("Home")}
          style={styles.socialIcon}
        >
          <AntDesign name="apple1" size={22} style={styles.socialColor} />
        </TouchableOpacity>

        {/* FACEBOOK */}
        <TouchableOpacity
          onPress={() => navigator.navigate("Home")}
          style={[styles.socialIcon, styles.facebook]}
        >
          <FontAwesome
            name="facebook-f"
            size={22}
            style={styles.socialColor}
            color="#1777F2"
          />
        </TouchableOpacity>

        {/* GOOGLE */}
        <TouchableOpacity
          onPress={() => navigator.navigate("Home")}
          style={[styles.socialIcon, styles.google]}
        >
          <AntDesign
            name="google"
            size={22}
            style={styles.socialColor}
            color="#ef4432"
          />
        </TouchableOpacity>
      </View>

      {/* BUTTON */}
      <View style={[authStyles.buttonContainer, globalStyles.widthEightyFive]}>
        <TouchableOpacity
          onPress={() => handleLogin()}
          style={[
            globalStyles.button,
            globalStyles.primary,
            globalStyles.widthFluid,
          ]}
        >
          {loader == false < 2 ? (
            <View style={[globalStyles.container, globalStyles.horizontal]}>
              <ActivityIndicator size="small" color="#FFF" />
            </View>
          ) : (
            <Text style={[styles.loginText, globalStyles.textWhite]}>
              Iniciar sesión
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigator.navigate("Signup")}
        style={styles.registerContainter}
      >
        <Text style={[styles.headerTitle, globalStyles.fontSmall]}>
          ¿No tenés cuenta?
          <Text style={globalStyles.fontBold}> Registrate</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  arrowSpace: {
    marginBottom: 28,
  },

  forgotContainer: {
    width: "80%",
    marginTop: 5,
    marginBottom: 30,
  },

  subTitle: {
    marginBottom: -5,
  },

  headerTitle: {
    fontSize: 15,
    textAlign: "right",
    color: "#121515",
  },

  socialRow: {
    width: "50%",
    justifyContent: "space-around",
    marginBottom: 25,
  },

  socialIcon: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  facebook: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  loginText: {
    paddingVertical: 1,
  },
});
