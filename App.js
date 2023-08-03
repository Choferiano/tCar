import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './src/Components/Header';
import ItemListCategory from './src/Screens/ItemListCategory';
import Home from './src/Screens/Home';
import { useState } from 'react';
import ItemDetail from './src/Screens/ItemDetail';
import Navigator from './src/Navigation/Navigator';
//import { useFonts } from 'expo-font'

export default function App() {
  //const [fontsloaded] = useFonts ({
    //'Font': require('')
  //});

  //if (!fontsloaded) {
   // return null;
  //}

  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  
});
