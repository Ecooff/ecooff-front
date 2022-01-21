import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import globalStyles from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export class MenuComponent extends Component {
    render() {
        return (
            <View
                style={[styles.mainMenu, globalStyles.row, globalStyles.alignItemsCenter]}
            >

                <Image
                    style={styles.menuLogo}
                    source={require('../assets/icon-long.png')} />

                <View
                    style={[globalStyles.row, globalStyles.alignItemsCenter]}
                >
                    <Ionicons name="ios-cart-outline" size={30} color="gray" />
                    <Feather name="bell" size={24} style={ styles.icon } color="gray" />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    mainMenu: {
        marginTop: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },

    menuLogo: {
        width: 100,
        height: 60
    },

    icon: {
        marginLeft: 15
    }

})