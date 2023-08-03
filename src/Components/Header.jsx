import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.containerH}>
      <Text style={styles.textHeader}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerH: {
        width: '100%',
        backgroundColor: 'violet',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    textHeader: {
        fontSize: 30
    }

})