import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Features/userSlice";

const Header = ({ route, navigation }) => {
    let title;
    if (route.name === "Home") title = "Home";
    else if (route.name === "ItemListCategory") title = route.params.category;
    else if (route.name === "Detail") title = route.params.title;
    else title = route.name;

    const dispatch = useDispatch();
    const { email } = useSelector((state) => state.userReducer.value);

    return (
        <View style={styles.containerHeader}>
            <Text style={styles.text}>{title}</Text>
            {navigation.canGoBack() ? (
                <Pressable
                    style={styles.pressable}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="white" />
                </Pressable>
            ) : null}
            {email ? (
                <Pressable
                    style={styles.signOut}
                    onPress={() => dispatch(signOut())}
                >
                </Pressable>
            ) : null}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: "#18171c",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        position: "relative",
    },
    text: {
        fontSize: 30,
        color: '#18171c'
    },
    pressable: {
        position: "absolute",
        right: 30,
        top: "50%",
        paddingTop: 0
    },
    signOut: {
        position: "absolute",
        left: 30,
        top: "50%",
    },
});