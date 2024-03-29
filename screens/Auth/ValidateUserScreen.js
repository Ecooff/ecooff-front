import React, { useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../../styles/styles";
import authStyles from "../../styles/authStyles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";

// SERVICES
import { AuthService } from "../../services";

{ /* COMPONENTS */ }
import AuthMenuComponent from "../../components/AuthMenuComponent";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ValidateUserScreen = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [loader, setLoader] = useState(false);
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const inputUno = useRef(null);
  const inputDos = useRef(null);
  const inputTres = useRef(null);
  const inputCuatro = useRef(null);

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

    AuthService.validateUser({ token: token }).then((response) => {
      if (response.message) {
        createAlert(response.message);
      } else {

        // IN CASE IT's NEEDED
        response.token = response.newToken;
        storeData(response.newToken);
        dispatch(login(response));
        navigator.navigate("Home");

      }

    }).catch((err) => createAlert(err)).finally(() => setLoader(false));
  };

  const createAlert = (message) =>
    Alert.alert("Hubo un problema", message, [
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
            ref={inputUno}
            keyboardType="email-address"
            autoCapitalize='none'
            onChangeText={(text) => {
              setCode1(text);
            }}
            style={styles.codeInputs}
            onSelectionChange={() => {
              code1 && inputDos.current.focus();
            }}
          />
          <TextInput
            value={code2}
            ref={inputDos}
            maxLength={1}
            keyboardType="email-address"
            autoCapitalize='none'
            onChangeText={(text) => {
              setCode2(text);
            }}
            style={styles.codeInputs}
            onSelectionChange={() => {
              code2 && inputTres.current.focus();
            }}
          />
          <TextInput
            value={code3}
            ref={inputTres}
            maxLength={1}
            keyboardType="email-address"
            autoCapitalize='none'
            onChangeText={(text) => {
              setCode3(text);
            }}
            style={styles.codeInputs}
            onSelectionChange={() => {
              code3 && inputCuatro.current.focus();
            }}
          />
          <TextInput
            value={code4}
            maxLength={1}
            ref={inputCuatro}
            keyboardType="email-address"
            autoCapitalize='none'
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
