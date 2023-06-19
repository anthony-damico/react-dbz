import {ICharacterGetter} from "../interfaces/ICharacterGetter"
import { listOfCharacters } from "../types/characterDictionary";
import {useState} from "react";
import { Character } from "../types/character";
export class ServiceReader implements ICharacterGetter {
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

}