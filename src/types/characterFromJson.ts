import { IBaseCharacter } from "../interfaces/IBaseCharacter";

export interface CharacterFromJson {
    id: string;
    name: string;
    race: string;
    gender: string;
    bio: string;
    health: string;
    attack: string;
    defense: string;
    kiRestoreSpeed: string;
    abilities: string[];
    img: string;
};