import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from '../Components/CategoryItem'
import { useGetCategoriesQuery } from '../Services/shopServices'

const Home = ({
  navigation
}) => {
  const {data: categories, isLoading, isError} = useGetCategoriesQuery()
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