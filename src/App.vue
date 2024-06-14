
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
  overflow-y: hidden;
}
#wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
html {
  background-image: url('/skills-icons/angular1.png'),
    url('/skills-icons/asm1.png'),
    url('/skills-icons/c1.png'),
    url('/skills-icons/djanog1.png'),
    url('/skills-icons/elixir1.png'),
    url('/skills-icons/express1.png'),
    url('/skills-icons/java1.png'),
    url('/skills-icons/js1.png'),
    url('/skills-icons/mDB1.png'),
    url('/skills-icons/mySQL1.png'),
    url('/skills-icons/next1.png'),
    url('/skills-icons/postgreSQL1.png'),
    url('/skills-icons/py1.png'),
    url('/skills-icons/react1.png'),
    url('/skills-icons/spring1.png'),
    url('/skills-icons/tailwind1.png'),
    url('/skills-icons/ts1.png'),
    url('/skills-icons/vue1.png'),
    url('/contact/background-logo.png');
    


    background-size: 0;
}
</style>
