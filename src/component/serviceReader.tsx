import {ICharacterGetter} from "../interfaces/ICharacterGetter"
import { listOfCharacters } from "../types/characterDictionary";
import {useState} from "react";
import { Character } from "../types/character";
import { IBaseCharacter } from "../interfaces/IBaseCharacter";
export class ServiceReader implements ICharacterGetter<IBaseCharacter> {
    fetchCharacter = async (): Promise<Character | null> => {
        try {
            const randomNumber = Math.floor(Math.random() * Object.keys(listOfCharacters).length);
            const character = listOfCharacters[randomNumber];
            const baseUrl = `https://unofficialdbzapi.cyclic.app/api/${character}`;
            console.log("Service Reader: ", baseUrl);

            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Request failed');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    CharacterDetails = ({ characterData }: { characterData: IBaseCharacter }) => {
        var charData = characterData as Character;
        return (
            <div>
                <h2>{charData.name}</h2>
                <img src={charData.pic} alt={charData.name} />
                <p>About: {charData.about}</p>
                <p>Race: {charData.race}</p>
                <p>Height: {charData.height}</p>
                <p>Weight: {charData.weight}</p>
                <p>Birth Date: {charData.birthDate}</p>
                {/*<p>Death Dates: {charData.deathDates.join(', ')}</p>
                   <p>Alliegiance: {charData.alliegiance.join(', ')}</p>
                   <p>Relatives: {charData.relatives.join(', ')}</p>*/}
            </div>
        );
    };
}