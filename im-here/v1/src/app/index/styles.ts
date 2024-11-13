import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 32,

    },
    
    title: {
        color: "white",
        fontWeight: "600",
        fontSize: 22,
    },

    title2: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
        marginTop: 32,
    },

    details: {
        color: colors.gray[500],

    }
})

export default styles