import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';
//import { useFonts } from 'expo-font'

export default function App() {
  //const [fontsloaded] = useFonts ({
    //'Font': require('')
  //});

  //if (!fontsloaded) {
   // return null;
  //}

  return (
  <Provider store={store}>
    <Navigator/>
  </Provider>
  );
}

const styles = StyleSheet.create({
  
});
