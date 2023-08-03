import { Image, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'


const ProductItem = ({
  item,
  navigation
}) => {

const onSelect = (id) => {
   navigation.navigate('Detail', {productId: item.id})
}

  return (
  <Pressable onPress={() => onSelect(item.id)}>
    <Card additionalStyle={styles.additionalStylesCard}>
        <Text style={styles.textCategory}>{item.title}</Text>
        <Image
          resizeMode='center'
          style={styles.image}
          source={{uri: item.images[0]}}
        />
    </Card>
  </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  textCategory: {
    fontSize: 24,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8
  },
  additionalStylesCard: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between'
  }
})