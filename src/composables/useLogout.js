import { ref } from 'vue'
import { firebaseAuth } from '../config/firebase'
import { signOut, updateProfile } from "firebase/auth";

const error = ref(null);


export default async function logout() {
    error.value = null;

    try {
        const response = await signOut(firebaseAuth, email, password, fullName)
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
        } else {
            error.value = err.message || 'Could not complete the sign up';
        }
        return { success: false, error: error.value };
    }
}

export function useSignUp() {
    return { error, signUp };
}