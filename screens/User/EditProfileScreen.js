import { useEffect, useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  NativeModules,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalSyles from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateName } from "../../store/userSlice";
import { Feather } from "@expo/vector-icons";
import globalStyles from "../../styles/styles";
import authStyles from "../../styles/authStyles";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
// SERVICES
import { AuthService } from "../../services";

// COMPONENTS
import { MenuComponent } from "../../components";

const EditProfileScreen = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const [firstname, setFirstname] = useState(user.firstName);
  const [lastname, setLastname] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [newUser, setnewUser] = useState({});

  const saveUser = () => {
    setLoader(true);
    AuthService.editName(user, {
      email: email,
      firstName: firstname,
      lastName: lastname,
      password: password,
    })
      .then(() => {
        dispatch(updateName({ firstName: firstname, lastName: lastname }));
        setLoader(false);
      })
      .catch((error) => console.log("CATCHH", error));

    navigator.navigate("Profile");
  };

  return (
    <View style={{ flex: 1 }}>
      <MenuComponent style={{position: "absolute", top: 30}} onPress={() => navigator.goBack()} />

      {/* TEXT */}
      <Text style={styles.title}>Edita tus datos</Text>

      {/* INPUTS */}
      <View style={[styles.containerInputs]}>
        <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
          NOMBRE
        </Text>
        <View style={globalStyles.inputRow}>
          <AntDesign name="user" style={globalStyles.icons} />
          <TextInput
            placeholder="Email"
            value={firstname}
            keyboardType="email-address"
            icon="mail"
            onChangeText={(text) => setFirstname(text)}
            style={globalStyles.input}
          />
        </View>

        <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
          APELLIDO
        </Text>
        <View style={globalStyles.inputRow}>
          <AntDesign name="user" style={globalStyles.icons} />
          <TextInput
            placeholder="Email"
            value={lastname}
            keyboardType="email-address"
            icon="mail"
            onChangeText={(text) => setLastname(text)}
            style={globalStyles.input}
          />
        </View>

        <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
          Email
        </Text>
        <View style={globalStyles.inputRow}>
          <AntDesign name="lock" style={globalStyles.icons} />
          <TextInput
            placeholder="Email"
            desabled={true}
            value={email}
            style={globalStyles.input}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
{/* 
        <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
          CONTRASEÑA
        </Text>
        <View style={globalStyles.inputRow}>
          <AntDesign name="lock" style={globalStyles.icons} />
          <TextInput
            placeholder="Contraseña"
            desabled={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={globalStyles.input}
            secureTextEntry
          />
        </View> */}
      </View>

      {/* BUTTON */}

      <View style={[styles.containerInputs, styles.confirmButton]}>
        <View style={[authStyles.buttonContainer, globalStyles.widthFluid]}>
          <TouchableOpacity
            onPress={() => saveUser()}
            style={[
              globalStyles.button,
              globalStyles.primary,
              globalStyles.widthFluid,
            ]}
          >
            {loader ? (
              <View>
                <ActivityIndicator size="small" color="#FFF" />
              </View>
            ) : (
              <Text style={[styles.loginText, globalStyles.textWhite]}>
                Guardar
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 38,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 40,
  },

  containerInputs: {
    paddingHorizontal: "7.5%",
  },

  confirmButton: {
    position: "absolute",
    width: "100%",
    bottom: 30,
  },
  loginText: {},
});

export default EditProfileScreen;
