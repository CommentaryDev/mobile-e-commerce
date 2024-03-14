import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, StatusBar } from 'react-native';
import ProductCard from './ProductCard';
import { scale } from 'react-native-size-matters';
const ProductList = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <ProductCard item={item} />
        )}
        keyExtractor={(item) => item.id_product.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30, 
  },
});

export default ProductList;
