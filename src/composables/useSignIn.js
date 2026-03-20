import {ref} from 'vue'
import { firebaseAuth } from '../config/firebase'
import {signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);
const isSuccess = ref(false);

export default async function signIn(email, password) {
    error.value = null;
    isPending.value = true;
    isSuccess.value = false;
    
    try {
        const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
        isPending.value = false;
        isSuccess.value = true;
        return { success: true, data: response };
    } catch (err) {
        isPending.value = false;
        error.value = err.message || 'Could not complete the sign in';
        return { success: false, error: error.value };
    }
}

export function useSignIn() {
    return {error, isPending, signIn, isSuccess};
}