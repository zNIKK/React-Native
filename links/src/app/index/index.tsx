import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View, FlatList } from "react-native";
import { styles } from "./styles";
export default function Index() {
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />
                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]}></MaterialIcons>
                </TouchableOpacity>

            </View>

            <Categories />
            <Link name="Rocketseat" url="https://rocketseat.com.br/" onDetails={() => console.log("Clicou!")}></Link>
        </View>
    )
}

