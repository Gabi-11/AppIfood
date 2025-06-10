import React from 'react';
// Importa a biblioteca React, essencial para criar componentes.

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// Importa componentes do React Native para estruturar e estilizar a interface.

import { Link } from 'expo-router';
// Importa o componente Link do Expo Router para navegar entre telas.

interface Restaurant {
  name: string;
  rating: number;
  image: string;
  distance: string;
}
// Define a estrutura (interface) de um restaurante com nome, nota, imagem e distância.

const restaurants: Restaurant[] = [
  {
    name: 'Baguales Lanches',
    rating: 4.3,
    image: 'data:image/png;base64,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',
    distance: '3 km',
  },
  {
    name: 'Siri Cascudo',
    rating: 4.5,
    image: 'https://i.pinimg.com/736x/c3/fe/5b/c3fe5b105782adcecae4a24bd469102a.jpg',
    distance: '2 km'
  },
  {
    name: 'One Burguer',
    rating: 4.5,
    image: 'https://i.pinimg.com/736x/b2/b8/3b/b2b83b203f2362114bdf1c5d28c9ee4c.jpg',
    distance: '2 km'
  }
];
// Cria um array de restaurantes com informações simuladas: nome, avaliação, imagem e distância.

const Restaurants: React.FC = () => {
  // Define o componente funcional Restaurants.

  return (
    <View style={styles.restaurants}>
      {/* Container principal do componente com padding e margem. */}

      <Text style={styles.title}>Restaurantes</Text>
      {/* Título da seção de restaurantes. */}

      {restaurants.map((restaurant, index) => {
        // Percorre o array de restaurantes, criando um card para cada item.

        const cardContent = (
          <View style={styles.restaurantCard}>
            {/* Card com layout em linha (imagem + informações). */}

            <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
            {/* Exibe a imagem do restaurante. */}

            <View style={styles.restaurantInfo}>
              {/* Container das informações do restaurante. */}

              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              {/* Nome do restaurante com estilo de destaque. */}

              <Text style={styles.restaurantDetails}>
                Avaliação: {restaurant.rating} | {restaurant.distance} de distância
              </Text>
              {/* Informações adicionais: avaliação e distância. */}
            </View>
          </View>
        );

        if (restaurant.name === 'Pizzaria da 232N') {
          // Verifica se o restaurante é a pizzaria específica para aplicar navegação.

          return (
            <Link href="/(tabs)/screens/pizza232n" asChild key={index}>
              {/* Envolve o botão com Link para navegar para a tela da pizzaria. */}
              <TouchableOpacity>{cardContent}</TouchableOpacity>
            </Link>
          );
        }
        return (
          <TouchableOpacity key={index}>
            {/* Para os outros restaurantes, apenas exibe o card clicável (sem navegação). */}
            {cardContent}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  // Define os estilos visuais com StyleSheet, forma recomendada no React Native.

  restaurants: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  // Espaçamento lateral e vertical para a seção de restaurantes.

  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 15,
    color: '#2c3e50',
    textAlign: 'center',
  },
  // Estilo do título: tamanho grande, peso médio, cor escura e centralizado.

  restaurantCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  // Card com fundo branco, sombra e cantos arredondados, disposto em linha.

  restaurantImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  // Estilo da imagem: quadrada e com bordas levemente arredondadas.

  restaurantInfo: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
  },
  // Container de texto com padding, usa flex para ocupar o espaço restante e centraliza verticalmente.

  restaurantName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e74c3c',
  },
  // Nome do restaurante em vermelho escuro e negrito.

  restaurantDetails: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
  },
  // Detalhes com texto cinza, menor e com espaçamento superior.
});

export default Restaurants;
// Exporta o componente Restaurants para ser utilizado em outras partes do app.
