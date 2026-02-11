<script setup lang="ts">
import { useProductStore } from '@/stores/productStore'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'

const store = useProductStore()
const { products, loading } = storeToRefs(store)
const { fetchProducts } = store

onMounted(() => {
  console.log('running')
  fetchProducts()
})

// Search state used to store user final search input value
const search = ref<string>('')
// Search state used to store user ongoing search input value
// So that filtering is not going to be triggered on every keystroke because of using computed
const activeSearch = ref<string>('')

const handleSearch = () => {
  activeSearch.value = search.value
}

// computed is going to trigger refiltering whenever activeSearch or products values changes
const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.title.toLowerCase().includes(activeSearch.value.toLowerCase()),
  )
})
</script>

<template>
  <main>
    <div class="flex gap-5 justify-center my-10">
      <form @submit.prevent="handleSearch">
        <input type="text" v-model="search" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </div>
    <div class="flex flex-wrap gap-5 justify-center my-10">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="w-64 h-80 border-2 border-gray-200 rounded-2xl p-5 overflow-auto"
      >
        <img :src="product.image" alt="Preview" class="max-h-32 mx-auto" />
        <h1 class="text-center font-bold">
          {{ product.title }}
        </h1>
        <span class="mx-auto"> {{ product.price }}$ </span>
        <p class="text-sm line-clamp-3">
          {{ product.description }}
        </p>
        <span>
          {{ product.category }}
        </span>
        <div class="flex gap-5">
          <span> Count: {{ product.rating.count }} </span>
          <span> Rate: {{ product.rating.rate }} </span>
        </div>
      </div>
    </div>
  </main>
</template>
