import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon you want to use

const ProductCard = ({ item }) => {
  const { name, desc, imageURL, price } = item;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFavoritePress} style={styles.favoriteButton}>
        <Icon name={isFavorite ? "heart" : "heart-o"} size={30} color="#FF6347" />
      </TouchableOpacity>
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
    position: 'relative', // Needed for absolute positioning
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
    color: '#4CAF50',
    marginTop: 5,
    textAlign: 'center',
  },
  favoriteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default ProductCard;
