import {ref} from "vue";
import {firebaseAuth} from "../config/firebase";
const user = ref(firebaseAuth.currentUser);

firebaseAuth.onAuthStateChanged((currentUser) => {
    if(currentUser) user.value = currentUser;
});

export const useUser = () => {
    return {user};
}