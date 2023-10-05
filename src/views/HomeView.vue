<template>
  <div class="home-root">
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from "@/components/home/Index.vue";
import { mapActions, mapMutations } from "vuex";
export default {
  name: "HomeView",
  components: {
    HomeComponent,
  },
  mounted() {
    this.requestAPIForGameList().then(() => {});
  },
  methods: {
    ...mapMutations(["mutateDataLoadingStatus"]),
    ...mapActions(["requestAPIForGameList"]),
  },
};
</script>
