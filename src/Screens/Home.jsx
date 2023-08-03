import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../Data/Categories.json'
import CategoryItem from '../Components/CategoryItem'

const Home = ({
  navigation
}) => {
  return (
    <View style={styles.containerHome}>
      <FlatList
         data={categories}
         keyExtractor={category => category}
         renderItem={({item}) => <CategoryItem item={item} navigation={navigation}/>}
         showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    containerHome: {
        backgroundColor: 'ambar',
        alignItems: 'center'
    }
})