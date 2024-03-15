import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sobre a Madeira de Carvalho</Text>
            <Image
                source={require('../assets/img/carvalho.jpg')} // Substitua pelo caminho da sua imagem de carvalho
                style={styles.image}
            />
            <Text style={styles.description}>
            Assim como toda madeira, o Carvalho oferece diversas vantagens para sua casa. Seja no piso, nas paredes ou no teto, ele garante isolamento térmico ao ambiente, mantendo a temperatura equilibrada e agradável em todas as épocas do ano. Ele também proporciona maior isolamento acústico, diminuindo ecos, ruídos e barulhos em geral. 

            O piso de madeira também é indicado para pessoas alérgicas. Isso porque ele possui características hipoalergênicas, evitando o acúmulo de poeiras, ácaros, pelos e outros elementos que podem provocar crises alérgicas e de rinite. 
            Também podemos destacar a alta resistência a pragas, cupins e impactos causados pelas pisadas e pelo deslocamento de móveis nos cômodos. Por conta de todos esses fatores, ele se torna bastante durável, mantendo um aspecto novo e belo mesmo após muitos anos de uso. 
            </Text>
            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar para o Blog</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('info2')}>
                <Text style={styles.buttonText}>Sobre Ipê</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
        paddingHorizontal: 20,
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
