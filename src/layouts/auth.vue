<template>
    <div>
        <navigation-brand />
            <slot />
    </div>
</template>
<script setup>
    import navigationBrand from '../components/navigationBrand.vue';
</script>