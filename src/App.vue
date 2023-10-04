<template>
  <NavigationCompnent></NavigationCompnent>
  <router-view />
</template>
<script>
import NavigationCompnent from "./components/navigation/NavigationComponent.vue";
export default {
  name: "AppRoot",
  props: {},
  components: {
    NavigationCompnent,
  },
};
</script>
