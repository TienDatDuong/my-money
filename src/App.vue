<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { PUBLIC_LAYOUT } from '@/constants';
import { collection, getDocs } from "firebase/firestore";
import { firebasestorage } from "./config/firebase"

const route = useRoute()
console.log("route.meta", route.meta)

const querySnapshot = ref(null)

onMounted(async () => {
  // Avoid async setup() by fetching data after mount.
    querySnapshot.value = await getDocs(collection(firebasestorage, "transaction"))
    const data = querySnapshot.value.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    })
    console.log("data", data)
    })

const layout = computed(() => (route.meta.layout || PUBLIC_LAYOUT) + '-layout')
console.log("Layout:", layout.value)
</script>

<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<style scoped>

</style>
