import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import globalStyles from "../styles/styles";
import { commonFunctions } from "../utils";
import { MaterialIcons } from '@expo/vector-icons';

const OrderListComponent = ({
  order
}) => {

  return (

    <View style={styles.mainContainer}>

      <View>
        <View style={styles.leftTextContainer}>
          <Text style={styles.leftText}>{order.date}</Text>
          <Text style={[styles.leftText, { color: statusColor }]}>
            {order.status}
          </Text>
        </View>
        <View style={styles.iconsContainer}>
          <View style={styles.icons}>
            <AntDesign name="edit" size={18} color={statusColor} />

          </View>
          <View style={styles.icons}>
            <Ionicons name="trash-outline" size={18} color={statusColor} />
          </View>
        </View>
      </View>

      <View style={styles.rightSide}>
        <Text style={styles.priceText}>${order.totalPrice}</Text>
        <Pressable
          onPress={() => getOrderDetail(order._id)}
        >
          <Text style={styles.editText}>Ver detalle</Text>
        </Pressable>
      </View>
    </View>

  );

};

export default OrderListComponent;

const styles = StyleSheet.create({

});
