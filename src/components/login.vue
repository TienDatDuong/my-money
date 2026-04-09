<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <div class="text-center font-bold pb-4"><span v-if="error" class="text-red-500">{{ error }}</span></div>
            <form @submit="onSubmit" class="space-y-6">
                <div class="row">
                    <label for="email" class="font-semibold">Email</label>
                    <input type="email" id="email" v-model="dataUser.email" placeholder="Email" class="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="row">
                    <label for="password" class="font-semibold">Password</label>
                    <input type="password"
                    id="password"
                    v-model="dataUser.password"
                    placeholder="Password"
                    autocomplete="current-password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="row" v-if="!isPending">
                    <button @click="onSubmit" type="submit" class="bg--primary hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Login
                    </button>
                </div>
                <div class="row" v-else>
                    <button disabled type="submit" class="cursor-not-allowed bg--primary hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Loading...
                    </button>
                </div>
            </form>
            <div class="w-full text-center mt-6">
                <span class="font-semibold" >I'm already a member</span>
                <span class="ml-4 text--primary">
                    <router-link to="/register">Sign Up</router-link>
                </span>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {reactive, ref} from "vue"
    import { useSignIn } from "../composables/useSignIn";
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const dataUser = reactive({
        email: "",
        password: ""
    })

    const { signIn, error, isPending, isSuccess } = useSignIn();

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log("dataUser", dataUser)
        await signIn(dataUser.email, dataUser.password);
        if(isSuccess.value){
            console.log("User signed in successfully");
            // You can also reset the form here if needed
            dataUser.email = "";
            dataUser.password = "";
            router.push({name: 'profile'}); // Redirect to profile page after successful sign-in
        }
    };

</script>