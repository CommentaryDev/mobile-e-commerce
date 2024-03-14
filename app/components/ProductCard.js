import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const ProductCard = ({ item }) => {
  const { name, desc, imageURL, price } = item;

  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={{ uri: imageURL }}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <Text style={styles.price}>Price: ${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    height: scale(200),
    width: scale(180),
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50', // Green color for price
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ProductCard;
