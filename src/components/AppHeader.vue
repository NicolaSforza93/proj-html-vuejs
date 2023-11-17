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
    <header>
        <div class="container-fluid border-bottom">
            <div class="container">
                <div class="top-strip d-flex justify-content-between">
                    <div class="social-icons py-3">
                        <ul class="d-flex align-items-center gap-3 mb-0 px-0">
                            <li v-for="(Icon, index) in store.socialIcons" :key="index">
                                <a href="#">
                                    <font-awesome-icon :icon="Icon" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="menu-user">
                        <ul class="mb-0 d-flex gap-3 px-0">
                            <li class="border-end p-3">
                                <a href="#" class="text-decoration-none">
                                    Shopping Cart
                                </a>
                            </li>
                            <li class="border-end p-3 d-flex align-items-center gap-2">
                                <a href="#" class="text-decoration-none">
                                    My Account
                                </a>
                                <font-awesome-icon icon="fa-solid fa-chevron-down" class="arrow-down" />
                            </li>
                            <li class="p-3 d-flex align-items-center gap-2">
                                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                                <a href="#" class="text-decoration-none text-uppercase">
                                    Cart
                                </a>
                                <font-awesome-icon icon="fa-solid fa-chevron-down" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <nav class="d-flex align-items-center gap-4">
                <figure class="mb-0 flex-grow-1">
                    <img class="logo" src="/classic_shop_logo2x.png" alt="">
                </figure>

                <ul class="nav-menu mb-0 d-flex gap-4 px-0">
                    <li v-for="(navLink, index) in store.navLinks" :key="index" :class="{ 'active': navLink.isActive }"
                        class="menu-item d-flex align-items-center gap-2 position-relative py-4">
                        <a href="#" class="text-decoration-none">{{
                            navLink.name }}</a>
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="arrow-down"
                            v-if="navLink.arrow === true" />
                    </li>
                </ul>
                <button type="button" class="btn text-nowrap text-uppercase fw-semibold px-3">Shop Now!</button>
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="search" />
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.social-icons {
    font-size: 13px;

    a {
        color: #585C60;
    }
}

.arrow-down {
    font-size: 9px;
    color: $gray-color;
}

.menu-user {
    font-size: 13px;

    a {
        color: $gray-color;
    }
}

.logo {
    width: 160px;
}

nav {
    li a {
        font-size: 14px;
        color: $gray-color;
    }
}

.active * {
    color: $skyblue-color;
}

.active.menu-item::before {
    content: '';
    position: absolute;
    display: block;
    height: 3px;
    width: 100%;
    background-color: $skyblue-color;
    top: 0;
    left: 0;
}

button {
    background-color: $skyblue-color;
    color: white;
    font-size: 13px;
    border-radius: 17px;
}

.search {
    font-size: 13px;
}
</style>