<template>
    <Carousel>
      <Slide v-for="image in images" :key="slide">
        <img class="carousel__item" :src="image"/>
      </Slide>

  
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Basic',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data() {
    return {
        images: [
        '../../public/images/p1.jpg',
        '../../public/images/p2.jpg',
        '../../public/images/p3.jpg',
        '../../public/images/p4.jpg',
        '../../public/images/p5.jpg'
      ]
    }
   }
  })

  </script>
  
  <style>
  .carousel__item {
    min-height: 200px;
    width: 500px;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 10px;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
  </style>