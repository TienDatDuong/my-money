<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <div class="text-center font-bold pb-4"><span v-if="error" class="text-red-500">{{ error }}</span></div>
            <form @submit="onSubmit" class="space-y-6">
                <div class="row">
                    <label for="fullName" class="font-semibold">Full Name</label><span class="px-2 text-red-500">*</span>
                    <input type="text" id="fullName" v-model="dataUser.fullName" placeholder="Full Name" class="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <span v-if="errorForm?.checkEmptyName" class="text-red-500" style="margin-top: -20px;">{{ errorForm.checkEmptyName }}</span>
                <div class="row">
                    <label for="email" class="font-semibold">Email</label><span class="px-2 text-red-500">*</span>
                    <input type="email" id="email" v-model="dataUser.email" placeholder="Email" class="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <span v-if="errorForm?.email" class="text-red-500" style="margin-top: -20px;">{{ errorForm.email }}</span>
                <div class="row">
                    <label for="password" class="font-semibold">Password</label><span class="px-2 text-red-500">*</span>
                    <input type="password"
                    id="password"
                    v-model="dataUser.password"
                    placeholder="Password"
                    autocomplete="current-password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <span v-if="errorForm?.password" class="text-red-500" style="margin-top: -20px;">{{ errorForm.password }}</span>
                <div class="row" v-if="!isPending">
                    <button @click="onSubmit" type="submit" class="bg--primary hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Register
                    </button>
                </div>
                <div class="row" v-else>
                    <button @click="onSubmit" disabled type="submit" class="cursor-not-allowed bg--primary hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Loading...
                    </button>
                </div>
            </form>
            <div class="w-full text-center mt-6">
                <span class="font-semibold" >I'm already a member</span>
                <span class="ml-4 text--primary">
                    <router-link to="/login">Sign in</router-link>
                </span>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {reactive, ref} from "vue"
    import { formatDate } from "../utils/time";
    import { useSignUp } from "../composables/useSignUp";
    import { useRouter } from 'vue-router';
import singupValidation from "../utils/validationSignup";

    const router = useRouter();
    const errorForm = ref(null);
    const dataUser = reactive({
        fullName: "",
        email: "",
        password: "",
        time: formatDate(new Date())
    })

    const { signUp, error, isPending, isSuccess } = useSignUp();

    const onSubmit = async (event) => {
        event.preventDefault();
        const validation = new singupValidation(dataUser.email, dataUser.password, dataUser.fullName);
        errorForm.value = validation.checkValidation();
        console.log('Object.keys(errorForm.value).length > 0', Object.keys(errorForm.value).length)
        if(Object.keys(errorForm.value).length > 0) {
            return;
        }
        console.log("dataUser", dataUser)
        await signUp(dataUser.email, dataUser.password, dataUser.fullName);
        if(isSuccess.value){
            console.log("User registered successfully");
            // You can also reset the form here if needed
            dataUser.fullName = "";
            dataUser.email = "";
            dataUser.password = "";
            router.push('/login'); // Redirect to login page after successful registration
        }
    };

</script>
<style scoped>
.row{
    margin-bottom: 12px !important;
}
</style>