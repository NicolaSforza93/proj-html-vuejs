<script>

</script>

<template>
    <section class="collection">
        <div class="container-fluid px-0 d-flex">
            <div class="winter position-relative w-100">
                <div class="text d-flex flex-column justify-content-end align-items-center text-white">
                    <h1 class="mb-1 text-nowrap">Winter Collection</h1>
                    <p class="text-uppercase mb-2">Stylish and warm</p>
                    <button type="button" class="btn text-uppercase px-4 button-light">View More</button>
                </div>
            </div>
            <div class="spring position-relative w-100">
                <div class="text d-flex flex-column justify-content-end align-items-center text-white">
                    <h1 class="mb-1 text-nowrap">Spring Collection</h1>
                    <p class="text-uppercase mb-2">Bright and colorful</p>
                    <button type="button" class="btn text-uppercase px-4 button-light">View More</button>
                </div>
            </div>
            <div class="autumn position-relative w-100">
                <div class="text d-flex flex-column justify-content-end align-items-center text-white">
                    <h1 class="mb-1 text-nowrap">Autumn Collection</h1>
                    <p class="text-uppercase mb-2">Rich and comfortable</p>
                    <button type="button" class="btn text-uppercase px-4 button-light">View More</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.collection {
    .container-fluid {
        height: 400px;
    }

    .winter {
        background-image: url('/winter_collection_bg.jpg');
    }

    .spring {
        background-image: url('/spring_collection_bg.jpg');
    }

    .autumn {
        background-image: url('/autumn_collection_bg.jpg');
    }

    .winter,
    .spring,
    .autumn {
        background-size: cover;
        background-position: center top;

        .text {
            position: absolute;
            top: 77%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        h1 {
            font-size: 30px;
        }

        p {
            font-size: 13px;
        }
    }

    .button-light {
        border: 1px solid white;
        border-radius: 17px;
        color: white;
        font-size: 10px;
        font-weight: 500;
    }
}
</style>