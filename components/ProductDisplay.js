app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    },
    cart: {
      type: Array,
      required: false
    }
  },
  template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>
        <button 
          class="button" 
          :class="{ disabledButton: !inCart }" 
          :disabled="!inCart" 
          v-on:click="removeFromCart">
          Remove from Cart
        </button>
      </div>
    </div>
  </div>`,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 1 },
      ]
    };
  },
  methods: {
    addToCart() {
      const variant = this.variants[this.selectedVariant];
      variant.quantity--;
      this.$emit('add-to-cart', variant.id);
    },
    removeFromCart() {
      const variant = this.variants[this.selectedVariant];
      variant.quantity++;
      this.$emit('remove-from-cart', variant.id, false);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    id() {
      return this.variants[this.selectedVariant].id;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    inCart() {
      return 0 <= this.cart.indexOf(this.variants[this.selectedVariant].id);
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return 2.99;
    }
  }
});