import { auth } from "../../../firebase-config";

export const loginRequest = (email, password) =>
    auth().signInWithEmailAndPassword(email, password);