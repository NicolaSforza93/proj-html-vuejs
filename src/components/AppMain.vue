<script>
import AppHero from './AppHero.vue';
import AppCard from './AppCard.vue';
import { store } from '../store';

export default {
    components: { AppHero, AppCard },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <AppHero />
    <section class="text-center py-5">
        <h2 class="title d-flex align-items-center justify-content-center gap-4 mb-1">Featured products</h2>
        <p class="mb-4">Must have products from our top sellers</p>
        <ul class="list-group list-group-horizontal justify-content-center mb-3">
            <li class="list-group-item px-5">Men</li>
            <li class="list-group-item px-5">Women</li>
            <li class="list-group-item px-5">Accessories</li>
        </ul>
        <div class="products d-flex align-items-center justify-content-center">
            <template v-for="(product, index) in store.featuredProducts" :key="index">
                <AppCard :item="product" />
            </template>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.title {
    font-weight: 700;
    font-size: 37px;

    &::before {
        content: '';
        display: block;
        height: 1px;
        max-width: 180px;
        background-color: lightgray;
        flex-grow: 1;
    }

    &::after {
        content: '';
        display: block;
        height: 1px;
        max-width: 180px;
        background-color: lightgray;
        flex-grow: 1;
    }
}

.list-group-item {
    font-weight: 600;

    &:hover {
        background-color: #F6F6F6;
        cursor: pointer;
    }
}
</style>