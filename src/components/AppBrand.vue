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
    <section class="brand-logos py-5">
        <div class="container">
            <h6 class="title text-uppercase text-center mb-4">Brand logos</h6>
            <div class="d-flex gap-5">
                <figure class="mb-0 w-100" v-for="(brand, index) in store.brands" :key="index">
                    <img :src="brand.image" alt="">
                </figure>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.brand-logos {
    background-color: $white-color;

    .title {
        font-size: 18px;
        color: $gray-color;
    }
}
</style>