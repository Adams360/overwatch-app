<script setup>
import { ref, onBeforeMount, computed, watch } from 'vue'

import FilterList from '@/components/FilterList.vue'
import HeroCard from '@/components/HeroCard.vue'

const fetchHeroes = async () => {
    const response = await fetch('./src/data/heroes.json')
    const data = await response.json()
    return data.heroes
}

const heroes = ref([])
const selectedType = ref('all')
const query = ref('')
const filteredHeroes = ref([])
const searchedHeroes = ref([])

onBeforeMount(async () => {
    heroes.value = await fetchHeroes()
    filteredHeroes.value = heroes.value
    searchedHeroes.value = filteredHeroes.value
})

const filterHeroes = (type) => {
    selectedType.value = type
    if (type === 'all') {
        filteredHeroes.value = heroes.value
    } else {
        filteredHeroes.value = heroes.value.filter(hero => hero.type === type)
    }
    query.value = ''
    searchedHeroes.value = filteredHeroes.value
}

const hasResults = computed(() => {
  return searchedHeroes.value.length > 0
})

watch(query, (newQuery) => {
    // when the search query changes, filter heroes based on the query string
    searchedHeroes.value = filteredHeroes.value.filter(hero => hero.name.toLowerCase().includes(newQuery.toLowerCase()))
})
</script>

<template>
    <FilterList @filterHeroes="filterHeroes" />

    <input type="text" placeholder="Search for heroes..." v-model="query">

    <TransitionGroup class="cards reorder" name="list" tag="ul">
        <li v-for="hero in searchedHeroes" :key="hero.id">
            <HeroCard :hero="hero" />
        </li>
        <p v-if="!hasResults">No Results Found</p>
    </TransitionGroup>
</template>
<styles lang="scss" scoped>
.cards {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(250px, 1fr);
}

input {
    display: block;
    padding: .8rem .5rem;
    font-size: 1.2rem;
    width: 53%;
    font-family: inherit;
    margin: 0 auto 2rem;
}


.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</styles>