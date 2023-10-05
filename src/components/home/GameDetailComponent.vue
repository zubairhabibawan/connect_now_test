<template>
  <div class="game-content-parent">
    <div class="game-content-wrapper">
      <div class="game-content-detail-wrapper card-background">
        <div class="game-heading-wrapper">
          <div class="game-title">{{ gameDetail?.name || "Game Title" }}</div>
          <div class="game-date">
            Release Date :
            {{ formateData(gameDetail?.first_release_date) || "Released Date" }}
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
    formateData(timestamp) {
      const date = new Date(timestamp);
      // Get day, month, and year
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
      const year = date.getFullYear();
      // Format the date as DD/MM/YYYY
      const formattedDate = `${day}/${month}/${year}`;
      return formattedDate;
    },
  },
};
</script>
