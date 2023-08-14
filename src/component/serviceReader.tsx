import {ICharacterGetter} from "../interfaces/ICharacterGetter"
import { listOfCharacters } from "../types/characterDictionary";
import {useState} from "react";
import { Character } from "../types/character";
export class ServiceReader implements ICharacterGetter{
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

    CharacterDetails = ({ characterData }: { characterData: Character }) => {
        return (
            <div>
                <h2>{characterData.name}</h2>
                <img src={characterData.pic} alt={characterData.name} />
                <p>About: {characterData.about}</p>
                <p>Race: {characterData.race}</p>
                <p>Height: {characterData.height}</p>
                <p>Weight: {characterData.weight}</p>
                <p>Birth Date: {characterData.birthDate}</p>
                
                <p>
                    Death Dates:{" "}
                    {Object.keys(characterData.deathDates).map((key) => (
                        <span key={key}> 
                            {characterData.deathDates[key]}
                            {", "}
                        </span>
                    ))}
                </p>
                
                <p>Alliegiance: {characterData.alliegiance.join(', ')}</p>
                <p>Relatives: {characterData.relatives.join(', ')}</p>
            </div>
        );
    };
}