import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 32,
        gap: 8,
    },

    titleEmp: {
        textAlign: 'center',
        color: colors.gray[400],
        fontSize: 16,
        marginTop: 32,
    },

    containerText: {
        flexDirection: "row",
        marginTop: 12,
        gap: 8,

    },


    input: {
        flex: 1,
        fontSize: 16,
        color: colors.gray[100],
        padding: 16,
        backgroundColor: colors.gray[800],
        borderRadius: 8,
        marginBottom: 32,

    },

    buttonAdd: {
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,        
        backgroundColor: "#00ce6d",
        borderRadius: 8,
    },


    buttonRemove: {
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,        
        backgroundColor: "#eb3c49",
        borderRadius: 8,
    },

})