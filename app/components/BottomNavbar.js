import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BottomNavbar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.iconContainer}>
        <Feather name="user" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Feather name="list" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Feather name="shopping-cart" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#25292e',
    height: 60,
    elevation: 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomNavbar;
