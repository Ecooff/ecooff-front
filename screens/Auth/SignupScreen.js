import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../../styles/styles";
import authStyles from "../../styles/authStyles";
import { useNavigation } from "@react-navigation/native";

{
  /* COMPONENTS */
}
import { AuthMenuComponent } from "../../components";

// SERVICES
import { AuthService } from "../../services";
import axios from "axios";

const SignupScreen = () => {
//   const initialRouteName = "Home";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetePassword, setRepetePassword] = useState("");
  const [loader, setLoader] = useState(false);

  const navigator = useNavigation();

  const signUp = () => {
    setLoader(true);

    let newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    // axios

    if (password === repetePassword) {
      AuthService.signUp(newUser).then(response => {
          console.log("checking response-->",response)//tst
        if (response.message) {
          createAlert(response.message);
        } else {
          navigator.navigate("ValidateUser");
        }
      });
    } else {
      createAlert("Las contraseñas no coinciden");
    }

    setLoader(false);
  };

  const createAlert = (message) =>
    Alert.alert("Verifica los datos", message, [
      { text: "OK", onPress: () => console.log() },
    ]);

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={[globalStyles.scrollContainer, styles.scrollContainer]}
        behavior="height"
        keyboardVerticalOffset={100}
      >
        {/* BACK ARROW */}
        <View
          style={[
            styles.arrowSpace,
            globalStyles.arrowContainer,
            globalStyles.row,
            globalStyles.alignItemsCenter,
          ]}
        >
          <TouchableOpacity
            onPress={navigator.goBack}
            style={globalStyles.backArrow}
          >
            <MaterialIcons name="arrow-back-ios" style={globalStyles.arrow} />
          </TouchableOpacity>

          <Image
            style={[authStyles.logoInline, globalStyles.menuLogo]}
            source={require("../../assets/icon-long.png")}
          />
        </View>

        {/* WELCOME MESSAGE */}
        <View style={authStyles.titleContainer}>
          <Text style={[authStyles.title, globalStyles.fontLarge]}>
            Registro
          </Text>
          <Text style={[authStyles.subTitle, globalStyles.fontMedium]}>
            Crea tu cuenta
          </Text>
        </View>

        {/* INPUTS */}
        <View style={globalStyles.widthEightyFive}>
          <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
            NOMBRE Y APELLIDO
          </Text>

          <View style={styles.inputColsContainter}>
            <View style={styles.inputCols}>
              <AntDesign name="user" style={globalStyles.icons} />
              <TextInput
                placeholder="Nombre"
                value={firstName}
                keyboardType="email-address"
                icon="mail"
                onChangeText={(text) => setFirstName(text)}
                style={globalStyles.input}
              />
            </View>

            <View style={styles.inputCols}>
              <TextInput
                placeholder="Apellido"
                value={lastName}
                keyboardType="email-address"
                icon="mail"
                onChangeText={(text) => setLastName(text)}
                style={globalStyles.input}
              />
            </View>
          </View>

          <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
            EMAIL
          </Text>
          <View style={globalStyles.inputRow}>
            <AntDesign name="mail" style={globalStyles.icons} />
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

          <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
            REPETIR CONTRASEÑA
          </Text>
          <View style={globalStyles.inputRow}>
            <AntDesign name="lock" style={globalStyles.icons} />
            <TextInput
              placeholder="Repetí tu contraseña"
              value={repetePassword}
              onChangeText={(text) => setRepetePassword(text)}
              style={globalStyles.input}
              secureTextEntry
            />
          </View>
        </View>

        {/* BUTTONS */}
        <View
          style={[authStyles.buttonContainer, globalStyles.widthEightyFive]}
        >
          <TouchableOpacity
            onPress={() => signUp()}
            // disabled={firstName != null && lastName != null && email != null && password != null && repetePassword != null && loader != null}
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
                Resgistrarme
              </Text>
            )}
          </TouchableOpacity>
        </View>

        {/* FINAL LABEL */}
        <TouchableOpacity
          onPress={() => navigator.navigate("Login")}
          style={[styles.finalLabel, authStyles.registerContainter]}
        >
          <Text style={[authStyles.headerTitle, globalStyles.fontSmall]}>
            ¿Ya tenés cuenta?
            <Text style={globalStyles.fontBold}> Inicia sesión</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  scrollContainer: {
  },

  arrowSpace: {
    marginBottom: 40,
  },

  inputColsContainter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputCols: {
    width: "48%",
    flexDirection: "row",
    backgroundColor: "#F9FAFB",
    borderRadius: 3,
    marginBottom: 25,
    alignItems: "center",
  },

  finalLabel: {
    marginBottom: 40,
  },

  loginText: {
    paddingVertical: 1,
  },
});
