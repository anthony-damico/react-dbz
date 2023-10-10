import { db } from './firebase'
import * as firebase from 'firebase/app';
import {addDoc, collection} from "firebase/firestore";

export const addUser = async () => {
    try {
        const docRef = await addDoc(collection(db, 'users'), {
            first: 'Ada',
            last: 'Lovelace92',
            born: 1815,
        });
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};