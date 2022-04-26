import { useEffect, useState } from "react";
import { TextInput, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalSyles from "../../styles/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { Feather } from '@expo/vector-icons';
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const EditProfileScreen = () => {
  const user = useSelector(selectUser);
  const navigator = useNavigation();

    // const [username, setUsername] = useState(`${user.firstName}, ${user.lastName}`);
    const [firsname, onChangeFirstname] = useState(user.firstName);
    const [lastname, onChangeLastname] = useState(user.lastName);
    const [email, onChangeEmail] = useState(user.email);
    const [password, onChangePassword] = useState("********");

  // useEffect(() => {
  //   setUser()
  // }, [])

  const onHandleEdit = () => {
    onChan
  }

  const cancel = () => {
    navigator.navigate("Profile");
  };

  const confirm = () => {
    navigator.navigate("Profile");
  };

  const Content = () => {
    return (
      <View>
        <View style={styles.textContainer}>
          <Text style={globalSyles.inputLabel}>NOMBRE: </Text>
          <View style={{flexDirection: 'row'}}>
          <AntDesign name="user" style={globalSyles.icons} />
          <TextInput
          style={{fontWeight: '600', width: '100%', marginLeft: 10, color: '#888888'}}
            // style={styles.input}
            onChangeText={() => onChangeFirstname()}
            value={firsname}
        />
        </View>
        
        </View>

        <View style={styles.textContainer}>
          <Text style={globalSyles.inputLabel}>APELLIDO: </Text>
          <View style={{flexDirection: 'row'}}>
          <AntDesign name="user" style={globalSyles.icons} />
          <TextInput
          style={{fontWeight: '600', width: '100%', marginLeft: 10, color: '#888888'}}
            // style={styles.input}
            onChangeText={() => onChangeLastname()}
            value={lastname}
        />
        </View>
        
        </View>

        <View style={styles.textContainer}>
          <Text style={globalSyles.inputLabel}>EMAIL: </Text>
          <View style={{flexDirection: 'row'}}>
          <AntDesign name="mail" style={globalSyles.icons} />
          <TextInput
          style={{fontWeight: '600', width: '100%', marginLeft: 10, color: '#888888'}}
            // style={styles.input}
            onChangeText={() => onChangeEmail()}
            value={email}
        />
        </View>
        
        </View>

        <View style={styles.textContainer}>
          <Text style={globalSyles.inputLabel}>CONTRASEÑIA: </Text>
          <View style={{flexDirection: 'row'}}>
          <AntDesign name="lock" style={globalSyles.icons} />
          <TextInput
          style={{fontWeight: '600', width: '100%', marginLeft: 10,color: '#888888'}}
            // style={styles.input}
            onChangeText={() => onChangePassword()}
            value={password}
        />
         </View>
        
        </View>
      </View>
    );
  };

  // const ContentBackUp = () => {
  //   return (
  //     <View>
  //       <View>
  //         <View>
  //           <Text>Nombre:</Text>
  //           <Pressable>
  //             <Text>Edit</Text>
  //           </Pressable>
  //         </View>
  //         <Text>{name ? name : "Nombre"}</Text>
  //       </View>

  //       <View>
  //         <View>
  //           <Text>Email:</Text>
  //           <Pressable>
  //             <Text>Edit</Text>
  //           </Pressable>
  //         </View>
  //         <Text>{email ? email : "Email"}</Text>
  //       </View>

  //       <View>
  //         <View>
  //           <Text>Contraseña:</Text>
  //           <Pressable>
  //             <Text>Edit</Text>
  //           </Pressable>
  //         </View>
  //         <Text>{password ? password : "********"}</Text>
  //       </View>
  //     </View>
  //   );
  // };

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

        <Content />
        {/* <ContentBackUp /> */}

        <FooterBtns />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: 20,
    padding: 30,
    width: '90%'
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
    flexDirection: "row",
    width: "30%",
    marginRight: '25%',
    marginTop: 10,
    alignSelf: 'flex-end'
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
    // height: 40,
    // margin: 12,
    // padding: 10,
  },
  textContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 8,
    borderRadius: 4
  }
});

export default EditProfileScreen;
