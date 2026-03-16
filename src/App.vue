<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { PUBLIC_LAYOUT } from '@/constants';
import { getStorage, ref } from "firebase/storage";
import {firebasestorage} from "./config/firebase"

const route = useRoute()
console.log("route.meta", route.meta)

const storageRef = getStorage(firebasestorage,'transaction');
console.log("storageRef", storageRef)
const layout = computed(() => (route.meta.layout || PUBLIC_LAYOUT) + '-layout')
</script>

<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<style scoped>

</style>
