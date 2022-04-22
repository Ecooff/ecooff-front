import { useState } from "react";
import { Pressable, StyleSheet, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import AdressService from "../services/AdressService";

const RadioButton = ({select, style, innerStyle, userAdresses}) => {
  
    const [selected, setSelected] = useState(select);

    console.log('ANNN', userAdresses)

    

    function adressID () {
        let id = userAdresses.find(adress => adress.id === adress.id )
        return id
    }

    // const addressId = userAdresses.filter(address => address.selected === true).id;
    // const addressId = userAdresses.filter(address => address.id === select)

    const selectFn = () => {
        selected ? setSelected(false) : setSelected(true);
        AdressService.changeDefaultAdress(adressID()).then(response => console.log('DATAA', response.data)).catch(error => console.log('ERROR', error.response.data.message))
    }
    // const handleChangeDefaultAdress = () => {
      
    //   }

  return (
    
      <Pressable style={[styles.selectedFalse, style]} onPress={selectFn}>
        {
          selected ?
            <View style={[styles.selectedTrue, innerStyle]}/>
            : null
        }
      </Pressable>
  );
}

export default RadioButton;

const styles = StyleSheet.create({
    selectedFalse: {
        height: 20,
        width: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#3D9D5D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedTrue: {
        height: 11,
        width: 11,
        borderRadius: 6,
        backgroundColor: '#3D9D5D',
    }
})
