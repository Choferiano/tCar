import { 
  StyleSheet, 
  TextInput, 
  View, 
  TouchableOpacity, 
  Text, 
  FlatList,
  Pressable, 
  Modal, } from 'react-native'
import React, { useState } from 'react'

const MainScreen = ({taskList}) => {
  const [list, setList] = useState([taskList]);
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [taskActive, setTaskActive] = useState({})

  const renderItem = ({item, onPressTask}) => {
    return (
      <Pressable onPress={() => onPressTask (item)}>
       <View style = {styles.task} key={item.id}>
        <Text style = {styles.textTask}>{item.task}</Text>
       </View>
      </Pressable>
    ) 
 }

  const onAddTask = () => {
        setList ([
       ...list,
       {
           id: list.length + 1,
           task: input,
           completed: false
       }
    ])
 }

  const onPressTask = (task) => {
        setTaskActive (task);
        setModalVisible (!modalVisible)
  }
 console.log(list);
  return (
    <View style = {styles.container}>
      <View style = {styles.sectionHead}>
        <TextInput style = {styles.inputT}
                   placeholder='¿Que hay por hacer?'
                   value={input}
                   onChangeText={setInput}
        />
        <TouchableOpacity style = {styles.boton}
                          onPress = {onAddTask}
        >           
            <Text style = {styles.textBoton}>Agregar</Text>
        </TouchableOpacity>      
      </View>
      <View style = {styles.sectionBody}>
        <FlatList
           data={list}
           keyExtractor={item => item.id}
           renderItem={({item}) => renderItem({item, onPressTask})}
         />
        <Pressable
           style={[styles.button, styles.buttonOpen]}
           onPress={() => setModalVisible(true)}>
           <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{taskActive.task}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Aun no</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Realizado</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionHead: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FF6C5A',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
    },
    sectionBody: {
        flex: 4,
        backgroundColor: '#D2D2D2',
        width: '100%'
    },
    inputT: {
       width: 200,
       borderBottomColor: 'black',
       borderBottomWidth: 1,
       alignItems: 'center',
       marginEnd: 15,
       fontSize: 20,
    },
    boton:{
        width: 100,
        height: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textBoton: {
      fontSize: 20,
      color: 'white',
    },
    task: {
      backgroundColor: '#ffbfb0',
      justifyContent:'center',
      alignItems: 'center',
      padding: 20,
    },
    textTask: {
      fontSize: 20,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
});