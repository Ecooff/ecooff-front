import { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalSyles from "../../styles/styles"

const OrderDetail = () => {
  const navigator = useNavigation();

  const Content = () => {
    return (
      <View>
        <View>
          <Text style={[globalSyles.fontBold, globalSyles.fontMedium]}>Detalles</Text>
          <View style={styles.listItem}>
            <Text>Tiempo estimado de entrega</Text>
            <Text style={globalSyles.fontXSmall}>90 MINS</Text>
          </View>
          <View style={styles.listItem}>
            <Text>Direccón</Text>
            <Text style={globalSyles.fontXSmall}>Libertador 1100</Text>
          </View>
          <View style={[styles.listItem, styles.lastListItem]}>
            <Text>Precio total</Text>
            <Text style={globalSyles.fontXSmall}>$850</Text>
          </View>
        </View>

        <View>
          <Text style={[globalSyles.fontBold, globalSyles.fontMedium]}>Descripción</Text>
          <Text style={globalSyles.fontXSmall}>1x Pan lactal</Text>
          <Text style={globalSyles.fontXSmall}>1x Paleta Loreal</Text>
          <Text style={globalSyles.fontXSmall}>1x Botella de Agua</Text>
        </View>
      </View>
    );
  };

  const cancel = () => {
    navigator.navigate("OrderHistory");
  };

  const confirm = () => {
    navigator.navigate("Profile");
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
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.heading}>Pedido --/--/----</Text>

          <Content />

          <FooterBtns />
        </View>
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
  modalView: {
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
  modalText: {
    fontSize: 12,
    marginBottom: 40,
  },
  listItem: {
    // flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, .2)",
    marginHorizontal: -20,
    // flexDirection: "column",
    // justifyContent: "space-between",
  },
  lastListItem: {
    borderBottomWidth: 1,
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
});

export default OrderDetail;
