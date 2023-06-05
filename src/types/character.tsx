export interface Character {
    name: string;
    pic: string;
    about: string;
    race: string;
    height: string;
    weight: string;
    birthDate: string;
    deathDates: { [key: string]: string };
   // alliegiance: string[];
   // relatives: string[];
};