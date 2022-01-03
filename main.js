const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        };
    },
    methods: {
        updateCart(id, adding = true) {
            let lastIndex = this.cart.lastIndexOf(id);
            if (adding) {
                this.cart.push(id);
            }
            else if (0 <= lastIndex) {
                this.cart.pop();
            }
        }
    }
});
