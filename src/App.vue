<template>
  <NavigationCompnent></NavigationCompnent>
  <router-view />
</template>
<script>
import NavigationCompnent from "./components/navigation/NavigationCompnent.vue";
export default {
  name: "AppRoot",
  props: {},
  components: {
    NavigationCompnent,
  },
};
</script>
