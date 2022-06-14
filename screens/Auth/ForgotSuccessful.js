import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import globalStyles from '../../styles/styles';
import authStyles from '../../styles/authStyles';

// SERVICES
import { AuthService } from "../../services";

const ForgotSuccessful = () => {

    const [code1, setCode1] = useState("");
    const [code2, setCode2] = useState("");
    const [code3, setCode3] = useState("");
    const [code4, setCode4] = useState("");

    const inputUno = useRef(null);
    const inputDos = useRef(null);
    const inputTres = useRef(null);
    const inputCuatro = useRef(null);

    const [loader, setLoader] = useState(false);
    const navigator = useNavigation();

    const validateToken = () => {

        setLoader(true);
    
        let token = code1 + code2 + code3 + code4;

        AuthService.forgotPasswordValidateToken({ token: token }).then((response) => {
            if (response.message) {
                createAlert(response.message);
            } else {
                navigator.navigate('Restore', response)
            }
        }).catch((err) => createAlert(err)).finally(() => setLoader(false));

    }

    const createAlert = (message) =>
        Alert.alert(
            "Token invalido",
            'El token ingresado es incorrecto o expiro',
            [
                { text: "OK", onPress: () => { } }
            ]
        );

    return (
        <View
            style={[styles.fullView]}
        >

            <Image source={require('../../assets/icon.png')} style={styles.logo} />

            <Text style={[authStyles.title, globalStyles.textCenter, globalStyles.fontLarge]}>
                ¡Encontramos tu cuenta!
            </Text>

            <View style={[globalStyles.widthEightyFive, { marginTop: 20 }]}>

                <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
                    Código
                </Text>

                <View style={[styles.inputRow, globalStyles.justifyContentBetween]}>
                    <TextInput
                        value={code1}
                        maxLength={1}
                        ref={inputUno}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        onChangeText={(text) => {
                            setCode1(text);
                        }}
                        style={styles.codeInputs}
                        onSelectionChange={() => {
                            code1 && inputDos.current.focus();
                        }}
                    />
                    <TextInput
                        value={code2}
                        ref={inputDos}
                        maxLength={1}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        onChangeText={(text) => {
                            setCode2(text);
                        }}
                        style={styles.codeInputs}
                        onSelectionChange={() => {
                            code2 && inputTres.current.focus();
                        }}
                    />
                    <TextInput
                        value={code3}
                        ref={inputTres}
                        maxLength={1}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        onChangeText={(text) => {
                            setCode3(text);
                        }}
                        style={styles.codeInputs}
                        onSelectionChange={() => {
                            code3 && inputCuatro.current.focus();
                        }}
                    />
                    <TextInput
                        value={code4}
                        maxLength={1}
                        ref={inputCuatro}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        onChangeText={(text) => {
                            setCode4(text);
                        }}
                        style={styles.codeInputs}
                    />
                </View>


            <TouchableOpacity
                onPress={() => validateToken()}
                disabled={code1 == "" || code2 == "" || code3 == "" || code4 == ""}
                style={[
                    globalStyles.button,
                    globalStyles.primary,
                    globalStyles.widthFluid,
                    {marginBottom: 20}
                ]}
            >
                {loader == false < 2 ? (
                    <View>
                        <ActivityIndicator size="small" color="#FFF" />
                    </View>
                ) : (
                    <Text style={globalStyles.textWhite}>Validar</Text>
                )}
            </TouchableOpacity>

            </View>

            <Text style={[authStyles.subTitle, globalStyles.textCenter, globalStyles.fontMedium, globalStyles.widthEightyFive]}>
                Revisa tu correo donde vas a encontrar las instrucciones para cambiar tu contraseña. De no encontrarlo revisa la carpeta de "Spam o no deseado
            </Text>


        </View>
    )
}

export default ForgotSuccessful

const styles = StyleSheet.create({

    fullView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 150,
        height: 150,
        marginBottom: 30
    },

    inputRow: {
        flexDirection: "row",
        marginBottom: 25,
        alignItems: "center",
    },

    codeInputs: {
        backgroundColor: "#F9FAFB",
        paddingHorizontal: 15,
        paddingVertical: 15,
        textAlign: "center",
        width: "20%",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.15)",
        borderRadius: 3,
    },

})
