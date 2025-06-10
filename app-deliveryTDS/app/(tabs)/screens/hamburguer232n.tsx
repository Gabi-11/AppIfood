import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Sushi232n = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Baguales Lanches</Text>

      <Image
        source={{ uri: 'https://files.menudino.com/cardapios/43620/logo.png' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>Os melhores hamburgueres da cidade!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://files.menudino.com/cardapios/43620/85.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Panguaré</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://files.menudino.com/cardapios/43620/3.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Piá</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://files.menudino.com/cardapios/43620/13.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Xirú</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://files.menudino.com/cardapios/43620/18.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Chimango</Text>
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
