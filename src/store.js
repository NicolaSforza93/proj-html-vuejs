import { reactive } from "vue";

export const store = reactive({
    brandIcons: ['fa-brands fa-facebook-f', 'fa-brands fa-x-twitter', 'fa-brands fa-instagram', 'fa-brands fa-youtube'],
    navLinks: [
        {
            name: 'Home',
            isActive: true
        },
        {
            name: 'Shop',
            isActive: false
        },
        {
            name: 'Products',
            isActive: false
        },
        {
            name: 'Categories',
            isActive: false
        },
        {
            name: 'News',
            isActive: false
        },
        {
            name: 'Elements',
            isActive: false
        },
    ]
});