<template>
  <div class="navigation-wrapper">
    <div class="navgation-heading-wrapper">
      <div
        class="navgation-heading-lable"
        :class="currentRoutName === 'home' ? '' : 'hide-lable'"
      >
        VIDEO
      </div>
      <div class="navgation-heading-link">
        <router-link to="/">VIDEO GAMES</router-link>
      </div>
    </div>
    <div class="navgation-heading-wrapper">
      <div
        class="navgation-heading-lable"
        :class="currentRoutName === 'home' ? 'hide-lable' : ''"
      >
        CONTACT
      </div>
      <div class="navgation-heading-link">
        <router-link to="/contact">CONTACT</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavigationComponenet",
  computed: {
    currentRoutName() {
      return this.$route.name;
    },
  },
  mounted() {},
  methods: {},
};
</script>
