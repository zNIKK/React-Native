import theme from "@/src/theme";
import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components";

import { Loading } from '@components/Loading';

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { StatusBar } from "expo-status-bar";
export default function App() {

    const [ fontsLoaded ] =  useFonts({ Roboto_400Regular, Roboto_700Bold});


    return (
        <ThemeProvider theme={theme}>
            <StatusBar 
                style='dark'
                backgroundColor='transparent'
                translucent={true}
                
            />
            {fontsLoaded ? <Groups />  : <Loading />}
        </ThemeProvider>
    )
}