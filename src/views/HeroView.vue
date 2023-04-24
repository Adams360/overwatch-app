<script setup>
import { computed } from 'vue'
import heroes from '../data/heroes.json'

const props = defineProps({
    id: {
        type: [String],
        required: true
    }
})

const hero = computed(() => {
    return heroes.heroes.find((h) => h.id === Number(props.id)) || {}
})


</script>

<template>
    <div class="hero-content">
        <h1 class="heading">
            {{ hero?.name }}
        </h1>
        <p class="description">
            {{ hero?.description }}
        </p>
        <p class="location">
            {{ hero?.location }}
        </p>
        <RouterLink to="/" class="btn">
            Go Back
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.hero-content {
    text-align: center;
    padding: 3rem;

    .heading {
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 3px;
    }

    .description {
        font-size: 2rem;
        line-height: 1;
        margin-bottom: 5rem;
    }

    .btn {
        background-color: rgb(240, 100, 20);
        color: white;
        font-size: 1.4rem;
        text-transform: uppercase;
        font-weight: 700;
        text-decoration: none;
        padding: 1rem 3rem;
        border-radius: 5px;

    }
}
</style>
