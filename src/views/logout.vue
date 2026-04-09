<script setup>
    import { onMounted } from "vue";
    import { useLogout } from "../composables/useLogout";
    import { useRouter } from "vue-router";
    const router = useRouter();
    const { logout, error } = useLogout();

    const  outPage = async () => {
            await logout();
            if (!error.value){
                    router.push({ name: 'login', params: {} });
            }
    }
    onMounted(() => {
        outPage();
    })
</script>

<template>
    Logout
</template>