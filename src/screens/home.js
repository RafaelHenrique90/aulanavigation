import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
    return (
        <View style={[styles.container, { backgroundColor: '#50301e' }]}>
            <Image
                source={require('../assets/img/Rafalogo.png')} // Substitua o caminho pela localização da sua imagem
                style={styles.logo}
            />
            <Text style={styles.descricao}>
             A Rafa Madeireira é uma empresa especializada no comércio de madeira de qualidade, oferecendo uma ampla variedade de produtos como tábuas, vigas, compensados e outros materiais para construção e decoração. Com um compromisso com a sustentabilidade, a empresa se destaca por suas práticas responsáveis de manejo florestal, garantindo a procedência legal e sustentável de seus produtos. Além disso, a "Rafa Madeireira" preza pelo atendimento personalizado e pela satisfação dos clientes, buscando sempre oferecer soluções sob medida para cada projeto.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 300, // Ajuste o tamanho conforme necessário
        height: 300, // Ajuste o tamanho conforme necessário
        resizeMode: 'contain', // Ajuste conforme necessário para o seu layout
    },
    descricao: {
        textAlign: 'center',
        marginVertical: 20, // Ajuste conforme necessário
        color: 'white', // Cor do texto da descrição
        fontSize: 16, // Tamanho do texto da descrição
    },
});
