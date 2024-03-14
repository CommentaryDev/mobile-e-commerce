import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Import Feather icon library

const NavBar = ({ onDataUpdate }) => {
  const [searchText, setSearchText] = useState('');
  //Get search input
  const handleSearchTextChange = (text) => {
    setSearchText(text);
    console.log('Search text:', text);
  };
  //Change the data to send back to app.js
  const handleGearButtonPress = () => {
    fetch('https://ride-or-die.benjaminroche.fr/api/gear/getAllGear',{
      method: 'POST',
    })
      .then(response => response.json())
      .then(newData => {
        // Pass the new data to the parent component
        onDataUpdate(newData);
      })
      .catch(error => {
        console.error('Error fetching data from gear API endpoint:', error);
      });
  };
  const handleBikesButtonPress = () => {
    fetch('https://ride-or-die.benjaminroche.fr/api/bikes/getAllBikes',{
      method: 'POST',
    })
      .then(response => response.json())
      .then(newData => {
        // Pass the new data to the parent component
        onDataUpdate(newData);
      })
      .catch(error => {
        console.error('Error fetching data from bikes API endpoint:', error);
      });
  };
  const handlePiecesButtonPress = () => {
    fetch('https://ride-or-die.benjaminroche.fr/api/pieces/getAllPieces',{
      method: 'POST',
    })
      .then(response => response.json())
      .then(newData => {
        // Pass the new data to the parent component
        onDataUpdate(newData);
      })
      .catch(error => {
        console.error('Error fetching data from pieces API endpoint:', error);
      });
  };



  return (
    <View style={styles.navbar}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={24} color="#333" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#333"
          value={searchText}
          onChangeText={handleSearchTextChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.greyButton]} onPress={handleBikesButtonPress}>
          <Text style={styles.buttonText}>Bikes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.greyButton]} onPress={handleGearButtonPress}>
          <Text style={styles.buttonText}>Gear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.greyButton]} onPress={handlePiecesButtonPress}>
          <Text style={styles.buttonText}>Pieces</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'column', // Change flexDirection to column
    alignItems: 'center',
    backgroundColor: '#25292e',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10, // Add marginBottom to create space between search bar and buttons
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#333',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  greyButton: {
    backgroundColor: '#808080', // Change button background color
  },
});

export default NavBar;
