import { useEffect, useState } from "react";
import { TextInput, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalSyles from "../../styles/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { Feather } from '@expo/vector-icons';
import globalStyles from "../../styles/styles";
import authStyles from "../../styles/authStyles";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

// COMPONENTS
import { MenuComponent } from "../../components";

const EditProfileScreen = () => {

  const user = useSelector(selectUser);
  const navigator = useNavigation();
  const [firsname, setFirstname] = useState(user.firstName);
  const [lastname, setLastname] = useState(user.lastName);
  const [loader, setLoader] = useState(false);

  const saveUser = () => {

  }

  return (
    <View style={{ flex: 1 }}>

      <MenuComponent onPress={() => navigator.goBack()} />

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
            value={firsname}
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
            value={user.email}
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
            desabled={true}
            value={'*************'}
            style={globalStyles.input}
            secureTextEntry
          />
        </View>
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
            {loader == false < 2 ? (
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
    paddingHorizontal: '7.5%'
  },

  confirmButton: {
    position: 'absolute',
    width: '100%',
    bottom: 30
  }

});

export default EditProfileScreen;
