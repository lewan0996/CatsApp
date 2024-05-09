import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import { RootStackParamList } from "../types";

type CatDetailsProps = NativeStackScreenProps<RootStackParamList, 'catDetails'>;

const textStyle= {
    color: "black"
}

export const CatDetails = ({ route }: CatDetailsProps) => {
    const cat = route.params.cat;
    return (
        <View>
            <Image style={{ width: 100, height: 100 }} source={{ uri: cat.url }} />
            <Text style={textStyle}>{cat.breeds[0].name}</Text>
            <Text style={textStyle}>{cat.breeds[0].description}</Text>
        </View>
    )
}