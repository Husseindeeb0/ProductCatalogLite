<script setup lang="ts">
import { useProductStore } from '@/stores/productStore'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'

const store = useProductStore()
const { products, loading, error } = storeToRefs(store)
const { fetchProducts } = store
const productCategories = ref<string[]>([])
// Search ref used to store user final search input value
const search = ref<string>('')
// ActiveSearch ref used to store user ongoing search input value
// So that filtering is not going to be triggered on every keystroke because of using computed
const activeSearch = ref<string>('')
const selectedCategory = ref<string>('all')

onMounted(async () => {
  await fetchProducts()
  let categories = products.value.map((product) => product.category)
  productCategories.value = [...new Set(categories)]
})

const handleSearch = () => {
  activeSearch.value = search.value
}

// computed is going to trigger refiltering automatically whenever activeSearch or products values changes
const filteredProducts = computed(() => {
  return products.value.filter(
    (product) =>
      product.title.toLowerCase().includes(activeSearch.value.toLowerCase()) &&
      (product.category === selectedCategory.value || selectedCategory.value === 'all'),
  )
})
</script>

<template>
  <main>
    <div v-if="error" class="flex justify-center items-center h-screen">
      <p class="text-red-500">{{ error }}</p>
      <p>Please try again later</p>
    </div>
    <div v-else class="flex gap-5 justify-center my-10">
      <form @submit.prevent="handleSearch" class="flex items-center gap-5">
        <div>
          <select
            name="category"
            id="category"
            v-model="selectedCategory"
            class="border-2 border-gray-200 rounded-xl px-3 py-2"
          >
            <option value="all" selected>All</option>
            <option v-for="category in productCategories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <div>
          <input
            type="text"
            v-model="search"
            placeholder="Search"
            class="px-3 py-2 mr-3 rounded-2xl border-2 border-gray-200"
          />
          <button
            type="submit"
            class="px-3 py-2 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>
    </div>
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <div class="w-12 h-12 border-t-2 border-blue-500 rounded-full animate-spin"></div>
    </div>
    <div v-else class="flex flex-wrap gap-5 justify-center my-10">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="flex flex-col gap-3 max-w-72 border-2 border-gray-200 rounded-2xl p-5 overflow-auto"
      >
        <img :src="product.image" alt="Preview" class="max-h-32 mx-auto" />
        <h1 class="text-center font-bold">
          {{ product.title }}
        </h1>
        <div class="text-center">
          <span class="text-green-500 font-semibold"> {{ product.price }}$ </span>
        </div>
        <p class="text-sm line-clamp-3">
          {{ product.description }}
        </p>
        <span class="font-semibold uppercase">
          {{ product.category }}
        </span>
        <div class="flex gap-1">
          <span class="text-yellow-500 font-semibold">{{ product.rating.rate }}</span>
          <span>({{ product.rating.count }})</span>
        </div>
      </div>
    </div>
  </main>
</template>
