import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const DemoScreen = ({
    navigation,
    route
}) => {

    const [product, setProduct] = useState({})

   useEffect(() => {
    const productSelected = allProducts.find(product => product.id === idSelected)
    setProduct(productSelected);
   }, [idSelected]);

  return (
    <View>
      <Image
       source={{ uri:product.images[0] }}
       style={styles.imagesDemo}
       resizeMode='contain'
      />
    </View>
  )
}

export default DemoScreen

const styles = StyleSheet.create({
    imagesDemo: {

    }
})