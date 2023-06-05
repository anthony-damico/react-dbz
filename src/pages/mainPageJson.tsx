import React, { useEffect, useState } from "react";
import { Character } from "../types/character";
import { listOfCharacters } from "../types/characterDictionary";
import dbzDatabase from '../databases/jsonDatabases/dbzDatabase.json';
import { CharacterFromJson } from "../types/characterFromJson";

const MainPageJson: React.FC = () => {
    const [characterData, setCharacterData] = useState<CharacterFromJson | null>(null);
    const fetchCharacters = async () => {
        const randomNumber = Math.floor(Math.random() * Object.keys(dbzDatabase.characters).length);
        const selectedCharacter = dbzDatabase.characters[randomNumber];
        setCharacterData(selectedCharacter);
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    const handleRandomizeCharacter = () => {
        fetchCharacters();
    };

    if (!characterData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{characterData.name}</h2>
            <img src={characterData.img} alt={characterData.name} />
            <p>About: {characterData.bio}</p>
            <p>Race: {characterData.race}</p>
            {/*<p>Height: {characterData.height}</p>
            <p>Weight: {characterData.weight}</p>
            <p>Birth Date: {characterData.birthDate}</p>
            <p>Death Dates: {characterData.deathDates.join(', ')}</p>
            <p>Alliegiance: {characterData.alliegiance.join(', ')}</p>
            <p>Relatives: {characterData.relatives.join(', ')}</p>*/}

            <button type="button" onClick={handleRandomizeCharacter} className="btn">Randomize Character</button>
        </div>
    );
};

export default MainPageJson;
