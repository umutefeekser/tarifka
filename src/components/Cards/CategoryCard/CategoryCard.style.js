import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "lightgray",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },

    image: {
        height: 100,
        width: 100,
        resizeMode: "contain",
        marginRight: 10
    },

    title: {
        fontSize: 20
    }
})