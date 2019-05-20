<template>
  <div style="margin:20px;">
    <div class='input-balloon'>
      <p><img src="../assets/slack.svg">&nbsp;みきさんを追え！！！</p>
      <p><img src="../assets/gatsby.svg">&nbsp;パイソン勉強会</p>
      <p><img src="../assets/gatsby.svg">&nbsp;ユーザーエクスペリエンス研究同好会</p>
      <p><img src="../assets/slack.svg">&nbsp;みきさんを追え！！！</p>
      <p><img src="../assets/gatsby.svg">&nbsp;みきさんを追え！！！</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
img {
  width: 20px;
}
.input-balloon {
  position: relative;
  width: 200px;
  height: 300px;
  background: #e0f9ff;
  padding: 10px;
  text-align: left;
  border: 1px solid #34393b;
  font-size: 16px;
  // font-style: oblique;
  border-radius: 19px;
  -webkit-border-radius: 19px;
  -moz-border-radius: 19px;
}
.input-balloon:after,
.input-balloon:before {
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  pointer-events: none;
  position: absolute;
  right: 100%;
  top: 12%;
}
.input-balloon:after {
  border-color: rgba(224, 249, 255, 0);
  border-top-width: 12px;
  border-bottom-width: 12px;
  border-left-width: 16px;
  border-right-width: 16px;
  margin-top: -12px;
  border-right-color: #e0f9ff;
}
.input-balloon:before {
  border-color: rgba(52, 57, 59, 0);
  border-top-width: 13px;
  border-bottom-width: 13px;
  border-left-width: 17px;
  border-right-width: 17px;
  margin-top: -13px;
  margin-right: 1px;
  border-right-color: #34393b;
}
</style>
