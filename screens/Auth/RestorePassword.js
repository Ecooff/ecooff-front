import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import globalStyles from '../../styles/styles';
import authStyles from '../../styles/authStyles';
import { useNavigation } from '@react-navigation/native';

{/* COMPONENTS */ }
import AuthMenuComponent from '../../components/AuthMenuComponent';

// SERVICES
import { AuthService } from "../../services";

const RestorePassword = ({ route }) => {

    const token = route.params.token;

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loader, setLoader] = useState(false);
    let newPassword = {}

    const navigator = useNavigation();

    const updatePassword = () => {

        if (password === confirmPassword) {

            setLoader(true);

            newPassword = {
                token: token,
                pw: password,
                confirmPw: confirmPassword
            };

            AuthService.updatePassword(newPassword).then((response) => {
                if (response.message) {
                    createAlert(response.message);
                } else {
                    createAlertSuccess();
                }
            }).catch((err) => createAlert(err)).finally(() => setLoader(false));

        } else {
            createAlert('Por favor revisa las contraseñas ingresadas');
        }

    }

    const createAlert = (message) => {
        Alert.alert(
            "Las contraseñas no coinciden",
            message,
            [
                { text: "OK", onPress: () => {}}
            ]
        )
    };

    const createAlertSuccess = (message) => {
        Alert.alert(
            "Felicitaciones!!",
            'Tu contraseña se cambió con exito',
            [
                { text: "OK", onPress: () => navigator.navigate('Login')}
            ]
        )
    };

    return (
        <KeyboardAvoidingView
            style={[globalStyles.scrollContainer]}
            behavior="padding"
        >

            {/* BACK ARROW */}
            <AuthMenuComponent />

            {/* WELCOME MESSAGE */}
            <View
                style={authStyles.titleContainer}
            >

                <Text style={[authStyles.title, globalStyles.fontLarge]}>Nueva contraseña</Text>
                <Text style={[authStyles.subTitle, globalStyles.fontMedium]}>Creá una segura y recordala...</Text>

            </View>

            {/* INPUTS */}
            <View
                style={globalStyles.widthEightyFive}
            >

                <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>CONTRASEÑA</Text>
                <View style={globalStyles.inputRow}>
                    <AntDesign name="lock" style={globalStyles.icons} />
                    <TextInput
                        placeholder="Contraseña"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={globalStyles.input}
                        secureTextEntry
                    />
                </View>

                <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>REPETI LA CONTRASEÑA</Text>
                <View style={globalStyles.inputRow}>
                    <AntDesign name="lock" style={globalStyles.icons} />
                    <TextInput
                        placeholder="Confirmación de contraseña"
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        style={globalStyles.input}
                        secureTextEntry
                    />
                </View>

            </View>

            {/* BUTTON */}
            <View style={[styles.buttonSpace, authStyles.buttonContainer, globalStyles.widthEightyFive]}>

                <TouchableOpacity
                    onPress={() => updatePassword()}
                    disabled={loader || password == '' || confirmPassword == ''}
                    style={[globalStyles.button, globalStyles.primary, globalStyles.widthFluid]}
                >

                    {loader == false < 2 ? (
                        <View>
                            <ActivityIndicator size="small" color="#FFF" />
                        </View>
                    ) : (
                        <Text style={globalStyles.textWhite}>Cambiar contraseña</Text>
                    )}

                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    )
}

export default RestorePassword

const styles = StyleSheet.create({

    arrowSpace: {
        marginBottom: 50
    },

    buttonSpace: {
        marginTop: 80
    },


})
