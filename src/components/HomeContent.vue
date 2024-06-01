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
    border-color: #141c4d;
    padding-left: 5px;
}
#first {
    color: #FFFFF0;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 2.5s steps(15, end) forwards, blink 1s 3;
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
    animation: typingLong 3s steps(30, end) forwards, blink 1s infinite;
    animation-delay: 3s;
    opacity: 0;
}
@keyframes typingLong { 
    0% { 
        width: 0px; 
        opacity: 1;
    } 
    25% {
        width: 0px;
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
    border-color: #141c4d;
    width: 875px;
    margin: 0 auto 0 auto;
    opacity: 0;
    /*
    animation: openCarousel 8s; 
    animation-timing-function: linear; 
    animation-delay: 2s;
    animation-fill-mode: forwards;
    */
    animation: openCarousel 8s forwards;
    animation-delay: 2s;
    margin-top: 10px;
    margin-bottom: 10px;
/* animation: typingLong 3s steps(30, end) forwards, blink 1s infinite; */
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
    width: 320px;
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
</style>

