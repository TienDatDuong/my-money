import {ref} from 'vue'
import { firebaseAuth } from '../config/firebase'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);
const isSuccess = ref(false);

export default async function signUp(email, password, fullName) {
    error.value = null;
    isPending.value = true;
    isSuccess.value = false;
    
    try {
        const response = await createUserWithEmailAndPassword(firebaseAuth, email, password,fullName)
        console.log("fullName", fullName)
        isPending.value = false;
        isSuccess.value = true;
        await updateProfile(firebaseAuth.currentUser, {
            displayName: fullName
        });
        console.log("Updated profile:", response);
        return { success: true, data: response };
    } catch (err) {
        //if()
        console.log("err.code", err.code)
        console.log("err", err)
        if (err.code === 'auth/email-already-in-use') {
            error.value = 'Email is already in use. Please try a different email.';
        }else{
            error.value = err.message || 'Could not complete the sign up';
        }
        isPending.value = false;
        return { success: false, error: error.value };
    }
}

export function useSignUp() {
    return {error, isPending, signUp, isSuccess};
}