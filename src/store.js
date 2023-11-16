import { reactive } from "vue";

export const store = reactive({
    brandIcons: ['fa-brands fa-facebook-f', 'fa-brands fa-x-twitter', 'fa-brands fa-instagram', 'fa-brands fa-youtube'],
    navLinks: [
        {
            name: 'Home',
            isActive: true,
            arrow: true
        },
        {
            name: 'Shop',
            isActive: false,
            arrow: true
        },
        {
            name: 'Products',
            isActive: false,
            arrow: true
        },
        {
            name: 'Categories',
            isActive: false,
            arrow: true
        },
        {
            name: 'News',
            isActive: false,
            arrow: false
        },
        {
            name: 'Elements',
            isActive: false,
            arrow: true
        },
    ],
    featuredProducts: [
        {
            image: '/black_elegant_leather_jacket-400x520.jpg',
            name: 'Black Leather Jacket',
            filter: 'Men, Jackets, Jeans',
            priceCrossed: 235,
            price: 200
        },
        {
            image: '/black_leather_suit-400x520.jpg',
            name: 'Black Leather Suit',
            filter: 'Men, Jackets',
            price: 176
        },
        {
            image: '/blue_jacket_and_white_stripe_tee-400x520.jpg',
            name: 'Blue Jacket & Stripe Tee',
            filter: 'Men, Jacket, Suits',
            price: 580
        },
        {
            image: '/modern_black_leather_suit-400x520.jpg',
            name: "Modern Black Leather Suit",
            filter: 'Men, Jackets',
            price: 96
        }
    ],
    sliderMd: ['/spring_printed_dress-400x520.jpg', '/modern_love_tee-400x520.jpg', '/black_leather_jacket-400x520.jpg', '/black_elegant_leather_jacket-400x520.jpg', '/hipster_black_top-400x520.jpg']
});