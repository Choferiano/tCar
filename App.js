import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './src/Components/Header';
import ItemListCategory from './src/Screens/ItemListCategory';
import Home from './src/Screens/Home';
import { useState } from 'react';
import ItemDetail from './src/Screens/ItemDetail';
//import { useFonts } from 'expo-font'

export default function App() {

  const [categorySelected, setCategorySelected] = useState("")
  const [productSelected, setProductSelected] = useState("")

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
         setProductSelected={setProductSelected}
        /> :
        productSelected ?
        <ItemDetail
         idSelected={productSelected}
         setProductSelected={setProductSelected}
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
