import { defineStore } from "pinia";
import { ref } from "vue";
import type { ProductType } from "@/types/productType";

export const useProductStore = defineStore('productStore', () => {
  const products = ref<ProductType[]>([]);
  const loading = ref<boolean>(false);

  const fetchProducts = async () => {
    try {
      loading.value = true;
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      products.value = data;
    } catch (error) {
      console.log("Error fetching products: ", error);
    } finally {
      loading.value = false;
    }
  }

  return {
    products,
    loading,
    fetchProducts
  }
})