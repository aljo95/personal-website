
<template>
  <nav-menu></nav-menu>
  
  <div id="wrapper">
    <router-view>
    </router-view>
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
  z-index: 1;
  overflow-x: hidden;
}
#wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#surprise {
  position: absolute;
  height: 10%;
  top: 20%;
  right: -4vw;
  pointer-events: all;
}
.toggleCatAnim {
  animation: catAnim 10s forwards linear;
}
@keyframes catAnim {
  0% {
    right: -4vw;
  }
  5% {
    right: 0vw;
  }
  95% {
    right: 0vw;
  }
  100% {
    right: -4vw;
  }
}
html {
  background-image: url('/skills-icons/angular1.png'),
    url('/skills-icons/asm1.png'),
    url('/skills-icons/c1.png'),
    url('/skills-icons/django1.png'),
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

    url('/skills-icons/ranking/angularSkill.png'),
    url('/skills-icons/ranking/asmSkill.png'),
    url('/skills-icons/ranking/cSkill.png'),
    url('/skills-icons/ranking/djangoSkill.png'),
    url('/skills-icons/ranking/elixirSkill.png'),
    url('/skills-icons/ranking/expressSkill.png'),
    url('/skills-icons/ranking/javaSkill.png'),
    url('/skills-icons/ranking/jsSkill.png'),
    url('/skills-icons/ranking/mDBSkill.png'),
    url('/skills-icons/ranking/mySQLSkill.png'),
    url('/skills-icons/ranking/nextSkill.png'),
    url('/skills-icons/ranking/postgreSQLSkill.png'),
    url('/skills-icons/ranking/pySkill.png'),
    url('/skills-icons/ranking/reactSkill.png'),
    url('/skills-icons/ranking/springSkill.png'),
    url('/skills-icons/ranking/tailwindSkill.png'),
    url('/skills-icons/ranking/tsSkill.png'),
    url('/skills-icons/ranking/vueSkill.png'),
  

    url('/contact/background-logo.png'),
    url('/contact/email-icon.png'),
    url('/contact/github-mark-white.png'),
    url('/contact/linkedin-icon.png'),
    url('/contact/phone-icon-white.png'),
    url('/cats/g/g1.jpg'),
    url('/cats/g/g2.jpg'),
    url('/cats/k/k1-fix.jpg'),
    url('/cats/k/k2.jpg'),
    url('/cats/k/k3.jpg'),
    url('/cats/k/k4.jpg'),
    url('/cats/m/m1.jpg'),
    url('/cats/m/m2.jpg'),
    url('/cats/m/m3.jpg'),
    url('/cats/m/m4.jpg'),
    url('/cats/m/m5.jpg'),
    url('/cats/z/z1.jpg'),
    url('/cats/z/z2.jpg'),
    url('/cats/z/z3.jpg'),
    url('/portfolio-imgs/epr-bigimg.jpg'),
    url('/portfolio-imgs/gh-icon-port.png'),
    url('/portfolio-imgs/link-icon-port.png'),
    url('/portfolio-imgs/nc-bigimg.png'),
    url('/portfolio-imgs/y1.jpg'),
    url('/portfolio-imgs/y2.jpg'),
    url('/resume/cv-image.png'),
    url('/nav-icons/email-icon.png'),
    url('/nav-icons/github-mark-white.png'),
    url('/nav-icons/linkedin-icon.png'),
    url('/nav-icons/menuIconMobile.png');

    background-size: 0;
}
</style>
