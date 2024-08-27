import { Dimensions, StyleSheet } from "react-native";
const dimension = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        borderRadius: 5
    },

    image: {
        height: dimension.height / 5,
        width: "100%",
        borderRadius: 10
    },

    text_container: {
        position: "absolute",
        padding: 5,
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
        bottom: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "right",
        color: "white"
    }
})