<script>
import AppCard from './AppCard.vue';
import { store } from '../store';

export default {
    components: { AppCard },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="featured-products text-center py-5">
        <div class="container">
            <h2 class="title d-flex align-items-center justify-content-center gap-4 mb-1">Featured products</h2>
            <p class="mb-4">Must have products from our top sellers</p>
            <ul class="list-group list-group-horizontal justify-content-center mb-3">
                <li class="list-group-item px-5 active">Men</li>
                <li class="list-group-item px-5">Women</li>
                <li class="list-group-item px-5">Accessories</li>
            </ul>
            <div class="products d-flex align-items-center justify-content-center">
                <div class="col" v-for="(product, index) in store.featuredProducts" :key="index">
                    <AppCard :item="product" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 37px;

    &::before {
        content: '';
        display: block;
        height: 1px;
        max-width: 100%;
        background-color: lightgray;
        flex-grow: 1;
    }

    &::after {
        content: '';
        display: block;
        height: 1px;
        max-width: 100%;
        background-color: lightgray;
        flex-grow: 1;
    }
}

.list-group-item {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    background-color: #F6F6F6;

    &:hover {
        background-color: white;
        cursor: pointer;
    }
}

.list-group-item.active {
    background-color: white;
    color: black;
    border: 1px solid rgba(211, 211, 211, 0.823);
}
</style>