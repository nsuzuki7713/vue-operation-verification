<template>
  <div class="about">
    <h1>成果物</h1>
    <p><router-link :to="{ name: 'vcCalendar'}">カレンダー</router-link></p>
    <p><router-link :to="{ name: 'markupBalloon'}">吹き出し</router-link></p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "about"
};
</script>
