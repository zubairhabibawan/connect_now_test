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
    this.mutateDataLoadingStatus(true);
    this.requestAPIForGameList().then(() => {
      this.mutateDataLoadingStatus(false);
    });
  },
  methods: {
    ...mapMutations(["mutateDataLoadingStatus"]),
    ...mapActions(["requestAPIForGameList"]),
  },
};
</script>
