import { ICharacterGetter } from "../interfaces/ICharacterGetter";
import React, {useEffect, useState } from "react";
import { Character } from "../types/character";
import { IBaseCharacter } from "../interfaces/IBaseCharacter";
import { CharacterFromJson } from "../types/characterFromJson";

interface MainPageFinalProps {
    characterGetter: ICharacterGetter<Character> | ICharacterGetter<CharacterFromJson>;
}

export const MainPageFinal = ({
    characterGetter
}: MainPageFinalProps) => {
    const [characterData, setCharacterData] = useState<IBaseCharacter | null>(null);
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

    const CharacterDetailsComponent = characterGetter.CharacterDetails;
    
    return (
        <div>
            <CharacterDetailsComponent characterData={characterData} />

            <button type="button" onClick={handleRandomizeCharacter} className="btn">Randomize Character</button>
        </div>
    );
    
}