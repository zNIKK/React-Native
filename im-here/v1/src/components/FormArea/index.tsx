import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import Partaker from "../partaker";
import { styles } from "./style";

export type PropList = {
    id: string,
    text: string
}


export default function FormArea() {
    const [list, setList] = useState<PropList[]>([]);
    const [text, setText] = useState("");

    function handleAdd() {
        if (!text) return
        // prevState usa o valor do estado anterior   
        setList(prevState => [...prevState, {
            id: new Date().getTime().toString(),
            text
        }])
        setText('')
        
    }

    return (
        <View>
            <View style={styles.container}>
                {/* o value serve para deixar o input vazio depois de clicar nele */}
                <TextInput value={text} onChangeText={setText} placeholder="Nome do participante" placeholderTextColor={colors.gray[600]} style={styles.input}/>
                <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}><MaterialIcons name='add' size={32} color="white"></MaterialIcons></TouchableOpacity>
            </View>
            
            <FlatList
            data={list} 
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
                (
                    <Partaker name={item.text} partakers={list} partakersId={item.id} setPartakers={setList}></Partaker>
                )
            } scrollEnabled={true}
            ListEmptyComponent={() => (
                <Text style={styles.titleEmp}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
                </Text>
            )}/>
        </View>
        

    )

 
}