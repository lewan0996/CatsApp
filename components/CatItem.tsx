import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React from "react"
import { Image, TouchableHighlight } from "react-native"
import { Cat, RootStackParamList } from "../types"

type CatItemProps = {
    cat: Cat;
    navigation: NativeStackNavigationProp<RootStackParamList, 'cats'>;
}

export const CatItem = ({ cat, navigation }: CatItemProps) => {
        return (
        <TouchableHighlight onPress={() => navigation.navigate("catDetails", { cat })}>
          <Image style={{ width: 300, height: 300 }} source={{ uri: cat.url }} key={cat.id} />
        </TouchableHighlight>
    )
}