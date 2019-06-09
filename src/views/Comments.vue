<template>
  <div class="wrapper">
    <Header msg="Welcome to Your Vue.js App"/>
    <div>
      <div class="comments_wrapper">
        <h1>Comments</h1>
        <div class="comments">
          <div class="comments_inner">
            <div class="comment_wrapper" v-for="item in comments">
              <div class="comment">
                <div class="comment_body">
                  <h3>{{item.title}}</h3>
                  <p>{{item.body}}</p>
                  <router-link class="button" :to="'/comment?id=' + item.id">Read more</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      comments: []
    };
  },
  mounted() {
    var self = this;
    axios
      .get("https://5cbef81d06a6810014c66193.mockapi.io/api/comments")
      .then(function(response) {
        self.comments = response.data;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
};
</script>
<style scoped>
.button {
  background: #60e3a1;
  min-width: 110px;
  padding: 15px;
  border-radius: 2px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: #1d1e25;
}
.comments_wrapper {
  padding: 180px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 90px;
}
.comments_wrapper h1 {
  font-size: 70px;
  font-weight: 500;
  margin-bottom: 50px;
}
.comment h3,
.comment p {
  margin-bottom: 15px;
}

.comments_inner {
  -moz-column-width: 20em;
  -webkit-column-width: 20em;
  -moz-column-gap: 40px;
  -webkit-column-gap: 40px;
}

.comments_inner > div {
  display: inline-block;
  margin-bottom: 40px;
  width: 100%;
}

/* demo only* */
.comment {
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  -webkit-box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.04);
  box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.04);
}
.comment_body {
  padding: 30px;
}

@media all and (max-width: 720px) {
  .comments_wrapper {
    padding: 50px;
  }
  .comments_wrapper h1 {
  font-size: 50px;
  text-align: center;
  font-weight: 500;
  }
}

</style>

