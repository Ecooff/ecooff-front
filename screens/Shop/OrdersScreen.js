import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MenuComponent } from '../../components';

const OrdersScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView style={styles.menuContainer}>
        <MenuComponent />
        <Text>
          Con tu compra
        </Text>

        {/* <MyBasket /> */}
        {/* <View style={{justifyContent: 'space-between'}}>
            <Text style={[authStyles.title, globalStyles.fontLarge]}>
              Total
            </Text>
            <Text style={[authStyles.title, globalStyles.fontLarge]}>$850</Text>
        </View>
        <View>
          <Text>
            <Text style={[authStyles.title, globalStyles.fontLarge]}>
              Delivery
            </Text>
            <Text style={[authStyles.title, globalStyles.fontLarge]}>$200</Text>
          </Text>
          <Text>
            <Text style={[authStyles.title, globalStyles.fontLarge]}>
              Productos
            </Text>
            <Text style={[authStyles.title, globalStyles.fontLarge]}>$650</Text>
          </Text>
        </View> */}
        {/* <Checkout /> */}

        {/* <View style={globalStyles.widthHalf}>
          <View
            style={[
              styles.bannerLargeMargin,
              globalStyles.row,
              globalStyles.alignItemsCenter,
            ]}
          >
            <Text style={globalStyles.sellIcons}>-</Text>
            <Text style={{ marginHorizontal: 15 }}>1</Text>
            <Text style={globalStyles.sellIcons}>+</Text>
          </View>
        </View> */}
      </ScrollView>
      {/* <FooterComponent /> */}
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
