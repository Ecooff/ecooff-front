import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import CheckoutContent from './CheckoutContent';

const Checkout = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            <CheckoutContent />
            <View style={styles.footerModal}>
            <Pressable
              style={[styles.button, styles.cancelModelButton]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.cancelModelText}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.confirmModelButton]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button]} onPress={() => setModalVisible(true)}>
        <View style={styles.buttonContainer}>
        <Text style={styles.textStyle}>Confirmar compra</Text>
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 4,
  },
  footerModal: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '30%'
  },
  cancelModelButton: {
    // justifyContent: 'space-around',
    color: '#3D9D5D',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 4
//     border: 0.7px solid #3D9D5D;
// box-sizing: border-box;
// border-radius: 8px;
  },
  cancelModelText: {
    color: '#3D9D5D',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  confirmModelButton: {
    // justifyContent: 'space-around',
    borderRadius: 10,
    marginHorizontal: 4
  }
});

export default Checkout;