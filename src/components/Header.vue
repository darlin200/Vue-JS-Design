<template>
  <nav>
    <ul class="menu">
      <li>
        <router-link class="menu_logo" to="/" exact>
          <img class="homepage_logo" src="../assets/logo.png">
        </router-link>
      </li>
      <li>
        <router-link to="/#about" exact>About Us</router-link>
      </li>
      <li>
        <router-link to="/#comment" exact>Write a comment</router-link>
      </li>
      <li>
        <router-link to="/comments">Comments</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.menu .homepage_logo {
  width: 120px;
  height: auto;
}
.menu {
  display: -webkit-flex;
  display: flex;
  flex-flow: row wrap;
  padding: 50px;
  padding-bottom: 0px;
}
.menu li:first-child {
  margin-right: auto;
  margin-left: 0px;
}
.menu a {
  margin-left: 19px;
  margin-right: 19px;
  display: block;
  padding-top: 20px;
  text-decoration: none;
  text-transform: uppercase;
  color: #111518;
  border-top: 2px solid white;
  font-size: 14px;
  font-weight: 500;
}

.menu a:last-child {
  margin-right: 0px;
}
.menu a.router-link-active, .menu a:hover {
  border-top: 2px solid #f9d10d;
}

.menu a.menu_logo.router-link-active, .menu a.menu_logo:hover {
  border-top: 2px solid white;
}

@media all and (max-width: 600px) {
  .menu {
    justify-content: space-around;
    padding: 50px;
  }
  .menu li:first-child {
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
  }
}

@media all and (max-width: 500px) {
  .menu {
    -webkit-flex-flow: column wrap;
    flex-flow: column wrap;
    text-align: center;
    padding: 50px;
  }
}
</style>
