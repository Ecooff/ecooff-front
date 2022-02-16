import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import CheckoutContent from './CheckoutContent';

const Checkout = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [orderNum, setOrderNum] = useState(0); //it could be in CheckoutContent
  const [total, setTotal] = useState(0); //it could be in CheckoutContent
  const navigator = useNavigation();

  const confirmOrder = () => {
      setModalVisible(!modalVisible);
      navigator.navigate("Orders");
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeaderText}>Compra Nº {!orderNum ? "..." : orderNum}</Text>

            <CheckoutContent />
            
            <Text style={styles.modalFooterText}>Total ${!total ? 850 : total}</Text>
            <View style={styles.footerModal}>
              <Pressable
                style={[styles.button, styles.cancelModelButton]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.cancelModelText}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.confirmModelButton]}
                onPress={() => confirmOrder()}>
                <Text style={styles.textStyle}>Confirmar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button]} onPress={() => setModalVisible(true)}>
        <View style={styles.buttonContainer}>
        <Text style={styles.textStyle}>Confirmar pago</Text>
          <Text style={styles.textStyle}>$850</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '100%',
    backgroundColor: '#3D9D5D',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalHeaderText: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  modalFooterText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  buttonContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 4,
  },
  footerModal: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '30%',
      marginTop: 10,
  },
  cancelModelButton: {
    color: '#3D9D5D',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 4,
    borderColor: '#3D9D5D',
    borderWidth: 0.5
  },
  cancelModelText: {
    color: '#3D9D5D',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  confirmModelButton: {
    borderRadius: 10,
    marginHorizontal: 4
  }
});

export default Checkout;