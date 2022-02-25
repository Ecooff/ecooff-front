import { useEffect, useState } from "react";
import { TextInput, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalSyles from "../../styles/styles";

const EditProfileScreen = () => {
  // const [user, setUser] = useState({});
  const navigator = useNavigation();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [picture, setPicture] = useState("");

    const [name, onChangeName] = useState("Tobias");
    const [email, onChangeEmail] = useState("user@gmail.com");
    const [password, onChangePassword] = useState("********");

  // useEffect(() => {
  //   setUser()
  // }, [])

  const cancel = () => {
    navigator.navigate("Profile");
  };

  const confirm = () => {
    navigator.navigate("Profile");
  };

  const ContentBackUp = () => {
    return (
      <View>
        <View>
          <Text>Nombre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => onChangeName()}
            value={name}
        />
        </View>

        <View>
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => onChangeEmail()}
            value={email}
        />
        </View>

        <View>
          <Text>Contraseña:</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => onChangePassword()}
            value={password}
        />
        </View>
      </View>
    );
  };

  const Content = () => {
    return (
      <View>
        <View>
          <View>
            <Text>Nombre:</Text>
            <Pressable>
              <Text>Edit</Text>
            </Pressable>
          </View>
          <Text>{name ? name : "Tobias"}</Text>
        </View>

        <View>
          <View>
            <Text>Email:</Text>
            <Pressable>
              <Text>Edit</Text>
            </Pressable>
          </View>
          <Text>{email ? email : "tobias@gmail.com"}</Text>
        </View>

        <View>
          <View>
            <Text>Contraseña:</Text>
            <Pressable>
              <Text>Edit</Text>
            </Pressable>
          </View>
          <Text>{password ? password : "********"}</Text>
        </View>
      </View>
    );
  };

  const FooterBtns = () => {
    return (
      <View style={styles.footerBtns}>
        <Pressable
          style={[styles.button, styles.cancelButton]}
          onPress={() => cancel()}
        >
          <Text style={styles.cancelText}>Cancelar</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.confirmButton]}
          onPress={() => confirm()}
        >
          <Text style={styles.confirmText}>Confirmar</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.container}>
        <Text style={styles.heading}>Usuario</Text>

        {/* <Content /> */}
        <ContentBackUp />

        <FooterBtns />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  confirmText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  heading: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  listItem: {
    marginVertical: 6,
  },

  //------ to styles (modal btn)
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "100%",
    backgroundColor: "#3D9D5D",
  },

  footerBtns: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "30%",
    marginTop: 10,
  },
  cancelButton: {
    color: "#3D9D5D",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 4,
    borderColor: "#3D9D5D",
    borderWidth: 0.5,
  },
  cancelText: {
    color: "#3D9D5D",
    fontWeight: "bold",
    textAlign: "center",
  },
  confirmButton: {
    borderRadius: 10,
    marginHorizontal: 4,
  },
  //..........
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
});

export default EditProfileScreen;