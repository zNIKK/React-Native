import { Stack } from "expo-router";
import { colors } from "@/styles/colors";
import styles from "./globalStyles";
export default function Layout() {
    return <Stack screenOptions={{
        headerShown: false,
        contentStyle: styles.global,

    }}/>
}