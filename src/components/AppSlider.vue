<script>

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="slider-wrapper w-100 position-relative">
        <div class="ctrl ctrl-prev">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </div>
        <div class="slide d-flex">
            <figure class="position-relative mb-0" v-for="(slide, index) in item">
                <img :src="slide.image" alt="">
                <div class="overlay text-white d-flex flex-column p-3">
                    <div class="flex-grow-1 d-flex flex-column justify-content-center">
                        <p class="name mb-0 text-nowrap">{{ slide.name }}</p>
                        <p class="filter mb-0">{{ slide.filter }}</p>
                        <div>
                            <span v-if="slide.priceCrossed" class="price-crossed text-decoration-line-through me-2">${{
                                slide.priceCrossed
                            }}</span>
                            <span class="price">${{ slide.price }}</span>
                        </div>
                    </div>
                    <ul class="icons-bottom d-flex justify-content-between mb-0 ps-0">
                        <li class="d-flex align-items-center gap-1">
                            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                            <a href="#" class="text-decoration-none text-white">Add to cart</a>
                        </li>
                        <li class="d-flex align-items-center gap-1">
                            <font-awesome-icon icon="fa-solid fa-list" />
                            <a href="#" class="text-decoration-none text-white">Details</a>
                        </li>
                    </ul>
                </div>
            </figure>
        </div>
        <div class="ctrl ctrl-next">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ctrl {
    position: absolute;
    top: 50%;
    transform: translate(-50%);
    background-color: #C1C1C1;
    line-height: 19px;
    padding: 12px 7px;
    cursor: pointer;
    color: white;
    font-size: 10px;
}

.ctrl.ctrl-prev {
    left: 10px;
    z-index: 50;
}

.ctrl.ctrl-next {
    right: -10px;
    z-index: 50;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0px;
    background: linear-gradient(#6689CF, #E2A9D1);
    opacity: 0;

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    .name,
    .price,
    .price-crossed {
        font-size: 15px;
        font-weight: 600;
    }

    .filter {
        font-size: 13px;
        font-weight: 400;
    }

    .icons-bottom {
        font-size: 12px;
    }
}
</style>
