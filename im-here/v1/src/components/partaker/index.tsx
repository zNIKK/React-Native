import { MaterialIcons } from "@expo/vector-icons";
import { Alert, GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { PropList } from "../FormArea";
import { styles } from "./style";

type Prop = {
    name: string,
    partakers: PropList[],
    partakersId: string
    setPartakers: (item: PropList[]) => void
    
}

export default function Partaker({name, partakers, partakersId, setPartakers}: Prop) {
    function handleRemove(id: string) {
        // usando o filter ele retorna uma lista de todos os itens MENOS o que tenha o id igual

        const removed = partakers.filter((item) => item.id !== id)
        Alert.alert('Remover', `Tem certeza que deseja remover ${name}? `, 
        [
            {
                text: 'Sim',
                onPress: () => setPartakers(removed)
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ],
            { cancelable: true}
            )
        
    }
    return (
        
        <View>
            <View style={styles.containerText}>
                    <Text style={styles.input}>{name}</Text>
                <TouchableOpacity onPress={value => handleRemove(partakersId)} style={styles.buttonRemove}>
                    <MaterialIcons name="remove" size={32} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}