<template>
  <div class="about">
    <h1>This is an about page</h1>
    <VcCalendar />
    <hr>
    <MarkupBalloon />
  </div>
</template>

<script>
// @ is an alias to /src
import VcCalendar from "@/components/VcCalendar.vue";
import MarkupBalloon from "@/components/MarkupBalloon.vue";

export default {
  name: "about",
  components: {
    VcCalendar,
    MarkupBalloon
  }
};
</script>
