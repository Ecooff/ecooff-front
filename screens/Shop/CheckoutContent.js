import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CheckoutContent = () => {
  return (
    <View style={styles.content}>
      <Text><Text style={styles.baseText}>Cantindad de productos: </Text><Text>3</Text></Text>
      <Text><Text style={styles.baseText}>Dirección: </Text><Text>Libertador 1100</Text></Text>
      <Text><Text style={styles.baseText}>Entrega estimada: </Text><Text>90 mins</Text></Text>
      <Text><Text style={styles.baseText}>Método de pago: </Text><Text>Effectivo</Text></Text>  
    </View>
  );
};

export default CheckoutContent;

const styles = StyleSheet.create({
  content: {
    margin: 15,
  },
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});