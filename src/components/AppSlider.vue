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
            <figure class="mb-0" v-for="(slide, index) in item">
                <img :src="slide.image" alt="">
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
</style>
