import { StyleSheet } from 'react-native';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';
import { dropTableSessions, init } from './src/SQLite';
import { useEffect } from 'react';
import { useFonts } from 'expo-font'

export default function App() {

  useEffect(()=> {
    init()
      .then((result)=> {
        console.log('Db initialized/dropped')
        console.log(result);
      })
      .catch(err => {
        console.log("Initialization DB failed:");
        console.log(err.message);
    })
  }, [])
  
  const [fontsloaded] = useFonts ({
     'motorOil': require('./src/Assets/Fonts/motorOil.ttf')
   });

   if (!fontsloaded) {
     return null;
   }

  return (
  <Provider store={store}>
    <Navigator/>
  </Provider>
  );
}

const styles = StyleSheet.create({
  
});
