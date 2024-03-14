import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, StatusBar } from 'react-native';
import ProductCard from './app/components/ProductCard';
import { scale } from 'react-native-size-matters';
import Navbar from './app/components/Navbar'
import BottomNavbar from './app/components/BottomNavbar'
import ProductList from './app/components/ProductList';
const App = () => {
  const [data, setData] = useState([]);
  const handleDataUpdate = (newData) => {
    setData(newData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://ride-or-die.benjaminroche.fr/api/bikes/getAllBikes',{
        method: 'POST',
      });
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar onDataUpdate={handleDataUpdate} />
      <ProductList data={data}/>
      <StatusBar style="auto" />
      <BottomNavbar/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
