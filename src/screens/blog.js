import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function InfoPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre Madeiras</Text>
            <Text style={styles.description}>
                Aqui temos informções sobre a madeira de carvalho e madeira fina.
            </Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('info1')}>
                <Text style={styles.buttonText}>Madeira de carvalho</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('info2')}>
                <Text style={styles.buttonText}>Sobre Ipê</Text>
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#68423d',
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
