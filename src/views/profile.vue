<script setup>
import { reactive } from "vue";
import { useUser } from "../composables/useUser";

    const { user } = useUser();
    console.log("user", user);

    const profileOptions = reactive([
        {
            name: " My Wallet",
            icon: "fa-solid fa-wallet",
            route: {
                name: "wallet",
                param: "/wallet"
            }
        },
        {
            name: "Tools",
            icon: "fa-solid fa-toolbox",
            route: {
                name: "tools",
                param: "/tools"
            }
        },
        {
            name: "Privacy",
            icon: "fa-solid fa-lock",
            route: {
                name: "privacy",
                param: "/privacy"
            }
        },
        {
            name: "About",
            icon: "fa-solid fa-info",
            route: {
                name: "about",
                param: "/about"
            }
        },
        {
            name: "Logout",
            icon: "fa-solid fa-arrow-right-from-bracket",
            route: {
                name: "login",
                param: "/login"
            }
        }
    ]);
</script>

<template>
    <div>
        <!-- Start : Info -->
        <div class="row">
            <div class="container mx-auto p-8">
                <div class="text-center">
                    <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
                        <img src="../assets/images/IMG_3259.JPG" alt="Logo" class="w-full h-full object-cover">
                        </div>
                        <div class="text-bold text-2xl text-primary mt-3 text-blue-500">{{ user.displayName }}</div>
                    <div class="font-semibold text-gray-400 mt-1">{{ user.email }}</div>
                </div>
            </div>
        </div>
        <!-- Start : Menu -->
        <div class="row">
            <div class="container mx-auto px-8">
                <div class="grid grid-cols-1">
                    <div class="col-span-1">
                        <h3 class="font-bold text-xl">General</h3>
                    </div>
                </div>
                <div class="grid grid-cols-1 mt-2">
                    <div class="col-span-1">
                        <ul>
                            <li
                            class="border border-gray-600 p-1 mb-2 rounded-md hover:bg-gray-300"
                            v-for="(item, index) in profileOptions" :key="item.name"
                            :class="{'text-red-400': index === profileOptions.length - 1}"
                            >
                                <router-link :to="item.route.param" class="flex justify-between items-center py-3">
                                    <div  class="flex items-center text-left ">
                                        <font-awesome-icon :icon="item.icon"/>
                                        <span class="ml-3">{{ item.name }}</span>
                                    </div>
                                    <div  class="flex items-center text-right">
                                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>