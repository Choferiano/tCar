import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import OrderStack from './OrderStack'
import MyProfileStack from './MyProfileStack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
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
          name='Orders'
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
        <Tab.Screen
          name="MyProfile"
          component={MyProfileStack}
          options={{
            tabBarIcon: ({ focused }) => {
                return (
                  <View style={styles.item}>
                     <Ionicons
                        name="person-circle-outline"
                        size={24}
                        color={
                        focused
                            ? 'black'
                            : 'gray'
                            }
                     />
                  </View>
                        );
                    },
                }}
            />
   </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})