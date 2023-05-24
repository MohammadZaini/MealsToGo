import { auth } from "../../../firebase-config";
import { signInWithEmailAndPassword } from "@firebase/auth";

export const loginRequest = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);