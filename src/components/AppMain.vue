<script>
import AppHero from './AppHero.vue';
import AppCard from './AppCard.vue';
import AppSlider from './AppSlider.vue';
import { store } from '../store';

export default {
    components: { AppHero, AppCard, AppSlider },
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

    <section class="collection">
        <div class="container-fluid px-0 d-flex">
            <div class="col winter position-relative">
                <div class="text d-flex flex-column justify-content-end align-items-center text-white">
                    <h1 class="mb-1 text-nowrap">Winter Colection</h1>
                    <p class="text-uppercase mb-2">Stylish and warm</p>
                    <button type="button" class="btn text-uppercase px-4 button-light">View More</button>
                </div>
            </div>
            <div class="col spring position-relative">
                <div class="text d-flex flex-column justify-content-end align-items-center text-white">
                    <h1 class="mb-1 text-nowrap">Winter Colection</h1>
                    <p class="text-uppercase mb-2">Bright and colorful</p>
                    <button type="button" class="btn text-uppercase px-4 button-light">View More</button>
                </div>
            </div>
            <div class="col autumn position-relative">
                <div class="text d-flex flex-column justify-content-end align-items-center text-white">
                    <h1 class="mb-1 text-nowrap">Winter Colection</h1>
                    <p class="text-uppercase mb-2">Rich and comfortable</p>
                    <button type="button" class="btn text-uppercase px-4 button-light">View More</button>
                </div>
            </div>
        </div>
        <section class="best-seller text-center py-5">
            <div class="container">
                <h2 class="title d-flex align-items-center justify-content-center gap-4 mb-1">Best Seller</h2>
                <p class="mb-4">Must have products from our top sellers</p>
                <div class="d-flex align-items-center justify-content-center">
                    <AppSlider />
                </div>
            </div>
        </section>

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
    font-weight: 600;

    &:hover {
        background-color: #F6F6F6;
        cursor: pointer;
    }
}

.collection {
    .container-fluid {
        height: 400px;
    }

    .winter {
        background-image: url('/winter_collection_bg.jpg');
    }

    .spring {
        background-image: url('/spring_collection_bg.jpg');
    }

    .autumn {
        background-image: url('/autumn_collection_bg.jpg');
    }

    .winter,
    .spring,
    .autumn {
        background-size: cover;
        background-position: center top;

        .text {
            position: absolute;
            top: 77%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        h1 {
            font-size: 30px;
        }

        p {
            font-size: 13px;
        }
    }

    .button-light {
        border: 1px solid white;
        border-radius: 17px;
        color: white;
        font-size: 10px;
        font-weight: 500;
    }
}
</style>