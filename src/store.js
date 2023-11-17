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
            name: 'Modern Black Leather Suit',
            filter: 'Men, Jackets',
            price: 96
        }
    ],

    sliderMd: [{
        image: '/spring_printed_dress-400x520.jpg',
        name: 'Modern Black Leather Suit',
        filter: 'Men, Jackets',
        price: 96
    },
    {
        image: '/modern_love_tee-400x520.jpg',
        name: 'Modern Black Leather Suit',
        filter: 'Men, Jackets',
        price: 96
    },
    {
        image: '/black_leather_jacket-400x520.jpg',
        name: 'Modern Black Leather Suit',
        filter: 'Men, Jackets',
        price: 96
    },
    {
        image: '/black_elegant_leather_jacket-400x520.jpg',
        name: 'Modern Black Leather Suit',
        filter: 'Men, Jackets',
        price: 96
    },
    {
        image: '/hipster_black_top-400x520.jpg',
        name: 'Modern Black Leather Suit',
        filter: 'Men, Jackets',
        price: 96
    }
    ],

    sliderLg: [{
        image: '/black_elegant_leather_jacket-400x520.jpg',
        name: 'Modern Black Leather Suit',
        filter: 'Men, Jackets',
        price: 96
    },
    {
        image: '/hipster_black_top-400x520.jpg',
        name: 'Modern Black Leather Suit',
        filter: 'Men, Jackets',
        price: 96
    },
    {
        image: '/public/black_leather_suit-400x520.jpg',
        name: 'Modern Black Leather Suit',
        filter: 'Men, Jackets',
        price: 96
    },
    {
        image: '/spring_printed_dress-400x520.jpg',
        name: 'Modern Black Leather Suit',
        filter: 'Men, Jackets',
        price: 96
    },
    {
        image: '/modern_love_tee-400x520.jpg',
        name: 'Modern Black Leather Suit',
        filter: 'Men, Jackets',
        price: 96
    }
    ],

    blog: [{
        image: '/src/components/post_img_12-700x441.jpg',
        title: 'Aenean lobortis sapien enim viverra',
        date: 'September 9th, 2015',
        comments: '0 Comments',
        paragraph: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,'
    },
    {
        image: '/src/components/post_img_11-700x441.jpg',
        title: 'Duis ac massa semper maximus',
        date: 'September 9th, 2015',
        comments: '0 Comments',
        paragraph: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,'
    }, {
        image: '/src/components/post_img_10-700x441.jpg',
        title: 'Nunc fermint nulla eu justo sem id',
        date: 'September 9th, 2015',
        comments: '0 Comments',
        paragraph: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,'
    }]
});