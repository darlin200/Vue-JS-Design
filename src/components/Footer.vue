<template>
  <div class="footer">
    <div class="footer_copy">
      <div class="footer_contacts">
        <a href="mailto:mail@mailtest.com">mail@mailtest.com</a>
        <br>
        <a href="tel:+30-6977664062">+30-6977664062</a>
      </div>
      <div class="footer_copy_text">Copyright © 2019 Test All Rights Reserved.</div>
       <div class="footer_clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.footer_copy a {
  color: white;
  text-decoration: none;
}
.footer {
  background-color: #1d1e25;
  color: white;
  padding: 50px;
  padding-top: 0px;
}
.footer_copy {
  padding-top: 50px;
  border-top: 1px solid #2b2c36;
  color: #4a4d5e;
}
.footer_contacts{
  float: left;
  margin-right: 10px;
}
.footer_copy_text {
  float: right;
}
.footer_clear {
  clear: both;
}
@media all and (max-width: 600px) {

.footer_copy_text {
  float: left;
}
.footer_contacts{
  margin-bottom: 10px;
}

}
</style>
