<script setup>
defineProps({
    hero: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <RouterLink :to="{ name: 'hero', params: { hero: hero.name } }" class="card" :class="`is-${hero.type}`">
        <picture class="card__img">
            <img :src="hero.imgPath" alt="">
        </picture>
        <span class="card__desc">
            <p>{{ hero.name }}</p>
        </span>
    </RouterLink>
</template>
<style lang="scss" scoped></style>