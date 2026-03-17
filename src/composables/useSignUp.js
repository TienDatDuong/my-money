import {ref} from 'vue'
import { firebaseAuth } from '../config/firebase'
import {createUserWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

export function useSignUp() {
    return {}
}

export default async function signUp(email, password) {
    error.value = null;
    isPending.value = true;
    
    try {
        console.log("email", email)
        console.log("password", password)
        const response = await createUserWithEmailAndPassword(firebaseAuth, email, password)
        console.log("response", response)
        isPending.value = false;
        return { success: true, data: response };
    } catch (err) {
        error.value = err.message || 'Could not complete the sign up';
        isPending.value = false;
        console.error("Sign up error:", err);
        return { success: false, error: error.value };
    }
}