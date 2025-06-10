import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Sushi232n = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sushi 232N</Text>

      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMkzmvH3qPSXJSe_40zVQJQ34zo6SLw3n5Q&s' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>O melhor sushi da cidade!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://sushistaycation.com/wp-content/uploads/2024/03/how_to_make_nigiri_sushi_thumbnail.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Nigiri</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEUy80566Aw5ZORZd_dyXUmJvpiIbMxrmGA&s' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Gunkan</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEIZ3CZ4CvT8ilJ1hwZsgFpPnEeqhF0z4AA&s' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Temaki</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGtTenH0SVwTb1MxYARjAG2thk85M9IaljA&s' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Hot Rolls</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
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
    fontSize: 28,
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
