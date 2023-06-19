import { Character } from "../types/character";

export interface ICharacterGetter {
    fetchCharacter: () => Promise<Character | null>;
    CharacterDetails: React.ComponentType<{ characterData: Character }>; //This is the react component that will render on the page. Will be unqiue to each reader
}