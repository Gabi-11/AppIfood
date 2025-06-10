import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Sushi232n = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pará Lanches</Text>

      <Image
        source={{ uri: 'https://pbs.twimg.com/profile_images/1652312708623089666/kxWH82E6_400x400.jpg' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>Promoções imperdíveis durante a semana!! ⏰18:00 às 2:00 Delivery - 21 96877-8516!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://pbs.twimg.com/media/GqRfc2gWsAAeRzD?format=jpg&name=small' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Ratatouille</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://pbs.twimg.com/media/GfBSXaAW8AEJgol?format=png&name=900x900' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Chocolate Cítrico</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/06/0c/a0/060ca0c4c37716fbb1e9cd0d36010198.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pudim de Salsicha</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/dc/da/b2/dcdab28a183058aed4bd5bbb1a43d346.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Bebê Reborn Assado</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff8f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default Sushi232n;
