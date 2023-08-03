import { Button, StyleSheet, Text, View, Image,} from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../Data/Products.json'

const ItemDetail = ({
    idSelected,
    setProductSelected
}) => {

  const [product, setProduct] = useState({})

   useEffect(() => {
    const productSelected = allProducts.find(product => product.id === idSelected)
    setProduct(productSelected);
   }, [idSelected]);

  return (
    <View>
     <Button onPress={() => setProductSelected("")} title='Go back'/>
     <View style={styles.itemDetailContainer}>
      <Text>{product.brand}</Text>
      <Text>{product.title}</Text>
      <Text>${product.price}</Text>
      <Text>{product.model}</Text>
     </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    itemDetailContainer: {
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10
    },
    Image: {
        width: 300,
        height: 250,
    },
})