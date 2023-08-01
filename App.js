import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import ItemListCategory from './src/Screens/ItemListCategory';
import Home from './src/Screens/Home';
import { useState } from 'react';
//import { useFonts } from 'expo-font'

export default function App() {

  const [categorySelected, setCategorySelected] = useState("")

  //const [fontsloaded] = useFonts ({
    //'Font': require('')
  //});

  //if (!fontsloaded) {
   // return null;
  //}

  return (
    <View style={styles.container}>
      <Header/>
      {
        categorySelected ?
        <ItemListCategory
         category={categorySelected}
         setCategory={setCategorySelected}
        /> :
       <Home
        setCategorySelected={setCategorySelected}
       />
      }
      {/*<ItemListCategory/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
