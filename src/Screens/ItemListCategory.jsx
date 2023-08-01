import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductsC from '../Data/Products.json'
import Search from '../Components/Search'
import ProductItem from '../Components/ProductItem'

const ItemListCategory = ({
  category,
  setCategory
}) => { 

  const [categorySelected, setCategorySelected] = useState(category)
  const [Products, setProducts] = useState([])
  const [Keyword, setKeyword] = useState ("")

  useEffect(()=>{

    const productsFiltered = ProductsC.filter(product => product.category === categorySelected && product.title.includes(Keyword))
    setProducts (productsFiltered)

  }, [categorySelected, Keyword])

  const onSearch = (input) => {
    setKeyword(input)
  }


  return (
    <View>
      <Search
        onSearch={onSearch}
        goback={() => setCategory ("")}
      />
      <FlatList
       data={Products}
       keyExtractor={product => product.id}
       renderItem={({item}) => ProductItem({item})}
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