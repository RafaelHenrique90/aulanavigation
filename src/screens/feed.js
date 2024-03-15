import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Feed() {
    // Array de exemplos de produtos (substitua com seus próprios dados)
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { id: 1, name: 'Piso de carvalho', price: 'R$ 500,00', description: 'Piso completo para sua casa', image: require('../assets/img/piso.jpg') },
        { id: 2, name: 'Serragem', price: 'R$ 50,00', description: '2kg de serragem', image: require('../assets/img/serragem.png') },
        { id: 3, name: 'Tabua de madeira fina', price: 'R$ 360,00', description: '5Kg de tabua', image: require('../assets/img/tabua.jpg') },
        // Adicione mais produtos conforme necessário
    ];

    // Função para lidar com o clique em um produto
    const handleProductPress = (product) => {
        setSelectedProduct(product);
    };

    return (
        <View style={[styles.container, { backgroundColor: '#50301e' }]}>
            {products.map((product, index) => (
                <Pressable
                    key={index}
                    style={styles.productContainer}
                    onPress={() => handleProductPress(product)}
                >
                    <Image
                        source={product.image}
                        style={styles.productImage}
                    />
                    <Text style={styles.productName}>{product.name}</Text>
                </Pressable>
            ))}
            {selectedProduct && (
                <View style={styles.productDetails}>
                    <Text style={styles.productPrice}>{selectedProduct.price}</Text>
                    <Text style={styles.productDescription}>{selectedProduct.description}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    productContainer: {
        width: '45%', // Define a largura do item de produto (ajuste conforme necessário)
        margin: 5,
        backgroundColor: '#68423d',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 150, // Define a largura da imagem do produto (ajuste conforme necessário)
        height: 150, // Define a altura da imagem do produto (ajuste conforme necessário)
        resizeMode: 'contain',
    },
    productName: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
        color:'white'
    },
    productDetails: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Cor de fundo semitransparente
        padding: 10,
    },
    productPrice: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productDescription: {
        marginBottom: 5,
    },
});
