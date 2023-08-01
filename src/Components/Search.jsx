import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

const Search = ({
    onSearch,
    goback
}) => {
    const [keyword, setKeyword] = useState("")


  return (
    <View style={styles.containerSearch}>
      <TextInput style={styles.inputSearch}
        placeholder='Buscar...'
        value={keyword} 
        onChangeText={setKeyword}     
      />
      <Pressable onPress={goback}>
        <Entypo name="back" size={24} color="black" />
      </Pressable>
      <Pressable onPress={()=>onSearch(keyword)}>
        <Ionicons name="ios-search-circle-sharp" size={24} color="black" />
      </Pressable>
      <Pressable onPress={()=>setKeyword("")}>     
        <MaterialIcons name="cancel" size={24} color="black" />
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    containerSearch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        gap: 18,
    },
    inputSearch: {
        width: 250,
        padding: 8,
        fontSize: 10,
        backgroundColor: 'green',
        borderRadius: 10,
    },
})  