<template>
  <div class="home-view-wrapper">
    <filters-component></filters-component>
    <content-component></content-component>
  </div>
</template>
<script>
import FiltersComponent from "./FiltersComponent.vue";
import ContentComponent from "./ContentComponent.vue";
export default {
  name: "HomeComponent",
  props: {},
  components: {
    FiltersComponent,
    ContentComponent,
  },
};
</script>
