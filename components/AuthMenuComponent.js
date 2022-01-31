import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../styles/styles';
import authStyles from '../styles/authStyles';

export class AuthMenuComponent extends Component {
    
    render() {
        return (
            <View
                style={[styles.arrowSpace, globalStyles.arrowContainer, globalStyles.row, globalStyles.alignItemsCenter]}
            >

                <TouchableOpacity
                    onPress={() => useNavigation().goBack()}
                    style={globalStyles.backArrow}
                >
                    <MaterialIcons name="arrow-back-ios" style={globalStyles.arrow} />
                </TouchableOpacity>

                <Image
                    style={[authStyles.logoInline, globalStyles.menuLogo]}
                    source={require('../assets/icon-long.png')} />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    arrowSpace: {
        marginBottom: 28
    }

})