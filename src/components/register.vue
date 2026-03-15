<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <form @submit="onSubmit" class="space-y-6">
                <div class="row">
                    <label for="fullName" class="font-semibold">Full Name</label>
                    <input type="text" id="fullName" placeholder="Full Name" class="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="row">
                    <label for="email" class="font-semibold">Email</label>
                    <input type="email" id="email" placeholder="Email" class="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="row">
                    <label for="password" class="font-semibold">Password</label>
                    <input type="password"
                    id="password"
                    placeholder="Password"
                    autocomplete="current-password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="row">
                    <button type="submit" class="bg--primary hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Register
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
    const onSubmit = (event) => {
        event.preventDefault();
        // Handle registration logic here
    };

</script>