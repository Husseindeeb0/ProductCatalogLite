import { defineStore } from "pinia";
import { ref } from "vue";
import type { ProductType } from "@/types/productType";

export const useProductStore = defineStore('productStore', () => {
  const products = ref<ProductType[]>([]);
})