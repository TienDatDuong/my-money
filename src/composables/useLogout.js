import { ref } from 'vue'
import { signOut, getAuth } from "firebase/auth";

const error = ref(null);


export default async function logout() {
    error.value = null;
    console.log("logout")
    const auth = getAuth();
    try {
        const response = await signOut(auth);
        return response
    } catch (err) {
        console.log("err", err)
        error.value = err.message
    }
}

export function useLogout() {
    return { error, logout };
}