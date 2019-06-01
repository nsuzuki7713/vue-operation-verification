<template>
  <div>
   <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <h3>twitter認証</h3>
          <button class="btn btn-primary" @click="logout">
            <i class="fa fa-twitter"></i>
            ログアウト
          </button>
        </div>
        <div>
          <button class="btn btn-primary" @click="apiTest">
            <i class="fa fa-twitter"></i>
            通信テスト
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase/app";

export default {
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/twitterLogin");
      console.log("bbb");
    },
    async apiTest() {
      firebase.auth().onAuthStateChanged(async user => {
        try {
          if (user) {
            let idToken = await user.getIdToken(true);
            // エラー確認用
            // idToken = idToken + "Adsds";
            console.log(idToken);
            const res = await axios
              .post("http://127.0.0.1:8000/api/auth", { idToken })
              .then(response => response.data);
            console.log(res);
          }
        } catch (e) {
          console.log(e);
        }
      });
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
