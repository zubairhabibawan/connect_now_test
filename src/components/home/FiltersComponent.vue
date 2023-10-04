<template>
  <div class="filter-root card-background">
    <div class="filter-heading">Filter Results</div>
    <div class="filter-parent">
      <div class="filter-lable">Name (contains)</div>
      <div class="">
        <input
          type="text"
          name="name-input"
          class="filter-input"
          id="name_input"
          placeholder="Text string"
          @keydown="checkString"
        />
      </div>
    </div>
    <div class="filter-wrapper">
      <div class="filter-parent">
        <div class="filter-lable">Minimum Score</div>
        <div class="">
          <input
            type="text"
            class="filter-input"
            name="rang-input"
            id="rang_input"
            placeholder="1 - 10"
            @keydown="checkNumner"
          />
        </div>
      </div>
      <div class="filter-parent">
        <div class="filter-lable">Order By</div>
        <div class="select-wrapper">
          <div class="arrow-icon" @click="toggleSortDirection">
            <img
              v-if="getSortData.direction === 'dsc'"
              src="@/assets/arrow_up.png"
              alt=""
              srcset=""
            />
            <img v-else src="@/assets/arrow_down.png" alt="" srcset="" />
          </div>
          <select class="filter-input" name="cars" id="cars" @change="onChangeSelection">
            <option
              v-for="(option, index) in getSortData.sortOptionList"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="filter-button-wrapper">
        <button class="filter-clear-button">Clear</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import _ from "lodash";
export default {
  name: "FilterComponent",
  computed: {
    ...mapGetters(["getSortData", "getFilteredGameList"]),
  },
  mounted() {},
  methods: {
    ...mapMutations(["mutateSelectedFilter", "mutateSortData"]),
    ...mapActions([
      "applyFiltersOnGameList",
      "toggleSortDirection",
      "sortFilteredGameList",
    ]),
    checkString(event) {
      let value = event.key;
      this.chekInput("name", value, event);
    },
    checkNumner(event) {
      let value = event.key;
      this.chekInput("rating", value, event);
    },
    chekInput: _.debounce(function (type, value, event) {
      const patternToTest = {
        name: /^[A-Za-z\s]+$/, // small a to capital Z
        rating: /^(?:[1-9]|10)$/, // only accept 1 to 10
      };

      if (
        !patternToTest[type].test(value) &&
        value !== " " &&
        event.key !== "Backspace"
      ) {
        event.preventDefault();
      } else {
        let selectedFilters = {};
        selectedFilters[type] = event.target.value.toString().toLowerCase();
        this.mutateSelectedFilter(selectedFilters);
        this.applyFiltersOnGameList().then(() => {});
      }
    }, 500),
    onChangeSelection(event) {
      this.mutateSortData({ key: event.target.value });
      this.sortFilteredGameList(this.getFilteredGameList);
    },
  },
};
</script>
