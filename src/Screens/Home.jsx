import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../Data/Categories.json'
import CategoryItem from '../Components/CategoryItem'

const Home = ({
  setCategorySelected
}) => {
  return (
    <View style={styles.containerHome}>
      <FlatList
         data={categories}
         keyExtractor={category => category}
         renderItem={({item}) => CategoryItem({item, setCategorySelected})}
         showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    containerHome: {
        height: '90%',
        backgroundColor: 'ambar',
        alignItems: 'center'
    }
})