import { Button, StyleSheet, Text, View, Image,} from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../Data/Products.json'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../Features/cartSlice'

const ItemDetail = ({
    navigation,
    route
}) => {

  const {productId: idSelected} = route.params

  const dispatch = useDispatch()

  const [product, setProduct] = useState({})

   useEffect(() => {
    const productSelected = allProducts.find(product => product.id === idSelected)
    setProduct(productSelected);
   }, [idSelected]);

   onAddCart = () => {
          dispatch(addCartItem({
                ...product,
                quantity: 1
          }))
   }
   
  return (
    <View>
     <Button onPress={() => navigation.goBack()} title='Go back'/>
     <View style={styles.itemDetailContainer}>
      <Text>{product.brand}</Text>
      <Text>{product.title}</Text>
      <Text>${product.price}</Text>
      <Text>{product.model}</Text>
      <Button onPress={onAddCart} title='Add Cart'> 
              
      </Button>
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