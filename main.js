const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            currentVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 15, onSale: true },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: true },
              { id: 2233, color: 'darkblue', image: './assets/images/socks_blue.jpg', quantity: 15, onSale: false },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(value) {
            this.currentVariant = value
        }
    },
    computed: {
        image() {
            return this.variants[this.currentVariant].image
        },
        inStock() {
            return this.variants[this.currentVariant].quantity
        },
        title() {
            return this.variants[this.currentVariant].onSale ? this.brand + ' ' + this.product + " (Sale)" : this.brand + ' ' + this.product;
        }
    }
})
