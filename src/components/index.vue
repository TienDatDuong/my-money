<template>
    <div>{{ user.displayName }}</div>
</template>

<script setup>
import {ref} from "vue";
import { useUser } from "../composables/useUser";   

const { user } = useUser();

</script>