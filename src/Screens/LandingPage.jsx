import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import DemoScreen from './DemoScreen';
import AuthStack from '../Navigation/AutoStack';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.landingStyle}>
      <View style={styles.imgContainer}>
      <Image 
          source={require('../Assets/Images/hotlogo.png')} 
          style={styles.logoStyle}
          resizeMode='center'
      />
       <Image 
          source={require('../Assets/Images/lexus.png')} 
          style={styles.lexusImgStyle}
          resizeMode='center'
      />
      </View>
      <View style={styles.textLanding}>
       <Text style={styles.textLogo}>Encuentra el</Text>
       <Text style={styles.textLogoM}>MATCH</Text>
       <Text style={styles.textLogoS}>Encuentralo AQUI</Text>
      </View>
      <View style={styles.containerButton}> 
       <TouchableOpacity
          onPress={() => navigation.navigate(DemoScreen)}
          style={styles.buttonDemo}
         >
          <Text style={styles.textButtonD}> Adelante </Text>
         </TouchableOpacity>
         <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.buttonLogin}
         >
          <Text style={styles.textButtonL}> Ingresar </Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({
    landingStyle: {
      flex: 1,
      backgroundColor: '#18171c',
      height: '100%',
      alignItems: 'center',
    },
    imgContainer: {
      alignItems: 'center',
      height: '50%'

    },
    logoStyle: {
      height: 200,
      width: 400,
    },
    lexusImgStyle:{
      width: 500,
      height: 300,
    },
    textLanding: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '30%'
    },
    textLogo: {
      color: 'white',
      fontFamily: 'motorOil',
      fontSize: 40  
    },
    textLogoM: {
      color: '#e52822',
      fontFamily: 'motorOil',
      fontSize: 70,
   },
    textLogoS: {
      color: 'white',
      fontFamily: 'motorOil',
      fontSize: 35,
      paddingTop: 10,
    },
    containerButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      height: '20%',
      gap: 20
    },
    buttonDemo: {
      width: '40%',
      height: 50,
      backgroundColor: '#e52822',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textButtonD: {
      color: 'white',
      fontFamily: 'motorOil',
      fontSize: 25,
    },
    buttonLogin: {
      width: '40%',
      height: 50,
      backgroundColor: '#fbc172',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textButtonL: {
      color: 'white',
      fontFamily: 'motorOil',
      fontSize: 25,
    }
})