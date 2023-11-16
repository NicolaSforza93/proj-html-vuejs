<script>

</script>

<template>
    <section class="promo">
        <div class="container-fluid">
            <div class="container d-flex gap-4 py-5">
                <div class="promo-box-1 w-100 d-flex flex-column align-items-start justify-content-center text-white ps-4">
                    <h2>70% Off</h2>
                    <p>Vivamus tempor leo lacus, feugiat <br> ut magna aliquam erat.</p>
                    <button type="button" class="btn text-uppercase px-4 button-light">View More</button>
                </div>

                <div class="promo-box-2 w-100 d-flex flex-column align-items-start justify-content-center text-white ps-4">
                    <h2>Free Shipping</h2>
                    <p>Vivamus tempor leo lacus, feugiat <br> ut magna aliquam erat.</p>
                    <button type="button" class="btn text-uppercase px-4 button-light">View More</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.promo {
    .container-fluid {
        background-image: url("/public/bkgd_confetti-compressor.jpg");
        background-size: cover;
        background-position: center;
    }

    .promo-box-1,
    .promo-box-2 {
        background-size: cover;
        background-position: center;
        height: 320px;

        h2 {
            font-weight: 700;
        }

        p {
            font-size: 13px;
        }
    }

    .promo-box-1 {
        background-image: url("/public/promo_box_1_bg.jpg");
    }

    .promo-box-2 {
        background-image: url("/public/promo_box_2_bg.jpg");
    }

    .button-light {
        border: 1px solid white;
        background-color: rgba(255, 255, 255, 0.221);
        border-radius: 17px;
        color: white;
        font-size: 10px;
        font-weight: 500;
    }
}
</style>