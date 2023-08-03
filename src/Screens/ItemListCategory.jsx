import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductsC from '../Data/Products.json'
import Search from '../Components/Search'
import ProductItem from '../Components/ProductItem'

const ItemListCategory = ({
  navigation,
  route
}) => { 

  const {category} = route.params

  const [Products, setProducts] = useState([])
  const [Keyword, setKeyword] = useState ("")

  useEffect(()=>{

    const productsFiltered = ProductsC.filter(product => product.category === category && product.title.includes(Keyword))
    setProducts (productsFiltered)

  }, [category, Keyword])

  const onSearch = (input) => {
    setKeyword(input)
  }


  return (
    <View>
      <Search
        onSearch={onSearch}
        goback={() => navigation.goBack()}
      />
      <FlatList
       data={Products}
       keyExtractor={product => product.id}
       renderItem={({item}) => <ProductItem 
         item={item}
         navigation={navigation}
         />}
       showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  containerItem: {
    height: '90%',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  }
})