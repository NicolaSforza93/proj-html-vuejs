<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            posts: ['Aenean lobortis sapien enim viverra', 'Duis ac massa semper maximus', 'Nunc fermint nulla eu justo sem id', 'Aliquam posuere magna eget nibh', 'Cras ac nulla ac consecte rutrum', 'Fusce mattis nunc ut aliquam'],
            tags: ['Black', 'boots', 'Brown', 'Casual', 'D&G', 'Fabric', 'flowers', 'Grey', 'hat', 'Hipster', 'lines', 'multi-purpose', 'New Tork', 'Outdoors', 'red', 'responsive', 'summer', 'sweater', 'Travel', 'Warm', 'White', 'winter']
        }
    },
}

</script>

<template>
    <footer class="pt-5 text-white">
        <div class="container mb-5 gap-4">
            <div class="d-flex flex-column gap-5">
                <figure class="mb-0">
                    <img class="logo" src="/public/classic_shop_logo_footer.png" alt="">
                </figure>
                <address class="text-white mb-0">
                    12345 North Main Street, <br>
                    New York, NY 555555 <br>
                    Phone: 1.800.555.6789 <br>
                    Email: info@company.com <br>
                    Web: Theme-fusion.com
                </address>
                <ul class="d-flex align-items-center gap-3 mb-0 px-0">
                    <li v-for="(Icon, index) in store.socialIcons" :key="index">
                        <a href="#">
                            <font-awesome-icon :icon="Icon" class="text-white" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h6 class="widget-title text-uppercase mb-3">{{ store.widget[2].title }}</h6>
                <ul class="product-list ps-0 mb-0">
                    <li class="d-flex py-2" v-for="(product, index) in store.widget[2].products" :key="index">
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
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h6 class="text-uppercase mb-4">Recent posts</h6>
                <ul class="mb-0 px-0">
                    <li v-for="(post, index) in posts" :key="index" class="post p-1">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" class="arrow me-2" />
                        <a href="#" class="text-decoration-none text-white">
                            {{ post }}
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h6 class="text-uppercase mb-4">Tags</h6>
                <ul class="mb-0 px-0 d-flex flex-wrap gap-1">
                    <li class="tag p-1" v-for="(tag, index) in tags" :key="index">
                        <a href="#" class="text-decoration-none text-white">
                            {{ tag }}
                        </a>
                    </li>
                </ul>

            </div>
        </div>

        <section class="copyright py-4">
            <div class="d-flex flex-column align-items-center">
                <p class="mb-2">© Copyright 2012 - 2020 | Avada Theme by Theme Fusion | All Rights Reserved | Powered by
                    WordPress</p>
                <figure class="payments mb-0">
                    <img src="/public/payment_cards_footer.png" alt="">
                </figure>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

footer {
    background-color: #2C2E32;
}

.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.logo {
    width: 165px;
}

address {
    font-size: 15px;
}

.post {
    border-bottom: 1px solid rgba(211, 211, 211, 0.116);
    font-size: 14px;

    .arrow {
        font-size: 9px;
    }
}

.tag {
    border: 1px solid rgba(211, 211, 211, 0.116);
    font-size: 13px;
}

.copyright {
    background-color: #1D1F22;

    p {
        font-size: 13px;
    }

    .payments {
        width: 220px;
    }
}

.product-list li {
    font-size: 15px;
    border-bottom: 1px solid rgba(211, 211, 211, 0.116);

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