import FormArea from "@/components/FormArea";
import { Text, View, StatusBar } from "react-native";
import styles from "./styles";
import React from "react";

export default function Index() {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor='transparent' />

            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Nome do evento</Text>
                    <Text style={styles.details}>Sexta, 4 de novembro de 2022</Text>
                </View>
                
                <FormArea></FormArea>

            </View>
        </>
    )
}