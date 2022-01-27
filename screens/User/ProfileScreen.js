import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import globalStyles from '../../styles/styles';

{/* COMPONENTS */ }
import { MenuComponent } from '../../components';

const ProfileScreen = () => {

  const shadowStyleProducts = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  };

  const options = [
    {
      title: 'Direcciónes para delivery',
      icon: 'location-on',
      link: ''
    },
    {
      title: 'Método de pago',
      icon: 'payment',
      link: ''
    },
    {
      title: 'Detalles del perfíl',
      icon: 'account-edit-outline',
      link: ''
    },
    {
      title: 'Cerrar sesión',
      icon: 'logout',
      link: ''
    },
  ];

  return (

    <View
      style={styles.homeConteiner}
    >

      <MenuComponent />

      <View
        style={{ paddingHorizontal: 10 }}
      >

        <View
          style={[{ marginTop: 10, marginBottom: 20 }, globalStyles.row, globalStyles.alignItemsCenter]}
        >

          <View style={shadowStyleProducts}>
            <Image
              style={[styles.profileImg]}
              source={require('../../assets/avatar.png')} />
          </View>

          <View>

            <Text
              style={globalStyles.fontLarge}
            >
              Nombre Apellido
            </Text>

            <Text
              style={globalStyles.fontMedium}
            >
              tobias.matarasso@gmail.com
            </Text>

          </View>

        </View>

        {

          options.map((option, index) => {

            return (

              <TouchableOpacity
                // onPress={() => navigator.navigate(option.link)}
                style={[styles.listItem, globalStyles.row, globalStyles.alignItemsCenter]}
                key={index}
              >

                {index != 2 ?
                <MaterialIcons name={option.icon} size={24} style={styles.icons} /> :
                <MaterialCommunityIcons name={option.icon} size={24} style={styles.icons} />
                }

                <Text style={globalStyles.fontMedium}>{option.title}</Text>

              </TouchableOpacity>

            )

          })

        }

      </View>

    </View>

  );

};

export default ProfileScreen;

const styles = StyleSheet.create({

  homeConteiner: {
    paddingTop: 40,
    paddingHorizontal: 10
  },

  profileImg: {
    width: 80,
    height: 80,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
    marginRight: 20
  },

  listItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    marginHorizontal: -20
  },

  icons: {
    color: '#6CAA7A',
    marginRight: 15
  }

});
