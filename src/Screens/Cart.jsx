import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'
import { usePostCartMutation } from '../Services/shopServices'

const Cart = () => {
  const {items: CartData, total, updateAt, user} = useSelector(state => state.cartReducer.value)
  const [triggerPostCart, result] = usePostCartMutation()

  const onConfirm = () => {
    triggerPostCart({items: CartData, total, user, updateAt})
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={cartItem => cartItem.id}
        renderItem={({item}) => {
          return (
            <CartItem
               cartItem={item}
            />
          )
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable onPress={onConfirm}>
          <Text>confirm</Text>
        </Pressable>
        <Text>Total:{total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 120

  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})