<script setup>
import { defineEmits } from 'vue'
const emits = defineEmits(['filterHeroes'])
</script>

<template>
    <ul>
        <li>
            <button @click="$emit('filterHeroes', 'all')" class="all-btn">All</button>
        </li>
        <li>
            <button @click="$emit('filterHeroes', 'tank')" class="tank-btn" >Tank</button>
        </li>
        <li>
            <button @click="$emit('filterHeroes', 'damage')" class="damage-btn">Damage</button>
        </li>
        <li>
            <button @click="$emit('filterHeroes', 'support')" class="support-btn">Support</button>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    justify-content: center;
    gap: .5rem;
    padding: 2rem 1rem;
    flex-wrap: wrap;
    min-height: 60px;

    li {
        button {
            cursor: pointer;
            padding: 1rem 2rem;
            min-width: 100px;
            height: 100%;
            font-family: inherit;
            text-align: center;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 1.5rem;
            border-radius: .4em;
            background-color: hsla(0, 0%, 100%, .7);
            color: #242424;

            transition: background-color .2s ease-in-out, transform .2s ease-in-out;

            display: flex;
            align-items: center;
            gap: .5em;

            &:hover {
                background-color: hsla(0, 0%, 100%, 1);
            }

            &:active {
                transform: scale(.98);
            }

            &:not(.all-btn)::before {
                content: "";
                width: 42px;
                height: 42px;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }

            &.tank-btn {
                &::before {
                    background-image: url('../assets/icons/tank-icon.svg');
                }
            }

            &.damage-btn {
                &::before {
                    background-image: url('../assets/icons/damage-icon.svg');
                }
            }

            &.support-btn {
                &::before {
                    background-image: url('../assets/icons/support-icon.svg');
                }
            }

        }
    }
}
</style>
