import { FlatList } from "react-native";

import { categories } from "@/utils/categories";
import { Category } from "../category";
import { styles } from "./style";

type Props = {
    selected: string
    onChange: (category: string) => void
}

export function Categories({selected, onChange}: Props) {
    return (
        <FlatList 
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => ( 
            <Category 
                name={item.name}
                icon={item.icon}
                isSelected={item.name === selected }
                onPress={() => onChange(item.name)}
            />
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />

    )
}