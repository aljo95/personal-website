
<template>
  <nav-menu></nav-menu>
  <div id="wrapper">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
}
</script>

<style>
html, body, #app {
  background-color: #090d14;
  width: 100%;
  height: 100%;
  margin: 0;
}

#wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
