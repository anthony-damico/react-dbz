import React, { ComponentType } from "react";
import {ICharacterGetter} from "../interfaces/ICharacterGetter";
import {Character} from "../types/character";
import dbzDatabase from '../databases/jsonDatabases/dbzDatabase.json';
import { CharacterFromJson } from "../types/characterFromJson";

import { addUser } from "../config/dataService"
export class FirestoreReader implements ICharacterGetter {
    fetchCharacter = async (): Promise<Character | null> => {
        return {
            name: '',
            pic: '',
            about: '',
            race: '',
            height: '',
            weight: '',
            birthDate: '',
            deathDates: {},
            alliegiance: [],
            relatives: []
        } as Character;
    };
    CharacterDetails = ({ characterData }: { characterData: Character }) => {

        const handleAddUserClick = () => {
            // Call the addUser function from dataService.tsx
            addUser(); // You can pass any required parameters to this function
        };
        
        return (
            <div>
                {/* Display character details here */}
                <button onClick={handleAddUserClick}>Add User</button>
            </div>
        );
    };


    
}