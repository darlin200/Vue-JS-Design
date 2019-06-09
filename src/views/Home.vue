<template>
  <div class="wrapper">
    <Header/>
    <div class="banner">
      <h1 class="banner_title">
        Lorem Ipsum is simply<br class="string"/> dummy text of the printing<br class="string"/> and typesetting industry</h1>
      <div class="centered_croped">
      </div>
    </div>
    <div class="features" id="about">
      <div class="features_whoweare">
        <div>
          <div class="features_whoweare_icon"></div>
          <h3 class="features_title">Who we are</h3>
          <ul>
            <li>It is a long established fact that a reader will be distracted</li>
            <li>The readable content of a page when looking at its layout</li>
            <li>The point of using Lorem Ipsum</li>
            <li>As opposed to using 'Content here, content here'.</li>
          </ul>
        </div>
      </div>
      <div class="features_whatwedo">
        <div>
          <div class="features_whatwedo_icon"></div>
          <h3 class="features_title">What we do</h3>
          <ul>
            <li>Many desktop publishing packages and web page</li>
            <li>There are many variations of passages of Lorem Ipsum available, but the majority have</li>
            <li>Various versions have evolved over the years, sometimes by accident</li>
          </ul>
        </div>
      </div>
      <div class="features_technology">
        <div>
          <div class="features_technology_icon"></div>
          <h3 class="features_title">Technology</h3>
          <ul>
            <li>The point of using Lorem Ipsum</li>
            <li>As opposed to using 'Content here, content here'</li>
            <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
            <li>A Latin professor at Hampden-Sydney College in Virginia</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer_comment">
      <div class="footer_comment_title_wrapper">
        <h2 class="footer_comment_title" id="comment">
          Write
          <br class="footer_comment_title_break">comment
        </h2>
        <div class="yellow_string">
        </div>
      </div>
      <form class="footer_form" v-on:submit="push" method="post">
        <input placeholder="Title" type="text" ref="title">
        <textarea placeholder="Your comment" ref="body"></textarea>
        <button>Send</button>
      </form>
    </div>
    <Footer msg="Hello Futter"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
export default {
  name: "home",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      form: {
        title: ""
      }
    };
  },
  methods: {
    push: function(event) {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date + " " + time;

      event.preventDefault();
      console.log(this.$refs.title.value);
      axios
        .post("https://5cbef81d06a6810014c66193.mockapi.io/api/comments", {
          title: this.$refs.title.value,
          body: this.$refs.body.value,
          created_at: Date.now()
        })
        .then(response => {
          console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.banner_title {
  font-size: 70px;
  margin: 180px;
  margin-bottom: 75px;
  margin-top: 85px;

}
.features_title {
  font-size: 36pt;
}
.footer_comment_title {
  font-size: 55px;
}
.footer_form input,
.footer_form textarea {
  background: transparent;
  border: 1px solid #60e3a1;
  border-radius: 2px;
  min-width: 100%;
  display: inline-block;
  padding: 19px;
  color: #60e3a1;
  margin-bottom: 15px;
  box-sizing: border-box;
  max-width: 100%;
}
.footer_form button {
  background: #60e3a1;
  min-width: 110px;
  padding: 15px;
  border-radius: 2px;
}
.features {
  display: flex;
  flex-flow: row wrap;
  padding: 120px;
  padding-top: 40px;
  padding-bottom: 40px;
}
.features > * {
  flex-grow: 1;
  width: 33%;
}

.features > * > div {
  padding: 50px;
}

.footer_comment {
  display: flex;
  flex-wrap: row wrap;
  padding: 180px;
  padding-top: 140px;
  padding-bottom: 145px;
  background-color: #1d1e25;
  color: white;
}

.footer_comment > * {
  flex-grow: 1;
  width: 50%;
}
.footer_form textarea {
  min-height: 110px;
}
.footer_copy_text {
  float: right;
}
.footer_copy a {
  color: white;
  text-decoration: none;
}
.features li {
  margin-bottom: 10px;
}
.features h3 {
  margin-bottom: 38px;
  font-size: 36px;
}
.header {
  box-sizing: border-box;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
}
.header ul {
  list-style: none;
}
.header li {
  display: inline-block;
}
.header_menu {
  flex: 1;
  text-align: right;
}

.features_whoweare_icon {
  background-color: #4a78f0;
  -webkit-mask: url(../assets/people.svg) no-repeat center;
  mask: url(../assets/people.svg) no-repeat center;
  width: 40px;
  height: 30px;
  margin-bottom: 25px;
}
.features_whatwedo_icon {
  background-color: #f9d41d;
  -webkit-mask: url(../assets/computer.svg) no-repeat center;
  mask: url(../assets/computer.svg) no-repeat center;
  width: 40px;
  height: 34px;
  margin-bottom: 25px;
}
.features_technology_icon {
  background-color: #60e3a1;
  -webkit-mask: url(../assets/cogwheel.svg) no-repeat center;
  mask: url(../assets/cogwheel.svg) no-repeat center;
  width: 36px;
  height: 37px;
  margin-bottom: 25px;
}

@media all and (max-width: 1200px) {
  .features_whoweare,
  .features_whatwedo {
    width: 50%;
  }
  .features_technology {
    width: 100%;
  }
}
@media all and (max-width: 900px) {
  .footer_comment_title_wrapper {
    width: 100%;
  }
  .footer_comment_title_break {
    display: none;
  }
  .footer_comment {
    -webkit-flex-flow: column wrap;
    flex-flow: column wrap;
    text-align: center;
    padding: 50px;
  }
  .footer_form {
    width: 100%;
  }
  .features > * {
    width: 100%;
  }
}
@media all and (max-width: 800px) {
  .features > * > div {
    padding: 10px;
  }
}

@media all and (max-width: 500px) {
  .features {
  
  padding: 50px;
}
}
@media all and (max-width: 1200px) {
   .banner_title {
    font-size: 50px;
    margin: 70px;
    margin-top: 50px;
   }
   .string {
    display: none;
  }
}
@media all and (max-width: 1050px) {
   .string {
    display: none;
  }
  .banner_title {
    font-size: 40px;
    margin: 50px;
    margin-top: 20px;
  }
    .yellow_string {
    display:none;
  }
}
@media all and (max-width: 500px) {
   .string {
    display: none;
  }
  .banner_title {
    font-size: 25px;
    margin: 40px;
    margin-top: 10px;
    text-align: center;
    
  }
}
.centered_croped {
  width: 100%;
  height: 470px;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("../assets/banner.jpg");
}
.yellow_string {
  width: 70px;
  height: 5px;
  background-color: #f9d41d;
  margin-top: 40px;
}
</style>
