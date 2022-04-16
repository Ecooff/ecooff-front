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
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../../styles/styles";
import authStyles from "../../styles/authStyles";
import { useNavigation } from "@react-navigation/native";

{
  /* COMPONENTS */
}
import AuthMenuComponent from "../../components/AuthMenuComponent";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { localhost } from "../../localhost.json";
import axios from "axios";

const ValidateUserScreen = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const navigator = useNavigation();

  const validateUser = () => {
    console.log('entrando a validateUser')
    let token = code1 + code2 + code3 + code4;
    axios.post(`http://${localhost}/api/users/verifyEmail`, token)
        .then(({data}) => {
            console.log("dataa verifivation-->",data)
            navigator.navigate('Home')
        })
        .catch((err) => console.log("sth was wrong", err));
  };

  const createAlert = () =>
    Alert.alert(
      "No encontrammos tu cuenta",
      "El mail que ingresaste parece no estar registrado. Revisrá que esté bien escribo o probá con otro diferente",
      [{ text: "OK", onPress: () => {} }]
    );

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
            keyboardType="email-address"
            icon="mail"
            onChangeText={(text) => setCode1(text)}
            style={styles.codeInputs}
          />
          <TextInput
            value={code2}
            keyboardType="email-address"
            icon="mail"
            onChangeText={(text) => setCode2(text)}
            style={styles.codeInputs}
          />
          <TextInput
            value={code3}
            keyboardType="email-address"
            icon="mail"
            onChangeText={(text) => setCode3(text)}
            style={styles.codeInputs}
          />
          <TextInput
            value={code4}
            keyboardType="email-address"
            icon="mail"
            onChangeText={(text) => setCode4(text)}
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
          <Text style={globalStyles.textWhite}>Validar</Text>
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
