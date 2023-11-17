<script>

</script>

<template>
    <section class="hero">
        <div class="container-fluid px-0 position-relative">
            <div class="notice d-flex flex-column align-items-center">
                <h1 class="mb-1">Brand New Arrivals</h1>
                <p class="mb-4 text-uppercase">New collection from New York</p>
                <div class="button-group d-flex align-items-center gap-3">
                    <button type="button" class="btn text-uppercase px-4 button-light">View All</button>
                    <button type="button" class="btn text-uppercase px-4 button-light">Lookbook</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container-fluid {
    height: 440px;
    background-image: url("/home1_slide_three_bg_2.jpg");
    background-size: cover;
    background-position: center;

    .notice {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;

        h1 {
            font-size: 60px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
        }

        .button-group .button-light {
            background-color: rgba(255, 255, 255, 0.171);
            border: 1px solid white;
            border-radius: 17px;
            color: white;
            font-size: 12px;
            font-weight: 500;

            &:hover {
                background-color: transparent;
            }
        }
    }
}
</style>