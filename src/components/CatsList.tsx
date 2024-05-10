import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import React from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useQuery } from "react-query";
import { Cat, RootStackParamList } from "../types";
import { CatItem } from "./CatItem";

type CatsListProps = NativeStackScreenProps<RootStackParamList, 'cats'>;

export function CatsList({ navigation }: CatsListProps) {
  const catsData = useQuery(
    ['cats'],
    () => {
      return axios.get<Cat[]>("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10", {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "DEMO-API-KEY"
        }
      }).then(response => response.data);
    },
    {}
  );
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      refreshControl={
        <RefreshControl refreshing={catsData.isFetching} onRefresh={catsData.refetch} />
      }>
      {
        catsData.data?.map(cat => <CatItem cat={cat} navigation={navigation} key={cat.id} />)
      }
    </ScrollView>
  )
}