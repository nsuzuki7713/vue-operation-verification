<template>
  <div>
   twitter認証
   <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <h3>Sign In with Twitter</h3>
          <button class="btn btn-primary" @click="logout">
            <i class="fa fa-twitter"></i>
            ログアウト
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/twitterLogin");
      console.log("bbb");
    }
  }
};
</script>

<style scoped lang="scss">
h3 {
  font-weight: 700;
}
button {
  background-color: #1dcaff;
  border: 1px solid #1dcaff;
}
div button:hover {
  background-color: #00aced;
  border: 1px solid #00aced;
}
</style>
