import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DemoScreen from '../Screens/DemoScreen'
import LandingPage from '../Screens/LandingPage'
import Header from '../Components/Header'
import LoginScreen from '../Screens/LoginScreen'
import SignupScreen from '../Screens/SignupScreen'
import TabNavigation from './TabNavigation'
import { useSelector } from 'react-redux'

const 
LandingStack = () => {

    const Stack = createNativeStackNavigator()
    const { email } = useSelector((state) => state.userReducer.value);

    return (
        <Stack.Navigator
             initialRouteName='LandingPage'
             screenOptions={
              ({route, navigation}) => (
                {
                  header: () => {
                    return <Header
                        route = {route}
                        navigation = {navigation}
                    />
                  }, 
                }
              )
             }
            >
                <Stack.Screen
                  name='LandingPage'
                  component={LandingPage}
                />
                <Stack.Screen
                   name='DemoScreen'
                   component={DemoScreen}
                />
                <Stack.Screen 
                   name="Signup" 
                   component={SignupScreen} />
                <Stack.Screen 
                   name="Login" 
                   component={LoginScreen} />
            </Stack.Navigator>
      )
    }

export default LandingStack

const styles = StyleSheet.create({})