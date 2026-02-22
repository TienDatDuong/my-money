<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { PUBLIC_LAYOUT } from '@/constants';

const route = useRoute()
console.log("route.meta", route.meta)
const layout = computed(() => (route.meta.layout || PUBLIC_LAYOUT) + '-layout')
</script>

<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<style scoped>

</style>
