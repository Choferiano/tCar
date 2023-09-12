import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useSignInMutation } from "../Services/authServices";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/userSlice";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const dispatch = useDispatch()

    const [triggerSignIn, resultSignIn] = useSignInMutation();
    const onSubmit = () => {

        //Submit logic with validations
        const isValidVariableEmail = isValidEmail(email)
        const isCorrectPassword = isAtLeastSixCharacters(password)

        if (isValidVariableEmail && isCorrectPassword) {
            triggerSignIn({
                email,
                password,
                returnSecureToken: true,
            });
        }

        if (!isValidVariableEmail) setErrorEmail ('Email is not correct')
        else setErrorEmail('')
        if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
        else setErrorPassword('')
    };

    useEffect(()=> {
        (async ()=> {
            try {
               if(resultSignIn.isSuccess) {
            //Insert session in SQLite database
            console.log('inserting Session');
            const response = await insertSession({
            email: resultSignIn.data.email,
            idToken: resultSignIn.data.idToken
            })
            console.log('Session inserted: ');
            console.log(response); 
            dispatch(setUser({
                email: resultSignIn.data.email,
                idToken: resultSignIn.data.idToken,
                profileImage: ""
            }))
        }
      } catch (error) {
        console.log(error.message);
       }
     })()
    }, [resultSignIn])

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Bienvenido</Text>
                <InputForm
                    label={"email"}
                    onChange={(email) => setEmail(email)}
                    error={errorEmail}
                />
                <InputForm
                    label={"password"}
                    onChange={(password) => setPassword(password)}
                    error={errorPassword}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Ingresar"/>
                <Text style={styles.sub}>No tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.subLink}>Crear cuenta</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#938CB0',
        gap: 10,
        paddingVertical: 20,
        borderRadius: 40,
    },
    title: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 40,
        fontFamily: "motorOil",

    },
    sub: {
        fontSize: 14,
        color: "white",
    },
    subLink: {
        fontSize: 20,
        color: "#e52822",
        fontFamily: 'motorOil',
        paddingBottom: 20
    },
});