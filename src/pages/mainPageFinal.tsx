import { ICharacterGetter } from "../interfaces/ICharacterGetter";
import React, {useEffect, useState } from "react";
import { Character } from "../types/character";

interface MainPageFinalProps {
    characterGetter: ICharacterGetter;
}

export const MainPageFinal = ({
    characterGetter
}: MainPageFinalProps) => {
    const [characterData, setCharacterData] = useState<Character | null>(null);
    const fetchData = async () => {
        try {
            const data = await characterGetter.fetchCharacter();
            setCharacterData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRandomizeCharacter = () => {
        fetchData();
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
    
}