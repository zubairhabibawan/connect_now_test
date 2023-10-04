<template>
  <div class="game-content-parent">
    <div class="game-content-wrapper">
      <div class="game-content-detail-wrapper card-background">
        <div class="game-heading-wrapper">
          <div class="game-title">{{ gameDetail?.name || "Game Title" }}</div>
          <div class="game-date">
            {{ gameDetail?.first_release_date || "Released Date" }}
          </div>
        </div>
        <div class="game-detail">
          {{ gameDetail?.summary || "Summary is Not Present " }}
        </div>
      </div>
      <div class="game-content-number-wrapper card-background">
        <div class="game-content-number">{{ Math.floor(gameDetail?.rating / 10) }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "GameDetailComponent",
  props: {
    gameDetail: {
      default: null,
      type: Object,
    },
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
