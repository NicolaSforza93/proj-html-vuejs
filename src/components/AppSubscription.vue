<script>

</script>

<template>
    <section class="subscription py-5">
        <div class="container">
            <div class="subscription-content d-flex align-items-center">
                <div class="d-flex gap-3">
                    <font-awesome-icon icon="fa-regular fa-envelope" class="icon-email" />
                    <p class="text-light mb-0">Subscribe now and get special offers</p>
                </div>
                <div class="input-email d-flex align-items-center gap-3 flex-grow-1">
                    <input type="text" class="form-control" placeholder="Insert your email" aria-label="Username"
                        aria-describedby="basic-addon1">
                    <button type="button" class="btn text-nowrap text-uppercase fw-semibold px-4">Send</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.subscription-content {
    gap: 90px;
}

.subscription {
    background-color: #2F3238;

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 26px;
        font-weight: 700;
        padding-top: 8px;
    }
}

.icon-email {
    font-size: 33px;
    background-color: #2C2E32;
    color: $lightgrey-color;
    border-radius: 50%;
    padding: 12px;
}

.input-email {

    input {
        border-radius: 17px;
        font-size: 13px;
        color: $lightgrey-color;
    }

    button {
        background-color: $skyblue-color;
        color: white;
        font-size: 13px;
        border-radius: 17px;
    }
}
</style>