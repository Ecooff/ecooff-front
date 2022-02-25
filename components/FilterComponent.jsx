import { useState } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import globalSyles from "../styles/styles";
const FilterComponent = ({ visible }) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const [minPrice, onChangeMinPrice] = useState(0);
  const [maxPrice, onChangeMaxPrice] = useState(0);

  const [filter1, setFilter1] = useState(false);
  const [filter2, setFilter2] = useState(false);
  const [filter3, setFilter3] = useState(false);
  const [filter4, setFilter4] = useState(false);
  const [filter5, setFilter5] = useState(false);

  const navigator = useNavigation();

  console.log("component");

  const applyFilter = () => {
    navigator.navigate("Home");
  };

  const selectFilter = () => {
    switch (key) {
      case value:
        break;

      default:
        break;
    }
  };

  const OrderBy = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Ordenar por</Text>
        <View style={styles.btnsContainer}>
          <Pressable
            style={filter1 ? styles.button : styles.unselectedButton}
            onPress={() => setFilter1(!filter1)}
          >
            <Text style={filter1 ? styles.buttonText : styles.unselectedText}>
              Popularidad
            </Text>
          </Pressable>
          <Pressable
            style={filter2 ? styles.button : styles.unselectedButton}
            onPress={() => setFilter2(!filter2)}
          >
            <Text style={filter2 ? styles.buttonText : styles.unselectedText}>
              Fecha de vencimiento
            </Text>
          </Pressable>
          <Pressable
            style={filter3 ? styles.button : styles.unselectedButton}
            onPress={() => setFilter3(!filter3)}
          >
            <Text style={filter3 ? styles.buttonText : styles.unselectedText}>
              High Price
            </Text>
          </Pressable>
          <Pressable
            style={filter4 ? styles.button : styles.unselectedButton}
            onPress={() => setFilter4(!filter4)}
          >
            <Text style={filter4 ? styles.buttonText : styles.unselectedText}>
              Low Price
            </Text>
          </Pressable>
          <Pressable
            style={filter5 ? styles.button : styles.unselectedButton}
            onPress={() => setFilter5(!filter5)}
          >
            <Text style={filter5 ? styles.buttonText : styles.unselectedText}>
              Productor
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  const RangePrice = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Rango de precio</Text>
        <View style={styles.inputContainer}>
          <View style={{ width: "45%" }}>
            <TextInput
              style={styles.input}
              onChangeText={() => onChangeMinPrice()}
              value={minPrice}
              placeholder="Precio mínimo"
              keyboardType="numeric"
            />
          </View>
          <View style={{ width: "45%" }}>
            <TextInput
              style={styles.input}
              onChangeText={() => onChangeMaxPrice()}
              value={maxPrice}
              placeholder="Precio máximo"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.centeredView}>
      {/* <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setModalVisible(!modalVisible);
    }}
    > */}
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.heading}>Filtrar</Text>
          <Entypo
            name="cross"
            size={24}
            color="black"
            onPress={() => navigator.navigate("Home")}
          />
        </View>

        <OrderBy />

        <RangePrice />

        <View>
          <Pressable
            style={styles.confirmFilterBtn}
            onPress={() => applyFilter()}
          >
            <Text style={styles.confirmText}>Aplicar filtro</Text>
          </Pressable>
        </View>
      </View>
      {/* </Modal> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  btnsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "105%",
    marginHorizontal: -5,
  },
  mainContainer: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    // paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 5,
  },
  listItem: {
    marginVertical: 6,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 2,
    backgroundColor: "#3D9D5D",
    margin: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  confirmFilterBtn: {
    borderRadius: 8,
    padding: 12,
    elevation: 2,
    width: "100%",
    backgroundColor: "#3D9D5D",
    alignSelf: "center",
  },
  confirmText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },
  unselectedButton: {
    color: "#3D9D5D",
    borderRadius: 8,
    paddingVertical: 7.2,
    paddingHorizontal: 11.2,
    borderWidth: 0.8,
    margin: 5,
  },
  unselectedText: {
    textAlign: "center",
  },
  input: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BABABA",
    marginVertical: 5,
    textAlign: "left",
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default FilterComponent;
