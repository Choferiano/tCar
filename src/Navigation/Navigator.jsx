import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderStack from './OrderStack'
import OrderScreen from '../Screens/OrderScreen'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer> 
        <Tab.Navigator
         screenOptions={{
             headerShown: false,
             tabBarShowLabel: false,
             tabBarStyle: styles.tabBar
         }}
        >
         <Tab.Screen
         name='Shop'
         component={ShopStack}
         options={{
             tabBarIcon: ({focused}) => {
              return (
                 <View>
                    <FontAwesome5 name="shopify" size={32} color={focused ? "orange":"black"} />
                 </View>
              )
             } 
         }}  
        />
        <Tab.Screen
         name='Cart'
         component={CartStack}
         options={{
          tabBarIcon: ({focused}) => {
           return (
              <View>
                 <Foundation name="shopping-cart" size={32} color={focused ? "orange":"black" } />
        
              </View>
           )
          } 
      }}
        />
        <Tab.Screen
         name='Order'
         component={OrderStack}
         options={{
          tabBarIcon: ({focused}) => {
           return (
              <View>
                <Ionicons name="ios-list-circle" size={32} color={focused ? "orange":"black" } />
          
              </View>
           )
          } 
      }}
        /> 
        </Tab.Navigator>     
        {/* <ShopStack/> */}
        {/* <CartStack/> */}
      </NavigationContainer>
    </View>
  )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    tabBar: {
        backgroundColor: 'red',
        shadowColor: 'black',
        elevation: 4,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    }
})