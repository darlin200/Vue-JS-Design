 <template>
  <div class="backto">
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
    <div>
      <router-link class="backto_button" to="/"><span class="arrow"></span> Back to homepage</router-link>
    </div>
  </div>
</template>

 
 <style scoped>
.backto {
  text-align: center;
  padding: 80px;
}
.backto_button {
  display: inline-block;
  background: transparent;
  border: 1px solid #60e3a1;
  border-radius: 2px;
  padding: 15px;
  margin: 30px;
}
.backto a {
  text-decoration: none;
  color: black;
}
@media all and (max-width: 500px) {
  .backto {
    padding: 40px;
  }
} 

</style>
 