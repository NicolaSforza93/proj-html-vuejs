<script>

</script>

<template>
    <section class="collection">
        <div class="container-fluid px-0 d-flex">
            <div class="winter w-100">
                <div class="text d-flex flex-column justify-content-end align-items-center text-white text-center">
                    <h1 class="mb-1">Winter Collection</h1>
                    <p class="text-uppercase mb-2">Stylish and warm</p>
                    <button type="button" class="btn text-uppercase px-4 button-light">View More</button>
                </div>
            </div>
            <div class="spring w-100">
                <div class="text d-flex flex-column justify-content-end align-items-center text-white text-center">
                    <h1 class="mb-1">Spring Collection</h1>
                    <p class="text-uppercase mb-2">Bright and colorful</p>
                    <button type="button" class="btn text-uppercase px-4 button-light">View More</button>
                </div>
            </div>
            <div class="autumn w-100">
                <div class="text d-flex flex-column justify-content-end align-items-center text-white text-center">
                    <h1 class="mb-1">Autumn Collection</h1>
                    <p class="text-uppercase mb-2">Rich and comfortable</p>
                    <button type="button" class="btn text-uppercase px-4 button-light">View More</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.collection {

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
        padding: 240px 20px 43px;

        h1 {
            font-size: 45px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
        }

        p {
            font-size: 16px;
        }
    }

    .button-light {
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
</style>