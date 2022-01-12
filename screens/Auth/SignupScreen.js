import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../../styles/styles';
import authStyles from '../../styles/authStyles';
import { commonFunctions } from '../../utils';

const SignupScreen = () => {

    const [userName, setUserName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetePassword, setRepetePassword] = useState('');

    const navigation = useNavigation();

    const navigateToPage = page => {
        navigation.navigate(page);
    };

    return (

        <ScrollView
            style={[globalStyles.widthFluid, styles.scrollViewContains]}
        >

            <KeyboardAvoidingView
                style={[globalStyles.scrollContainer, styles.scrollContainer]}
                behavior="padding"
                keyboardVerticalOffset={100}
            >

                {/* BACK ARROW */}
                <View
                    style={[globalStyles.arrowContainer, styles.arrowSpace]}
                >

                    <TouchableOpacity
                        onPress={commonFunctions.navigateBack()}
                        style={globalStyles.backArrow}
                    >
                        <MaterialIcons name="arrow-back-ios" style={globalStyles.arrow} />
                    </TouchableOpacity>

                </View>

                {/* WELCOME MESSAGE */}
                <View
                    style={authStyles.titleContainer}
                >

                    <Text style={[authStyles.title, globalStyles.fontLarge]}>Registro</Text>
                    <Text style={[authStyles.subTitle, globalStyles.fontMedium]}>Crea tu cuenta</Text>

                </View>

                {/* INPUTS */}
                <View
                    style={globalStyles.inputContainer}
                >
                    <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>NOMBRE Y APELLIDO</Text>

                    <View
                        style={styles.inputColsContainter}
                    >

                        <View style={styles.inputCols}>
                            <AntDesign name="user" style={globalStyles.icons} />
                            <TextInput
                                placeholder="Nombre"
                                value={userName}
                                keyboardType="email-address"
                                icon="mail"
                                onChangeText={text => setUserName(text)}
                                style={globalStyles.input}
                            />
                        </View>

                        <View style={styles.inputCols}>
                            <TextInput
                                placeholder="Apellido"
                                value={lastName}
                                keyboardType="email-address"
                                icon="mail"
                                onChangeText={text => setLastName(text)}
                                style={globalStyles.input}
                            />
                        </View>

                    </View>

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

                    <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>REPETIR CONTRASEÑA</Text>
                    <View style={globalStyles.inputRow}>
                        <AntDesign name="lock" style={globalStyles.icons} />
                        <TextInput
                            placeholder="Repetí tu contraseña"
                            value={repetePassword}
                            onChangeText={text => setRepetePassword(text)}
                            style={globalStyles.input}
                            secureTextEntry
                        />
                    </View>

                </View>

                {/* BUTTONS */}
                <View style={[authStyles.buttonContainer, globalStyles.widthEightyFive]}>

                    <TouchableOpacity
                        // onPress={ handleLogin }
                        style={[globalStyles.button, globalStyles.primary, globalStyles.widthFluid]}
                    >
                        <Text style={globalStyles.textWhite}>Resgistrarme</Text>
                    </TouchableOpacity>

                </View>

                {/* FINAL LABEL */}
                <TouchableOpacity
                    onPress={() => navigateToPage('Login')}
                    style={[styles.finalLabel, authStyles.registerContainter]}
                >

                    <Text style={[authStyles.headerTitle, globalStyles.fontSmall]}>
                        ¿Ya tenés cuenta?
                        <Text style={globalStyles.fontBold}> Inicia sesión</Text>
                    </Text>

                </TouchableOpacity>

            </KeyboardAvoidingView>

        </ScrollView>

    )

}

export default SignupScreen

const styles = StyleSheet.create({

    scrollContainer: {
        flex: 1,
        flexDirection: 'column',
    },

    scrollViewContains: {
    },

    arrowSpace: {
        marginBottom: 40
    },

    inputColsContainter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputCols: {
        width: '48%',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 3,
        marginBottom: 25,
        alignItems: 'center'
    },

    finalLabel: {
        marginBottom: 40
    }

})

