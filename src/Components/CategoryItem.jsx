import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { setCategorySelected } from '../Features/shopSlice'
import { useDispatch } from 'react-redux' 

const CategoryItem = ({
    item,
    navigation
}) => {

    const dispatch = useDispatch

    const onSelectCategory = () => {
      dispatch(setCategorySelected(item))
      navigation.navigate('ItemListCategory', {category: item})

    }
  return (
    <Pressable
      onPress={onSelectCategory}>
    <Card>
        <Text style={styles.textCategory}>{item}</Text>
    </Card> 
    </Pressable> 
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    textCategory: {
        fontSize: 18
    }
})