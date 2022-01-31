import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../../styles/styles';
import authStyles from '../../styles/authStyles';
import { useNavigation } from '@react-navigation/native';

{/* COMPONENTS */}
import { AuthMenuComponent } from '../../components';

const ForgotPasswordScreen = () => {

    const [email, setEmail] = useState('');
    const navigator = useNavigation();

    const createAlert = () =>
        Alert.alert(
            "No encontrammos tu cuenta",
            'El mail que ingresaste parece no estar registrado. Revisrá que esté bien escribo o probá con otro diferente',
            [
                { text: "OK", onPress: () => { } }
            ]
        );

    return (

        <KeyboardAvoidingView
            style={[globalStyles.scrollContainer]}
            behavior="padding"
        >

            {/* BACK ARROW */}
            <AuthMenuComponent />

            <View
                style={authStyles.titleContainer}
            >

                <Text style={[authStyles.title, globalStyles.fontLarge]}>¿Olvidate tu contraseña?</Text>
                <Text style={[authStyles.subTitle, globalStyles.fontMedium]}>Ingresa tu email para recuperarla</Text>

            </View>

            <View
                style={globalStyles.widthEightyFive}
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

            <View style={ [ styles.buttonContainer, authStyles.buttonContainer, globalStyles.widthEightyFive] }>

                <TouchableOpacity
                    onPress={ () => navigator.navigate('ForgotSuccess') }
                    style={ [globalStyles.button, globalStyles.primary, globalStyles.widthFluid] }
                >
                    <Text style={ globalStyles.textWhite }>Enviar código</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => navigator.navigate('Register')}
                    style={ styles.headerContainer }
                >

                    <Text style={[styles.headerTitle, globalStyles.fontSmall]}>
                        ¿No tenés cuenta?
                        <Text style={globalStyles.fontBold}> Registrate</Text>
                    </Text>

                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>

    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({

    arrowSpace: {
        marginBottom: 30
    },

    buttonContainer: {
        marginTop: 150
    },

    headerContainer: {
        marginTop:20
    }

})
