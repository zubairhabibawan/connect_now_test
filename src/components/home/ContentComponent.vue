<template>
  <div class="game-content-root">
    <GameDetailComponent
      v-for="(gameDetail, index) in getFilteredGameList"
      :key="index"
      :gameDetail="gameDetail"
    ></GameDetailComponent>
  </div>
</template>
<script>
import GameDetailComponent from "./GameDetailComponent.vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "ContentComponent",
  components: {
    GameDetailComponent,
  },
  computed: {
    ...mapGetters(["getFilteredGameList"]),
  },
  mounted() {},
  methods: {
    ...mapMutations(["mutateDataLoadingStatus"]),
    ...mapActions(["requestAPIForGameList"]),
  },
};
</script>
