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
    <section class="blog text-center py-5">
        <div class="container">
            <h2 class="title d-flex align-items-center justify-content-center gap-4 mb-1">From Our Blog</h2>
            <p class="mb-5">The latest Classic Shop news</p>
            <div class="d-flex gap-3">
                <div class="card" v-for="(item, index) in store.blog" :key="index">
                    <img :src="item.image" class="card-img-top rounded-0" alt="...">
                    <div class="card-body d-flex flex-column align-items-start px-0 text-start">
                        <h6 class="card-title mb-1">{{ item.title }}</h6>
                        <div class="date d-flex gap-1 mb-2">
                            <p class="mb-0">{{ item.date }} |</p>
                            <p class="mb-0">{{ item.comments }}</p>
                        </div>
                        <p class="paragraph mb-0">{{ item.paragraph }}</p>
                    </div>
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

.card {
    border: none;

    .card-body {
        .card-title {
            font-weight: 700;
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
        }

        .date {
            font-size: 12px;
        }

        .paragraph {
            font-size: 13px;
        }

    }
}
</style>