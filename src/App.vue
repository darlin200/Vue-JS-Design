<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style>
@font-face {
    font-family: "SofiaPro";
    src: url("assets/fonts/SofiaProRegular.woff") format('woff');
}

@font-face {
    font-family: "SofiaPro";
    src: url("assets/fonts/SofiaProSemiBold.woff") format('woff');
    font-weight: bold;
}

@font-face {
    font-family: "SofiaPro";
    src: url("assets/fonts/SofiaProMedium.woff") format('woff');
    font-weight: 500;
}

* {
  font-family: SofiaPro;
  margin: 0;
  padding: 0;
  border: 0;
}
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #60e3a1;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #60e3a1;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: #60e3a1;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: #60e3a1;
}
:focus {
  outline: 0;
}
.wrapper {
  margin: auto;
  max-width: 1366px;
}
li {
    list-style-type: none;
}
.arrow {
  -webkit-mask: url(assets/arrow.svg) no-repeat center;
  mask: url(assets/arrow.svg) no-repeat center;
    background-size: contain;
    cursor: pointer;
    display: inline-block;
    height: 12px;
    width: 10px;
    background-color: #60e3a1;
}
</style>
