# Product Catalog Lite

A simple product catalog application built with Vue 3.  
It fetches products from an API, displays them in a responsive layout, and allows filtering by title and category search.

---

## A 🚀 Project Setup

Follow these steps to run the project locally:

### 1 Clone the repository

```bash
git clone https://github.com/Husseindeeb0/ProductCatalogLite.git
```
```bash
cd ProductCatalogLite
```
### 2 Install Dependencies
```bash
npm install
```
### 3 Run the Development Server
```bash
npm run dev
```

## B. Tech Stack & Why

### Libraries Used

- **Pinia** – State management for handling shared product data.
- **TypeScript** – Static typing for better maintainability and developer experience.
- **Tailwind CSS** – Utility-first CSS framework for fast and responsive styling.
- **Vite** – Development server and build tool (comes with the Vue project setup).

### Why These Technologies?

Pinia provides a lightweight and modern state management solution that integrates well with Vue. TypeScript improves code reliability and scalability. Tailwind CSS allows rapid UI development without writing custom CSS. Vite ensures fast development and optimized builds.
No additional external libraries were required, as the built-in tools and core dependencies were sufficient to complete the project efficiently within the given time.

## C. Reflection Questions

### 1. What would you improve if you had more time?

If I had more time, I would first analyze and optimize performance, especially around image loading by implementing proper lazy loading techniques. I would also add a Product Detail view (either a modal or a dedicated page) to display extended product information such as description and additional metadata. Additionally, I would enhance the card design by adding relevant icons and improving visual hierarchy to make the interface look more polished and professional.

### 2. Describe a time you learned a new technology from scratch.

One example is when I learned React Native. When learning something new, I prefer building with it directly rather than spending too much time watching tutorials. I usually start by reviewing the fundamentals through a short introduction, then move immediately into practical implementation. While building, I ask specific questions such as how to implement a certain feature in React Native, then search for solutions or consult AI tools to understand the correct approach. This method helps me clearly see the real problem each feature solves because I encounter the issue firsthand. I also refer back to the official documentation when needed to deepen my understanding and confirm best practices.

### 3. If this had 10,000 products, what performance issues might arise? How would you handle them?

With 10,000 products, loading all images at once would significantly impact performance and increase initial load time. I would implement lazy loading to ensure images load only when needed. I would also limit the number of rendered items at a time to reduce DOM size and improve rendering performance.
