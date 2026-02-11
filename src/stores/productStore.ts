import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ProductType } from '@/types/productType'

export const useProductStore = defineStore('productStore', () => {
  const products = ref<ProductType[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const fetchProducts = async () => {
    try {
      loading.value = true
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      products.value = data
    } catch (err) {
      console.log('Error fetching products: ', err)
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'An unknown error occurred'
      }
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    loading,
    error,
    fetchProducts,
  }
})
