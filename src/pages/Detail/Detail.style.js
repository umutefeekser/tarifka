import { Dimensions, StyleSheet } from "react-native";
const dimension = Dimensions.get("window")

export default StyleSheet.create({
    container: {
        flex: 1
    },

    image: {
        width: "100%",
        height: dimension.height / 3,
        resizeMode: "contian"
    },

    body: {
        padding: 5
    },
    
    meal_title: {
        fontSize: 35,
        fontWeight: "bold",
        color: "darkred"
    },

    meal_subtitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "darkred"
    },

    ingredients: {
        marginBottom: 10
    },

    title: {
        fontSize: 30,
        fontWeight: "bold"
    },

    ingredient: {
        fontSize: 20
    },

    description: {
        fontSize: 20
    },

    button: {
        margin: 10,
        backgroundColor: "red",
        alignItems: "center",
        padding: 10,
        borderRadius: 10
    },

    button_text: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    }
})