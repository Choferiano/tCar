import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductsC from '../Data/Products.json'
import Search from '../Components/Search'
import ProductItem from '../Components/ProductItem'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../Services/shopServices'

const ItemListCategory = ({
  navigation,
  route
}) => { 

  const {category} = route.params
  // const productsSelected = useSelector (state => state.shopReducer.value.productsSelected)
  const categorySelected = useSelector (state => state.shopReducer.value.categorySelected)
  const {data: productsSelected, isError, isLoading} = useGetProductsByCategoryQuery(categorySelected)


  const [Products, setProducts] = useState([])
  const [Keyword, setKeyword] = useState ("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(()=>{
    
    if (productsSelected) {
    const productsFiltered = productsSelected.filter(product => product.title.includes(Keyword))
    setProducts (productsFiltered)
    }
  }, [productsSelected, Keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      setKeywordError("Solo letras y números")
    }

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