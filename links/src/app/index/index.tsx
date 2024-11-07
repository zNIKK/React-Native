import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { linkStorage, LinkStorage } from "@/storage/link-storage";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, FlatList, Image, Modal, Text, TouchableOpacity, View, Linking} from "react-native";
import { styles } from "./styles";

export default function Index() {
    const [link, setLink] = useState({} as LinkStorage);
    const [showModal, setShowModal] = useState(false);
    const [links, setLinks] = useState<LinkStorage[]>();
    const [category, setCategory] = useState(categories[0].name);

    async function getLinks() {
        try {
            const response = await linkStorage.get()

            const filtered = response.filter((link) => link.category === category)
            setLinks(filtered)
        } catch (error) {
            Alert.alert("Erro", "Não foi possivel listar os links")
        }
    }

    function handleDetails(selected: LinkStorage) {
        setShowModal(true)
        setLink(selected)
    }
    async function linkRemove() {
        try {
            await linkStorage.remove(link.id)
            getLinks()
            setShowModal(false)
        } catch (error) {
            Alert.alert("Erro", "Não foi possivel excluir")
            console.log(error)
        }
    }
    function handleRemove() {
        Alert.alert("Excluir", "Deseja realmente excluir", [
            {style: "cancel", text: "Não" },
            {text: "Sim", onPress: linkRemove}
        ])

    }


    async function handleOpen() {
        try {
            await Linking.openURL(link.url)
            setShowModal(false)
        } catch (error) {
            Alert.alert("Link", "Não foi possivel abrir o link")
            console.log(error)
        }

    }
    useFocusEffect(
        useCallback(() => {
            getLinks()
        }, [category])
    )
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />
                <TouchableOpacity onPress={() => router.navigate("/add")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]}></MaterialIcons>
                </TouchableOpacity>

            </View>
            
            <Categories onChange={setCategory} selected={category}></Categories>

            <FlatList 
                data={links}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Link 
                        name={item.name}
                        url={item.url} 
                        onDetails={() => handleDetails(item)}
                    ></Link>
 
                )} 
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />

            <Modal transparent visible={showModal} animationType="slide">
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>{link.category}</Text>
                            <TouchableOpacity onPress={() => setShowModal(false)}>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]}></MaterialIcons>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName}>
                            {link.name}
                        </Text>

                        <Text style={styles.modalUrl}>
                            {link.url}
                        </Text>

                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove}></Option>
                            <Option name="Abrir" icon="language" onPress={handleOpen}></Option>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

