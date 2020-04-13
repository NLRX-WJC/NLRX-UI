<template>
  <div>
    <nlrx-carousel arrow="always">
      <nlrx-carousel-item>
        <div class="carousel-content" style="background-color:red">
          <h1>1</h1>
        </div>
      </nlrx-carousel-item>
      <nlrx-carousel-item>
        <div class="carousel-content" style="background-color:blue">
          <h1>2</h1>
        </div>
      </nlrx-carousel-item>
      <nlrx-carousel-item>
        <div class="carousel-content" style="background-color:yellow">
          <h1>3</h1>
        </div>
      </nlrx-carousel-item>
    </nlrx-carousel>
  </div>
</template>
<script>
import Carousel from "../../../../src/packages/carousel";
import CarouselItem from "../../../../src/packages/carousel-item";
export default {
  components: {
    "nlrx-carousel": Carousel,
    "nlrx-carousel-item": CarouselItem
  }
};
</script>
<style>
.carousel-content {
  height: 300px;
  text-align: center;
  line-height: 300px;
}
</style>
