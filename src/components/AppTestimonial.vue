<script>
export default {
    data() {
        return {
            show: true
        }
    }
}
</script>

<template>
    <section class="testimonial">
        <div class="container-fluid">
            <div class="container p-5">
                <div>
                    <div v-if="show" class="d-flex flex-column align-items-center gap-3">
                        <img src="/public/man_testimonial.png" alt="">
                        <blockquote class="text-white text-center">
                            <p>Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in voluptat. Donec vel
                                lacinia
                                sem,
                                vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip
                                hendrerit
                                bibendum.</p>
                            <p class="mb-0"><strong>DarÍo Pineda</strong>, Theme Fusion</p>
                        </blockquote>
                    </div>
                    <div v-else class="d-flex flex-column align-items-center gap-3">
                        <img src="/public/woman_testimonial.png" alt="">
                        <blockquote class="text-white text-center">
                            <p>Proin blandit metus vel magna dignissim varius. Morbi enim lorem, sollicitudin vitae ante
                                nec, rutrum venenatis neque. In mi augue, iaculis nec dui ac, condimentum consequat velit.
                                Ut et metus justo.</p>
                            <p class="mb-0"><strong>Lisa Smith</strong>, Theme Fusion</p>
                        </blockquote>
                    </div>
                    <div class="icons-circle d-flex justify-content-center text-white gap-2">
                        <font-awesome-icon icon="fa-solid fa-circle" @click="show = !show" />
                        <font-awesome-icon icon="fa-regular fa-circle" @click="show = !show" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container-fluid {
    background-image: url("/public/testimonials_home_1_bg.jpg");
    background-size: cover;
    background-position: center;
}

.testimonial img {
    width: 70px;
}

blockquote p:first-child {
    font-style: italic;
}

.icons-circle {
    font-size: 11px;
    cursor: pointer;
}
</style>