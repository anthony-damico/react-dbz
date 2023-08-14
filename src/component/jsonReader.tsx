import React, { ComponentType } from "react";
import {ICharacterGetter} from "../interfaces/ICharacterGetter";
import {Character} from "../types/character";
import dbzDatabase from '../databases/jsonDatabases/dbzDatabase.json';
import { CharacterFromJson } from "../types/characterFromJson";

export class JsonReader implements ICharacterGetter {
    fetchCharacter = (): Promise<Character | null> => {
        return new Promise((resolve) => {
            const randomNumber = Math.floor(Math.random() * Object.keys(dbzDatabase.characters).length);
            const selectedCharacter = dbzDatabase.characters[randomNumber];
            const convertedCharacter = this.convertCharacterFromJsonToCharacter(selectedCharacter);
            resolve(convertedCharacter);
        });
    };
    CharacterDetails = ({ characterData }: { characterData: Character }) => {
        return (
            <div>
                <h2>{characterData.name}</h2>
                <img src={characterData.pic} alt={characterData.name} />
                <p>About: {characterData.about}</p>
                <p>Race: {characterData.race}</p>
            </div>
        );
    };

    private convertCharacterFromJsonToCharacter(characterFromJson: CharacterFromJson): Character {
        // Extract common properties from characterFromJson and map to Character structure
        const {
            id,
            name,
            race,
            gender,
            bio,
            health,
            attack,
            defense,
            kiRestoreSpeed,
            abilities,
            img
        } = characterFromJson;

        // Create and return a new Character object from the characterFromJson above
        return {
            name: name,
            pic: img,
            about: bio,
            race: race,
            height: '',
            weight: '',
            birthDate: '',
            deathDates: {},
            alliegiance: [],
            relatives: []
        } as Character;
    }
    
}