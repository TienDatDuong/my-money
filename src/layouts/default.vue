<script setup>
import navigationBottom from '../components/navigationBottom.vue';
</script>
<template>
    <div>
        <h1>Default Layout</h1>
        <slot />
        <navigation-bottom class="fixed bottom-0 left-0 right-0" />
    </div>
</template>