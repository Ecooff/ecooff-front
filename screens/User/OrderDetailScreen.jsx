import { useEffect, useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalSyles from "../../styles/styles";

const OrderDetailScreen = ({ route }) => {
  const { date, totalPrice, deliveryTime, deliveryAddress, description } =
    route.params.order;
  // const [order, setOrder] = useState({});
  const navigator = useNavigation();

  // useEffect(() => {
  //   setOrder()
  // }, [])

  const Content = () => {
    return (
      <View>
        <View>
          <Text style={[globalSyles.fontBold, globalSyles.fontMedium]}>
            Detalles
          </Text>
          <View style={styles.listItem}>
            <Text>Tiempo estimado de entrega</Text>
            <Text style={globalSyles.fontXSmall}>{deliveryTime}</Text>
          </View>
          <View style={styles.listItem}>
            <Text>Dirección</Text>
            <Text style={globalSyles.fontXSmall}>{deliveryAddress}</Text>
          </View>
          <View style={styles.listItem}>
            <Text>Precio total</Text>
            <Text style={globalSyles.fontXSmall}>${totalPrice}</Text>
          </View>
        </View>

        <View>
          <Text style={[globalSyles.fontBold, globalSyles.fontMedium]}>
            Descripción
          </Text>
          {description.map((product, i) => {
            return (
              <Text key={i} style={globalSyles.fontXSmall}>
                {product.amount}x {product.title}
              </Text>
            );
          })}
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
      <View style={styles.container}>
        <Text style={styles.heading}>Pedido {date}</Text>

        <Content />

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
});

export default OrderDetailScreen;
