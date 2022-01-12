import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../../styles/styles';
import { commonFunctions } from '../../utils';

const ForgotPasswordScreen = () => {
    
    const [email, setEmail] = useState('');

    const createAlert = () =>
    Alert.alert(
      "No encontrammos tu cuenta",
      'El mail que ingresaste parece no estar registrado. Revisrá que esté bien escribo o probá con otro diferente',
      [
        { text: "OK", onPress: () => {} }
      ]
    );

    return (

        <KeyboardAvoidingView
            style={globalStyles.scrollContainer}
            behavior="padding"
        >

            {/* BACK ARROW */}
            <View
                style={ [globalStyles.arrowContainer, styles.arrowSpace] }
            >

                <TouchableOpacity
                    onPress={ commonFunctions.navigateBack() }
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

                <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>EMAIL</Text>
                <View style={globalStyles.inputRow}>
                    <AntDesign name="mail" style={globalStyles.icons} />
                    <TextInput
                        placeholder="Email"
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
                    onPress={ commonFunctions.navigateToPage('Home') }
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
