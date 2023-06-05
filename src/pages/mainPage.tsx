import React, { useEffect, useState } from "react";
import { Character } from "../types/character";
import { listOfCharacters } from "../types/characterDictionary";

const MainPage: React.FC = () => {
    const [characterData, setCharacterData] = useState<Character | null>(null);

    const fetchCharacter = async () => {
        const randomNumber = Math.floor(Math.random() * Object.keys(listOfCharacters).length);
        const character = listOfCharacters[randomNumber];
        const baseUrl = `https://unofficialdbzapi.cyclic.app/api/${character}`;
        console.log(baseUrl);

        try {
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Request failed');
            }
            const data = await response.json();
            setCharacterData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCharacter();
    }, []);

    const handleRandomizeCharacter = () => {
        fetchCharacter();
    };

    if (!characterData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{characterData.name}</h2>
            <img src={characterData.pic} alt={characterData.name} />
            <p>About: {characterData.about}</p>
            <p>Race: {characterData.race}</p>
            <p>Height: {characterData.height}</p>
            <p>Weight: {characterData.weight}</p>
            <p>Birth Date: {characterData.birthDate}</p>
            {/*<p>Death Dates: {characterData.deathDates.join(', ')}</p>
            <p>Alliegiance: {characterData.alliegiance.join(', ')}</p>
            <p>Relatives: {characterData.relatives.join(', ')}</p>*/}

            <button type="button" onClick={handleRandomizeCharacter} className="btn">Randomize Character</button>
        </div>
    );
};

export default MainPage;
