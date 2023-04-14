<script setup>
import { ref, onMounted, computed } from 'vue'
import FilterList from '@/components/FilterList.vue'

import HeroCard from '@/components/HeroCard.vue'

const fetchHeroes = async () => {
    const response = await fetch('./src/data/heroes.json')
    const data = await response.json()
    return data.heroes
}

const heroes = ref([])
const selectedType = ref('all')

onMounted(async () => {
    heroes.value = await fetchHeroes()
})

const filteredHeroes = computed(() => 
selectedType.value === 'all' ? 
heroes.value : heroes.value.filter(hero => hero.type === selectedType.value))

const filterHeroes = (type) => {
    selectedType.value = type
}

</script>

<template>
    <FilterList @filterHeroes="filterHeroes" />
    <ul class="cards">
        <li v-for="hero in filteredHeroes" :key="hero.id">
            <HeroCard :hero="hero" />
        </li>
    </ul>
</template>
<styles lang="scss" scoped>
.cards {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(250px, 1fr);

    .card {
        display: grid;
        grid-template-rows: 1fr max-content;
        background-color: white;
        border-radius: 4px;
        padding: .2rem;
        text-decoration: none;

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
}
</styles>