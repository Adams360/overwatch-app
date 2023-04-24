<script setup>
import HeroesList from '@/components/HeroesList.vue'
import { ref } from 'vue';

const showP = ref(false)

</script>

<template>
    <HeroesList />
        <div v-if="showP">
            <p>Hello, Ninjas</p>
        </div>
</template>

<style scoped></style>
