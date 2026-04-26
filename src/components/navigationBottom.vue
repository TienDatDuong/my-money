<script setup>
import { MENU_BOTTOM } from '@/constants'
</script>
<template>
    <footer id="footer" class="bg-white h-16 t-1 align-center justify-between">
        <ul class="flex w-full justify-around pt-4">
            <li v-for="item in MENU_BOTTOM" :key="item.name">
                <router-link :to="item.route.param" class="flex flex-col items-center text-sm">
                    <font-awesome-icon :icon="item.icon" />
                    <span>{{ item.name }}</span>
                </router-link>
            </li>
        </ul>
        <div>
            <span class="w-16 bg-blend-color"></span>
        </div>
    </footer>
</template>
<style scoped>
    footer#footer::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;
        width: 60px;
        height: 30px;
        background-color: var(--dark-light);
    }

    footer#footer::after {
        content: "+";
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        width: 48px;
        background-color: blue;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 24px;
        font-weight: bold;
        border-radius: 100%;
        cursor: pointer;
    }

    footer#footer ul li:nth-child(2) {
        margin-right: 5%;
    }

    footer#footer ul li:nth-child(3) {
        margin-left: 5;
    }
</style>