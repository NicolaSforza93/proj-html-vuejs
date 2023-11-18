<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <section class="widget border-top py-5">
        <div class="container">
            <div v-for="(item, index) in store.widget" :key="index">
                <h6 class="widget-title text-uppercase mb-3">{{ item.title }}</h6>
                <ul class="product-list ps-0 mb-0">
                    <li class="d-flex py-2 border-bottom" v-for="(product, index) in item.products" :key="index">
                        <img class="product-image order-1" :src="product.image" alt="">
                        <div class="flex-grow-1">
                            <p class="product-name mb-0">{{ product.name }}</p>
                            <span class="rating-stars">
                                <font-awesome-icon icon="fa-solid fa-star" v-for="n in product.starsRating" :key="n" />
                            </span>
                            <div class="product-price">
                                <span class="price-crossed text-decoration-line-through me-2" v-if="product.priceCrossed">
                                    ${{ product.priceCrossed }}
                                </span>
                                <span class="price" v-if="product.price"
                                    :class="product.underline === true ? 'text-decoration-underline' : ''">${{
                                        product.price
                                    }}</span>
                            </div>
                            <p class="reviewer">{{ product.reviewer }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;

    .widget-title {
        font-size: 18px;
        font-weight: 400;
        color: $gray-color;

    }
}

.product-list {
    font-size: 15px;

    .product-image {
        max-width: 58px;
    }

    .rating-stars {
        color: $skyblue-color;
    }

    .product-price {
        font-weight: 700
    }
}
</style>