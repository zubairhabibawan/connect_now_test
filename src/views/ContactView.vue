<template>
  <div class="contact-root">
    <ContactComponent></ContactComponent>
  </div>
</template>
<script>
import ContactComponent from "@/components/contact/ContactComponent.vue";
export default {
  name: "ContactView",
  components: {
    ContactComponent,
  },
};
</script>
