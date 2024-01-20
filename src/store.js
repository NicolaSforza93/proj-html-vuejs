import { reactive } from "vue";

export const store = reactive({
    socialIcons: ['fa-brands fa-facebook-f', 'fa-brands fa-x-twitter', 'fa-brands fa-instagram', 'fa-brands fa-youtube'],
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
        }],

    slider: [
        {
            image: '/spring_printed_dress-400x520.jpg',
            name: 'Spring Printed Dress',
            filter: 'Dress, Women',
            price: 47
        },
        {
            image: '/modern_love_tee-400x520.jpg',
            name: 'Modern Love Tee',
            filter: 'T-shirts, Women',
            price: 68
        },
        {
            image: '/black_leather_jacket-400x520.jpg',
            name: 'Black Jacket',
            filter: 'Jackets, Women',
            price: 125
        },
        {
            image: '/black_elegant_leather_jacket-400x520.jpg',
            name: 'Black Leather Jacket',
            filter: 'Men, Jackets, Jeans',
            priceCrossed: 235,
            price: 200
        },
        {
            image: '/hipster_black_top-400x520.jpg',
            name: 'Hipster Black Top',
            filter: 'T-shirts, Women',
            price: 57
        },
        {
            image: '/modern_black_leather_suit-400x520.jpg',
            name: 'Modern Black Leather Suit',
            filter: 'Men, Jackets',
            price: 96
        },
        {
            image: '/blue_jacket_and_white_stripe_tee-400x520.jpg',
            name: 'Blue Jacket & Stripe Tee',
            filter: 'Men, Jacket, Suits',
            price: 580
        },
        {
            image: '/black_leather_suit-400x520.jpg',
            name: 'Black Leather Suit',
            filter: 'Men, Jackets',
            price: 176
        }],

    blog: [
        {
            image: '/post_img_12-700x441.jpg',
            title: 'Aenean lobortis sapien enim viverra',
            date: 'September 9th, 2015',
            comments: '0 Comments',
            paragraph: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,'
        },
        {
            image: '/post_img_11-700x441.jpg',
            title: 'Duis ac massa semper maximus',
            date: 'September 9th, 2015',
            comments: '0 Comments',
            paragraph: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,'
        }, {
            image: '/post_img_10-700x441.jpg',
            title: 'Nunc fermint nulla eu justo sem id',
            date: 'September 9th, 2015',
            comments: '0 Comments',
            paragraph: 'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,'
        }],

    widget: [
        {
            title: 'Featured',
            products: [
                {
                    image: '/public/black_leather_jacket-400x520.jpg',
                    name: 'Black Jacket',
                    price: 125
                },
                {
                    image: '/public/black_elegant_leather_jacket-400x520.jpg',
                    name: 'Black Leather Jacket',
                    price: 200,
                    priceCrossed: 235,
                    underline: true,
                    starsRating: 5
                },
                {
                    image: '/public/hipster_black_top-400x520.jpg',
                    name: 'Hipster Black Top',
                    price: 57
                }
            ]
        },
        {
            title: 'On sale',
            products: [
                {
                    image: '/public/black_elegant_leather_jacket-400x520.jpg',
                    name: 'Black Leather Jacket',
                    price: 200,
                    priceCrossed: 235,
                    underline: true,
                    starsRating: 5
                },
                {
                    image: '/public/blue_leather_jacket-400x520.jpg',
                    name: 'Blue Leather Jacket',
                    price: 60,
                    priceCrossed: 80,
                    underline: true
                },
                {
                    image: '/public/modern_leather_boots-400x520.jpg',
                    name: 'Modern Leather Boots',
                    price: 30,
                    priceCrossed: 50,
                    underline: true
                }
            ]
        },
        {
            title: 'Top rated',
            products: [
                {
                    image: '/public/leather_gloves-400x520.jpg',
                    name: 'Leather Gloves',
                    price: 45,
                    starsRating: 5
                },
                {
                    image: '/public/black_elegant_leather_jacket-400x520.jpg',
                    name: 'Black Leather Jacket',
                    price: 200,
                    priceCrossed: 235,
                    underline: true,
                    starsRating: 5
                },
                {
                    image: '/public/spring_printed_dress-400x520.jpg',
                    name: 'Spring Printed Dress',
                    price: 47,
                    starsRating: 5
                }
            ]
        },
        {
            title: 'Latest reviews',
            products: [
                {
                    image: '/public/black_elegant_leather_jacket-400x520.jpg',
                    name: 'Black Leather Jacket',
                    starsRating: 5,
                    reviewer: 'by admin'
                },
                {
                    image: '/public/leather_gloves-400x520.jpg',
                    name: 'Leather Gloves',
                    starsRating: 5,
                    reviewer: 'by Beardman'
                },
                {
                    image: '/public/spring_printed_dress-400x520.jpg',
                    name: 'Spring Printed Dress',
                    starsRating: 5,
                    reviewer: 'by admin'
                }
            ]
        }
    ],
    brands: [
        {
            image: '/public/b_logotype_6.png'
        },
        {
            image: '/public/b_logotype_7.png'
        },
        {
            image: '/public/b_logotype_1.png'
        },
        {
            image: '/public/b_logotype_2.png'
        },
        {
            image: '/public/b_logotype_3.png'
        }
    ]
});