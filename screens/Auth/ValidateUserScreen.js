import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../../styles/styles";
import authStyles from "../../styles/authStyles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { login } from "../../store";

// SERVICES
import { AuthService } from "../../services";

{
  /* COMPONENTS */
}
import AuthMenuComponent from "../../components/AuthMenuComponent";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ValidateUserScreen = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [loader, setLoader] = useState(false);
  const navigator = useNavigation();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@me", value);
    } catch (e) {
      console.log(e);
    }
  };

  const validateUser = () => {

    setLoader(true);

    let token = code1 + code2 + code3 + code4;

    AuthService.validateUser({token: token})
    .then((response) => {

      console.log(response);
      if(response.message) {
        createAlert(response.message);
      }else {
        storeData(response.newToken);
        console.log("dataa verifivation-->", response);
        navigator.navigate("Home");
      }

    })
    .catch((err) => {
      createAlert(err);
    })
    .finally(() => setLoader(false));

  };

  const createAlert = (message) =>
    Alert.alert('Hubo un problema', message, [
      { text: "OK", onPress: () => console.log() },
    ]);

  return (
    <KeyboardAvoidingView
      style={[globalStyles.scrollContainer]}
      behavior="padding"
    >
      {/* BACK ARROW */}
      <AuthMenuComponent />

      <View style={authStyles.titleContainer}>
        <Text style={[authStyles.title, globalStyles.fontLarge]}>
          Valida tu cuenta
        </Text>
        <Text style={[authStyles.subTitle, globalStyles.fontMedium]}>
          Te enviamos un mail con el código de verificación
        </Text>
      </View>

      <View style={globalStyles.widthEightyFive}>
        <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
          Código
        </Text>
        <View style={[styles.inputRow, globalStyles.justifyContentBetween]}>
          <TextInput
            value={code1}
            maxLength={1}
            keyboardType="email-address"
            icon="mail"
            onChangeText={(text) => {
              setCode1(text);
            }}
            style={styles.codeInputs}
          />
          <TextInput
            value={code2}
            maxLength={1}
            keyboardType="email-address"
            icon="mail"
            onChangeText={(text) => {
              setCode2(text);
            }}
            style={styles.codeInputs}
          />
          <TextInput
            value={code3}
            maxLength={1}
            keyboardType="email-address"
            icon="mail"
            onChangeText={(text) => {
              setCode3(text);
            }}
            style={styles.codeInputs}
          />
          <TextInput
            value={code4}
            maxLength={1}
            keyboardType="email-address"
            icon="mail"
            onChangeText={(text) => {
              setCode4(text);
            }}
            style={styles.codeInputs}
          />
        </View>
      </View>

      <View
        style={[
          styles.buttonContainer,
          authStyles.buttonContainer,
          globalStyles.widthEightyFive,
        ]}
      >
        <TouchableOpacity
          onPress={() => validateUser()}
          // disabled={code1 == null || code2 == null || code3 == null || code4 == null}
          style={[
            globalStyles.button,
            globalStyles.primary,
            globalStyles.widthFluid,
          ]}
        >
          {loader == false < 2 ? (
            <View>
              <ActivityIndicator size="small" color="#FFF" />
            </View>
          ) : (
            <Text style={globalStyles.textWhite}>Validar</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  arrowSpace: {
    marginBottom: 30,
  },

  buttonContainer: {
    marginTop: 150,
  },

  headerContainer: {
    marginTop: 20,
  },

  codeInputs: {
    marginTop: 20,
  },

  inputRow: {
    flexDirection: "row",
    marginBottom: 25,
    alignItems: "center",
  },

  codeInputs: {
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 15,
    paddingVertical: 15,
    textAlign: "center",
    width: "20%",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: 3,
  },
});

export default ValidateUserScreen;
