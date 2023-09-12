import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";


const SubmitButton = ({ onPress, title }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
        backgroundColor: 'white',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '60%',
        borderRadius: 12
    },
    text: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'motorOil'
    },
});