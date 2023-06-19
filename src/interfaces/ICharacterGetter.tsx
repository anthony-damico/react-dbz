import { Character } from "../types/character";

export interface ICharacterGetter {
    fetchCharacter: () => Promise<Character | null>;
}