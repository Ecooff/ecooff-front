import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import globalStyles from '../../styles/styles';
import authStyles from '../../styles/authStyles';
import { useNavigation } from '@react-navigation/native';

{/* COMPONENTS */ }
import AuthMenuComponent from "../../components/AuthMenuComponent";

// SERVICES
import { AuthService } from "../../services";

const ForgotPasswordScreen = () => {

    const [email, setEmail] = useState('');
    const [loading, setLoader] = useState(false);
    const navigator = useNavigation();

    const validateUser = () => {

        setLoader(true);

        AuthService.forgotPassword({ email: email }).then((response) => {
            if (response.message) {
                createAlert(response.message);
            } else {
                navigator.navigate('ForgotSuccess')
            }

        }).catch((err) => createAlert(err)).finally(() => setLoader(false));

    }

    const createAlert = (message) =>
        Alert.alert(
            "No encontramos tu cuenta",
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
                        autoCapitalize='none'
                        onChangeText={text => setEmail(text.toLowerCase())}
                        style={globalStyles.input}
                    />
                </View>

            </View>

            <View style={[styles.buttonContainer, authStyles.buttonContainer, globalStyles.widthEightyFive]}>

                <TouchableOpacity
                    onPress={() => validateUser()}
                    disabled={loading}
                    style={[globalStyles.button, globalStyles.primary, globalStyles.widthFluid]}
                >
                    {loading ? (
                        <View>
                            <ActivityIndicator size="small" color="#FFF" />
                        </View>
                    ) : (
                        <Text style={globalStyles.textWhite}>Enviar código</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigator.navigate('Register')}
                    style={styles.headerContainer}
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
        marginTop: 20
    }

})
