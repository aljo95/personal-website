<template>
    <div id="main-content">
        <div id="title-container">
            <h2 id="first">Alex Johansson</h2>
        </div>
        <div id="title-container-two">
            <h2 id="second">Software Engineer & Full Stack Developer</h2>
        </div>
        <div id="carousel-container">
            <carousel-comp /> 
        </div>
        
    </div>
</template>




<script>
import WrapAround from './Carousel.vue'
export default {
    components: {
        'carousel-comp' : WrapAround
    }
}
</script>



<style scoped>
#title-container, #title-container-two {
    width: 872px;
    height: 5%;
    display: flex;
    align-items: center;
    margin: 0 auto 0 auto;
    border-left: solid;
    /* border-color: #141c4d; */
    border-color: #4a5edb;
    padding-left: 5px;
}
#first {
    color: #FFFFF0;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 2.5s steps(20, end) forwards, blink 1s 3;
} 
  
@keyframes typing { 
    0% { 
        width: 0px; 
    } 
    65% {
        width: 0px;
    }
    100% { 
        width: 165px;
    } 
} 
@keyframes blink { 
    0%, 
    100% { 
        border-right: 2px solid transparent; 
    } 
    50% { 
        border-right: 2px solid #FFFFF0;
    }
} 
#second {
    color: #FFFFF0;
    white-space: nowrap;
    overflow: hidden;
    animation: typingLong 2s steps(40, end) forwards, blink 1s 2;
    animation-delay: 2.75s;
    opacity: 0;
}
@keyframes typingLong { 
    0% { 
        width: 0px; 
        opacity: 1;
    } 
    85%,
    100% { 
        width: 446px;
        opacity: 1;
    } 
} 

#main-content {
    height: 100%;
    /*width: 52.5%;*/
    width: 100%;
    /*border: solid;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: OutfitR, sans-serif;
    
}
#carousel-container {
    border-left: solid;
    border-right: solid;
    /*border-color: #141c4d;*/
    border-color: #4a5edb;
    width: 875px;
    margin: 0 auto 0 auto;
    opacity: 0;
    /*
    animation: openCarousel 8s; 
    animation-timing-function: linear; 
    animation-delay: 2s;
    animation-fill-mode: forwards;
    */
    animation: openCarousel 6s forwards;
    animation-delay: 1.5s;
    margin-top: 10px;
    margin-bottom: 10px;
}
@keyframes openTitles{
    
}
@keyframes openCarousel {
    0% {
        opacity: 0;
    }
    55% {
        opacity: 0;
    }
    70% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}
@font-face {
    font-family: "OutfitR";
    src: url("./fonts/static/Outfit-Regular.ttf")
}
h2 {
    font-size: 24px;
    font-weight:lighter;
}

/* media query 100vh/vw container */
@media only screen and (max-width: 1200px) {
  #carousel-container {
    /*width: 320px;*/
    width: 322px;
  }
  #title-container {
    width: 320px;
  }
  #title-container-two {
    width: 320px;
  }
  #second {
    font-size: 17px;
  }
}
@media only screen and (max-width: 340px) {
  #carousel-container {
    /*width: 320px;*/
    width: 302px;
  }
  #title-container {
    width: 300px;
  }
  #title-container-two {
    width: 300px;
  }
  #second {
    font-size: 17px;
  }
}
</style>

