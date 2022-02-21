import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

const RadioButton = ({select, style, innerStyle}) => {
  
    const [selected, setSelected] = useState(select);

    const selectFn = () => {
        selected ? setSelected(false) : setSelected(true);
    }

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
