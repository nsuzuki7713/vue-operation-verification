<template>
  <div class="about">
    <h1>This is an about page</h1>
    <VcCalendar />
  </div>
</template>

<script>
// @ is an alias to /src
import VcCalendar from "@/components/VcCalendar.vue";

export default {
  name: "about",
  components: {
    VcCalendar
  }
};
</script>
