import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';

export default function Info2({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sobre Ipê</Text>
            <Image
                source={require('../assets/img/ipe.jpg')} // Substitua pelo caminho da sua imagem de madeira fina
                style={styles.image}
            />
            <Text style={styles.description}>
            O uso da madeira de ipê na decoração é bastante amplo, tanto devido a durabilidade que apresenta quanto a bela aparência oferecida pelos itens fabricados com a matéria-prima. Com a madeira ipê é possível fabricar mesas de jantar, de centro e lateral.

            Cristaleiras, buffets e prateleiras. Há ainda a aplicação para guarda-roupas, estantes e racks. Decks, pisos, janelas e portas são outros itens constantemente fabricados com o material. Artigos para cozinhas, como petisqueiras, bandejas e carrinhos gourmet também ilustram a seleção de produtos criados a partir da madeira de ipê.

            Outro campo de atuação para itens feitos com madeira de ipê são os quartos. Neles os produtos mais feitos com a matéria-prima são cabeceiras de cama, baús e criados-mudos. Nos espaços pode-se guardar livros, abajures, e porta-retratos de momentos felizes.
            </Text>
            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar para o Blog</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('info1')}>
                <Text style={styles.buttonText}>Abra para madeira de carvalho</Text>
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
