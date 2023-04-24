<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
    hero: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <button @click="router.push(`/hero/${hero.id}`)" class="card" :class="`is-${hero.type}`">
        <picture class="card__img">
            <img :src="hero.imgPath" alt="">
        </picture>
        <span class="card__desc">
            <p>{{ hero.name }}</p>
        </span>
    </button>
</template>
<style lang="scss" scoped>
.card {
    display: grid;
    grid-template-rows: 1fr max-content;
    background-color: white;
    border-radius: 4px;
    padding: .2rem;
    text-decoration: none;
    cursor: pointer;

    transform: translateZ(0);
    backface-visibility: hidden;
    transition: transform .2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    &.is-tank {
        .card__desc::before {
            background-image: url('../assets/icons/tank-icon.svg');
        }
    }

    &.is-damage {
        .card__desc::before {
            background-image: url('../assets/icons/damage-icon.svg');
        }
    }

    &.is-support {
        .card__desc::before {
            background-image: url('../assets/icons/tank-icon.svg');
        }
    }

    &__img {
        display: block;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__desc {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        padding: .3rem;

        &::before {
            content: "";
            width: 24px;
            height: 24px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        p {
            font-size: 18px;
            text-transform: uppercase;
            font-weight: 700;
            color: #242424;
            line-height: 1;
        }

        img {
            width: 24px;
            height: 24px;
            object-fit: contain;
        }
    }
}
</style>