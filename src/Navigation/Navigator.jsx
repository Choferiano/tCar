import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthStack from './AutoStack'
import { useDispatch, useSelector } from 'react-redux'
import TabNavigation from './TabNavigation';
import LandingPage from '../Screens/LandingPage';
import LandingStack from './LandingStack';

const Tab = createBottomTabNavigator()

const Navigator = () => {

  const { email } = useSelector((state) => state.userReducer.value)

  const dispatch = useDispatch()

    //Get stored sessions
    // useEffect(()=> {
    //     (async ()=> {
    //         try {
    //             console.log('Getting session...');
    //             const session = await getSession()
    //             console.log('Sesion: ');
    //             console.log(session);
    //             if (session?.rows.length) {
    //                 const user = session.rows._array[0]
    //                 dispatch(setUser(user))
    //             }
    //         } catch (error) {
    //             console.log('Error getting session');
    //             console.log(error.message);
    //         }
    //     })()
    // }, []) 

  return (
    <View style={styles.container}>
      <NavigationContainer>
         { email ? 
          <TabNavigation/>
         : <LandingStack/> 
         }
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
})