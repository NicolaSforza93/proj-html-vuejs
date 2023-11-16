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
    <div class="card p-2">
        <figure class="position-relative mb-0">
            <img :src="item.image" class="card-img-top" alt="...">
            <div class="overlay">
                <font-awesome-icon icon="fa-regular fa-square-check" class="check" />
            </div>
        </figure>
        <div class="card-body text-start">
            <p class="name mb-0 text-nowrap">{{ item.name }}</p>
            <p class="filter mb-0">{{ item.filter }}</p>
            <span v-if="item.priceCrossed" class="price-crossed text-decoration-line-through me-2">${{ item.priceCrossed
            }}</span>
            <span class="price">${{ item.price }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    border: none;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0px;
    background: linear-gradient(#6689CF, #E2A9D1);
    opacity: 0;

    .check {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 20px;
        background-color: black;
        padding: 15px;
        border-radius: 50%;
    }
}

.overlay:hover {
    opacity: 0.9;
    cursor: pointer;
}

.card-body {
    .name {
        font-weight: 700;
        font-size: 14px;
    }

    .filter {
        font-size: 12px;
        color: $gray-color;
    }

    .price-crossed {
        font-size: 12px;
        color: $skyblue-color;
        font-weight: 500;
    }

    .price {
        font-size: 14px;
        color: $skyblue-color;
        font-weight: 500;
    }
}
</style>
