import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../../styles/styles';
import authStyles from '../../styles/authStyles';
import { useNavigation } from '@react-navigation/native';

{/* COMPONENTS */}
import { AuthMenuComponent } from '../../components';


const RestorePassword = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigator = useNavigation();

    const setNewPassword = () => {
        Alert.alert(
            "Tu contrseña fué cambiada exitosamente",
            'Ahora podes iniciar sesión con tus nuevos datos de acceso actualizados.',
            [
                { text: "Iniciar sesión", onPress: () => { navigator.navigate('Login') } }
            ]
        )};

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
            <View style={ [styles.buttonSpace, authStyles.buttonContainer, globalStyles.widthEightyFive] }>

                <TouchableOpacity
                    onPress={ () => setNewPassword() }
                    style={[globalStyles.button, globalStyles.primary, globalStyles.widthFluid]}
                >
                    <Text style={globalStyles.textWhite}>Establecer</Text>
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
