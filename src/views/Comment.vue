<template>
  <div class="wrapper">
    <Header msg="Welcome to Your Vue.js App"/>
    <div class="comment">
      <div>
        <router-link class="backto_comments_button" to="/comments">
          <span class="arrow"></span> Back to comments
        </router-link>
        <h2>{{ comment.title }}</h2>
        <p>{{ comment.body }}</p>
      </div>
    </div>
    <BackTo/>
    <Footer msg="Hello Futter"/>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import BackTo from "@/components/BackTo.vue";

export default {
  name: "home",
  components: {
    Header,
    Footer,
    BackTo
  },
  data() {
    return {
      comment: {
        title: "",
        body: ""
      }
    };
  },
  mounted() {
    var self = this;
    axios
      .get(
        "https://5cbef81d06a6810014c66193.mockapi.io/api/comments/" +
          this.$route.query.id
      )
      .then(function(response) {
        console.log(response);
        self.comment = response.data;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
};
</script>

<style scoped>
.comment {
  margin-top: 90px;
}
.comment h2,
.comment p,
.backto_comments_button {
  padding-left: 300px;
  color: black;
}
.comment p {
  margin-top: 110px;
}
.comment h2 {
  padding-top: 60px;
  font-size: 48px;
}
@media all and (max-width: 1000px) {
  .comment h2,
  .comment p,
  .backto_comments_button {
    padding-left: 200px;
  }
}
@media all and (max-width: 800px) {
  .comment h2,
  .comment p,
  .backto_comments_button {
    padding-left: 100px;
    text-align: center;
  }
}
@media all and (max-width: 500px) {
  .comment h2,
  .comment p {
    padding-left: 0px;
    text-align: center;
  }
  .backto_comments_button {
    padding-left: 10px;
    display: block;
  }
  .comment p {
    padding-left: 20px;
    text-align: center;
  }
}
</style>
