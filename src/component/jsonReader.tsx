import React, { ComponentType } from "react";
import {ICharacterGetter} from "../interfaces/ICharacterGetter";
import {Character} from "../types/character";
import dbzDatabase from '../databases/jsonDatabases/dbzDatabase.json';
import { CharacterFromJson } from "../types/characterFromJson";
import { IBaseCharacter } from "../interfaces/IBaseCharacter";

export class JsonReader implements ICharacterGetter<CharacterFromJson> {
    fetchCharacter = (): Promise<CharacterFromJson | null> => {
        return new Promise((resolve) => {
            const randomNumber = Math.floor(Math.random() * Object.keys(dbzDatabase.characters).length);
            const selectedCharacter = dbzDatabase.characters[randomNumber];
            resolve(selectedCharacter);
        });
    };
    CharacterDetails = ({ characterData }: { characterData: CharacterFromJson }) => {
        return (
            <div>
                <h2>{characterData.name}</h2>
                <img src={characterData.img} alt={characterData.name} />
                <p>About: {characterData.bio}</p>
                <p>Race: {characterData.race}</p>
            </div>
        );
    };
    
}