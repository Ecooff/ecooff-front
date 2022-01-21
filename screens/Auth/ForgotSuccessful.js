import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import globalStyles from '../../styles/styles';
import authStyles from '../../styles/authStyles';

{/* COMPONENTS */}
import { AuthMenuComponent } from '../../components';

const ForgotSuccessful = () => {
    return (
        <View
            style={ [styles.fullView] }
        >

            <Image source={require('../../assets/icon.png')} style={styles.logo} />

            <Text style={[authStyles.title, globalStyles.textCenter, globalStyles.fontLarge]}>
                ¡Encontramos tu cuenta!
            </Text>

            <Text style={[authStyles.subTitle, globalStyles.textCenter, globalStyles.fontMedium,  globalStyles.widthEightyFive]}>
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

})
