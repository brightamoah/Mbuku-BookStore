<template>
  <NavbarComponent />
  <div>
    <main class="main">
      <section class="shop py-5">
        <div class="container">
          <h2 class="text-center">Shop for textbooks and other educational resources</h2>
          <p>Find the best textbooks and educational resources for your child's needs.</p>
          <a href="https://shop.snapplify.com/" target="_blank" class="btn btn-primary">Shop Now</a>
        </div>
      </section>

      <div class="books">
        <div>
          <BCard
            v-for="book in books"
            :key="book.name"
            :title="book.name"
            img-src="https://picsum.photos/id/25/600/300"
            :img-alt="book.name"
            img-top
            tag="article"
            style="max-width: 20rem"
          >
            <BCardText>
              {{ book.description }}
            </BCardText>
            <div class="cart-section">
              <BButton href="#" variant="primary">Add to cart</BButton>
              <p class="price">{{formatCurrency(price)}}</p>
            </div>
          </BCard>
        </div>
      </div>
    </main>
  </div>
  <FooterComponent />
</template>
<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import { useBookStore } from '@/stores/bookStore.js'
import { storeToRefs } from 'pinia'
import {ref} from 'vue'

const bookStore = useBookStore()
const { books } = storeToRefs(bookStore)

const price = ref(300) 
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'KES'
  }).format(value)
}
</script>

<style scoped>
.cart-section {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  place-items: center;
}
.price {
  margin-top: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
