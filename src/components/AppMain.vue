<script>
import AppHero from './AppHero.vue';
import AppCard from './AppCard.vue';
import AppSlider from './AppSlider.vue';
import AppCollections from './AppCollections.vue';
import AppPromo from './AppPromo.vue';
import AppTestimonial from './AppTestimonial.vue';
import AppBlog from './AppBlog.vue';
import AppWidget from './AppWidget.vue';
import AppBrand from './AppBrand.vue';
import AppSubscription from './AppSubscription.vue';
import { store } from '../store';

export default {
    components: { AppHero, AppCard, AppSlider, AppCollections, AppPromo, AppTestimonial, AppBlog, AppWidget, AppBrand, AppSubscription },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <AppHero />

    <section class="featured-products text-center py-5">
        <div class="container">
            <h2 class="title d-flex align-items-center justify-content-center gap-4 mb-1">Featured products</h2>
            <p class="mb-4">Must have products from our top sellers</p>
            <ul class="list-group list-group-horizontal justify-content-center mb-3">
                <li class="list-group-item px-5">Men</li>
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

    <AppCollections />

    <section class="best-seller text-center py-5">
        <div class="container">
            <h2 class="title d-flex align-items-center justify-content-center gap-4 mb-1">Best Seller</h2>
            <p class="mb-4">Must have products from our top sellers</p>
            <div class="d-flex align-items-center justify-content-center">
                <AppSlider :item="store.sliderMd" />
            </div>
        </div>
    </section>

    <AppPromo />

    <section class=" text-center py-5">
        <div class="container">
            <h2 class="title d-flex align-items-center justify-content-center gap-4 mb-1">New Arrivals</h2>
            <p class="mb-4">Brand new products from top designers</p>
        </div>
        <div class="container-fluid px-0 d-flex align-items-center justify-content-center">
            <AppSlider :item="store.sliderLg" />
        </div>
    </section>

    <AppTestimonial />

    <AppBlog />

    <AppWidget />

    <AppBrand />

    <AppSubscription />
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

    &:hover {
        background-color: #F6F6F6;
        cursor: pointer;
    }
}
</style>