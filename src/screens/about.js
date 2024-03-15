import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function About() {
    const handleTermsPress = () => {
        // Adicione lógica para lidar com o pressionamento do botão "Termos de Uso"
        console.log("Botão 'Termos de Uso' pressionado");
    };

    const handleContactPress = () => {
        // Adicione lógica para lidar com o pressionamento do botão "Fale Conosco"
        console.log("Botão 'Fale Conosco' pressionado");
    };

    const handlePrivacyPress = () => {
        // Adicione lógica para lidar com o pressionamento do botão "Privacidade"
        console.log("Botão 'Privacidade' pressionado");
    };

    return (
        <View style={styles.container}>
            <Text>Página do usuario</Text>
            <Pressable style={styles.button} onPress={handleTermsPress}>
                <Text style={styles.buttonText}>Termos de Uso</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleContactPress}>
                <Text style={styles.buttonText}>Fale Conosco</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handlePrivacyPress}>
                <Text style={styles.buttonText}>Privacidade</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 20,
        marginTop: 10,
        width: 200,
        backgroundColor: '#68423d',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
