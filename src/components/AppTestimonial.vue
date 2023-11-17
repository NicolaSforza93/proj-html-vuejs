<script>

</script>

<template>
    <section class="testimonial">
        <div class="container-fluid">
            <div class="container p-5 d-flex flex-column align-items-center gap-3">
                <img src="/public/man_testimonial.png" alt="">
                <blockquote class="text-white text-center">
                    <p>Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in voluptat. Donec vel lacinia sem,
                        vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip hendrerit
                        bibendum.</p>
                    <p class="mb-0"><strong>DarÍo Pineda</strong>, Theme Fusion</p>
                </blockquote>
                <div class="icons-circle d-flex text-white gap-2">
                    <font-awesome-icon icon="fa-solid fa-circle" />
                    <font-awesome-icon icon="fa-regular fa-circle" />
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
}
</style>