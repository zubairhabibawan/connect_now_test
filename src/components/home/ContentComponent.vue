<template>
  <div class="game-content-root">
    <div class="loader-wrapper" v-if="getFilteredGameList.length === 0">
      <img class="loader" src="@/assets/gradient-loader.gif" alt="" srcset="" />
      Loading Video Games
    </div>
    <div v-else>
      <GameDetailComponent
        v-for="(gameDetail, index) in getFilteredGameList"
        :key="index"
        :gameDetail="gameDetail"
      ></GameDetailComponent>
    </div>
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
