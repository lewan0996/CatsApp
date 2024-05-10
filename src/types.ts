export interface Cat {
    id: string;
    url: string;
    breeds: Breed[];
}

export interface Breed {
    name: string;
    description: string;
}

export type RootStackParamList = {
    cats: undefined,
    catDetails: { cat: Cat }
}