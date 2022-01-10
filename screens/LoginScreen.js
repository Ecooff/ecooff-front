import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../styles/styles'

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate("Home");
    };

    const navigateToPage = page => {
        navigation.navigate(page);
    };

    const navigateBack = () => {
        navigation.goBack();
    };

    return (
        <KeyboardAvoidingView
            style={ globalStyles.scrollContainer }
            behavior="padding"
        >

            <View
                style={ globalStyles.arrowContainer }
            >

                <TouchableOpacity
                    onPress={ navigateBack }
                    style={ globalStyles.backArrow }
                >
                    <MaterialIcons name="arrow-back-ios" style={ globalStyles.arrow } />
                </TouchableOpacity>

            </View>

            <View
                style={ globalStyles.titleContainer}
            >

                <Text style={[globalStyles.title, globalStyles.fontLarge]}>¡Bienvenidx de vuelta!</Text>
                <Text style={[globalStyles.subTitle, globalStyles.fontMedium]}>Accede a tu cuenta</Text>

            </View>

            <View
                style={ globalStyles.inputContainer }
            >

                <Text style={ [globalStyles.inputLabel, globalStyles.fontSmall] }>EMAIL / NOMBRE DE USUARIO</Text>
                <View style={ globalStyles.inputRow }>
                    <AntDesign name="user" style={ globalStyles.icons } />
                    <TextInput
                        placeholder=""
                        value={email}
                        keyboardType="email-address"
                        icon="mail"
                        onChangeText={text => setEmail(text)}
                        style={globalStyles.input}
                    />
                </View>

                <Text style={ [globalStyles.inputLabel, globalStyles.fontSmall] }>CONTRASEÑA</Text>
                <View style={ globalStyles.inputRow }>
                    <AntDesign name="lock" style={ globalStyles.icons } />
                    <TextInput
                        placeholder=""
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={globalStyles.input}
                        secureTextEntry
                    />
                </View>

            </View>

            <TouchableOpacity
                onPress={() => navigateToPage('Forgot')}
                style={ styles.forgotContainer }
            >
                <Text style={ [styles.headerTitle, globalStyles.fontSmall, globalStyles.fontBold] }>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <View style={ [styles.buttonContainer, globalStyles.widthEightyFive ] }>

                <TouchableOpacity
                    onPress={ handleLogin }
                    style={ [globalStyles.button, globalStyles.primary, globalStyles.widthFluid] }
                >
                    <Text style={ globalStyles.textWhite }>Iniciar sesión</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity
                onPress={() => navigateToPage('Signup')}
                style={ styles.registerContainter }
            >

                <Text style={ [styles.headerTitle, globalStyles.fontSmall] }>
                    ¿No tenés cuenta?
                    <Text style={ globalStyles.fontBold }> Registrate</Text>
                </Text>

            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    forgotContainer: {
        width: '80%',
        marginTop: 15,
        marginBottom: 30,
    },

    headerTitle: {
        fontSize: 15,
        textAlign: 'right',
        color: '#121515'
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },

})
