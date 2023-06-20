import { ReactNode } from "react";
import { Character } from "../types/character";
import { CharacterFromJson } from "../types/characterFromJson";
import { IBaseCharacter } from "./IBaseCharacter";

//export type myType = Character | CharacterFromJson
export interface ICharacterGetter<T extends IBaseCharacter> {
    fetchCharacter: () => Promise<T | null>;
    CharacterDetails: React.ComponentType<{ characterData: T }>; //This is the react component that will render on the page. Will be unqiue to each reader
}