import React, { ComponentType } from "react";
import {ICharacterGetter} from "../interfaces/ICharacterGetter";
import {Character} from "../types/character";
import dbzDatabase from '../databases/jsonDatabases/dbzDatabase.json';
import { CharacterFromJson } from "../types/characterFromJson";
import { IBaseCharacter } from "../interfaces/IBaseCharacter";

export class JsonReader implements ICharacterGetter<IBaseCharacter> {
    fetchCharacter = (): Promise<CharacterFromJson | null> => {
        return new Promise((resolve) => {
            const randomNumber = Math.floor(Math.random() * Object.keys(dbzDatabase.characters).length);
            const selectedCharacter = dbzDatabase.characters[randomNumber];
            resolve(selectedCharacter);
        });
    };
    CharacterDetails = ({ characterData }: { characterData: IBaseCharacter }) => {
        var charData = characterData as CharacterFromJson;
        return (
            <div>
                <h2>{charData.name}</h2>
                <img src={charData.img} alt={charData.name} />
                <p>About: {charData.bio}</p>
                <p>Race: {charData.race}</p>
            </div>
        );
    };
    
}