import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../styles/styles';

const SignupScreen = () => {

    const navigation = useNavigation();

    const navigateBack = () => {
        navigation.goBack();
    };

    return (
        <KeyboardAvoidingView
            style={globalStyles.scrollContainer}
            behavior="padding"
        >

            <View
                style={globalStyles.arrowContainer}
            >

                <TouchableOpacity
                    onPress={navigateBack}
                    style={globalStyles.backArrow}
                >
                    <MaterialIcons name="arrow-back-ios" style={globalStyles.arrow} />
                </TouchableOpacity>

            </View>

            <View
                style={globalStyles.titleContainer}
            >

                <Text style={[globalStyles.title, globalStyles.fontLarge]}>Registro</Text>
                <Text style={[globalStyles.subTitle, globalStyles.fontMedium]}>Crea tu cuenta</Text>

            </View>

        </KeyboardAvoidingView>
    )

}

export default SignupScreen

const styles = StyleSheet.create({

})
