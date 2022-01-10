import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../styles/styles';

const ForgotPasswordScreen = () => {

    const [email, setEmail] = useState('');

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

                <Text style={[globalStyles.title, globalStyles.fontLarge]}>¿Olvidate tu contraseña?</Text>
                <Text style={[globalStyles.subTitle, globalStyles.fontMedium]}>Ingresa tu email para recuperarla</Text>

            </View>

            <View
                style={globalStyles.inputContainer}
            >

                <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>EMAIL / NOMBRE DE USUARIO</Text>
                <View style={globalStyles.inputRow}>
                    <AntDesign name="mail" style={globalStyles.icons} />
                    <TextInput
                        placeholder=""
                        value={email}
                        keyboardType="email-address"
                        icon="mail"
                        onChangeText={text => setEmail(text)}
                        style={globalStyles.input}
                    />
                </View>

            </View>

            <View style={[styles.buttonContainer, globalStyles.widthEightyFive]}>

                <TouchableOpacity
                    // onPress={handleLogin}
                    style={[globalStyles.button, globalStyles.primary, globalStyles.widthFluid]}
                >
                    <Text style={globalStyles.textWhite}>Iniciar sesión</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>

    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    }

})
