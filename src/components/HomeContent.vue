<template>
    <router-link to="/cats"><img id="surprise" src="/surprise.png" /></router-link>
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
    },
    mounted() {
        window.addEventListener('click', this.clickFunc, true)
        this.counterInterval = 0;
        this.counterInterval = setInterval(() => {
            document.getElementById("surprise").classList.toggle("toggleCatAnim");
        }, 17500)
        setTimeout(() => {
            window.removeEventListener('click', this.clickFunc, true);
        }, 9000)
    },
    unmounted() {
        clearInterval(this.counterInterval);
        window.removeEventListener('click', this.clickFunc, true);
    },
    methods: {
        clickFunc() { /* click to bypass animations */
            let title_1 = document.getElementById("first")
            let title_2 = document.getElementById("second")
            let carouselContainer = document.getElementById("carousel-container")
            let allNavContainer = document.getElementById("all-nav-container")
            let navContainer = document.getElementById("nav-container")
            let imgLinks = document.getElementById("img-links")
            /* titles */
            title_1.style.animationDuration = "0s"
            title_1.style.animationDelay = "0s"
            title_2.style.animationDuration = "0s"
            title_2.style.animationDelay = "0s"
            /* carousel */
            carouselContainer.style.animationDuration = "0s"
            carouselContainer.style.animationDelay = "0s"
            /* nav list */
            allNavContainer.style.animationDuration = "0s"
            navContainer.style.animationDuration = "0s"
            imgLinks.style.animationDuration = "0s"
        }
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
    border-color: #4a5edb;
    padding-left: 5px;
}
#first {
    color: #FFFFF0;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s steps(20, end) forwards, blink 1s 3.75;
    opacity: 0;
} 
  
@keyframes typing { 
    0% { 
        width: 0px; 
        opacity: 1;
    } 
    70% {
        width: 0px;
    }
    100% { 
        width: 165px;
        opacity: 1;
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
    animation: typingLong 3s steps(40, end) forwards, blink 1s 4;
    animation-delay: 3.75s;
    opacity: 0;
}
@keyframes typingLong { 
    0% { 
        width: 0px; 
        opacity: 1;
    } 
    30% {
        width: 0px;
    }
    100% { 
        width: 446px;
        opacity: 1;
    } 
} 

#main-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: OutfitR, sans-serif;
    
}
#carousel-container {
    border-left: solid;
    border-right: solid;
    border-color: #4a5edb;
    width: 875px;
    margin: 0 auto 0 auto;
    opacity: 0;
    animation: openCarousel 6s forwards;
    animation-delay: 4.5s;
    margin-top: 10px;
    margin-bottom: 10px;
    pointer-events: none;
}
@keyframes openCarousel {
    0% {
        opacity: 0;
        pointer-events: none;
    }
    55% {
        opacity: 0;
    }
    70% {
        opacity: 1;
    }
    100% {
        opacity: 1;
        pointer-events:all;
    }
}
@font-face {
    font-family: "OutfitR";
    src: url('$fonts/Outfit-Regular.ttf')
}
h2 {
    font-size: 24px;
    font-weight:lighter;
}

/* media query 100vh/vw container */
@media only screen and (max-width: 1200px) {
  #carousel-container {
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
  #surprise {
    display: none;
  }
}
@media only screen and (max-width: 500px) {
    #bg-logo {
        width: 340px;
    }
    #surprise {
        display: none;
    }
}
@media only screen and (max-width: 340px) {
  #carousel-container {
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
  #bg-logo {
    width: 300px;
  }
  #surprise {
    display: none;
  }
}
</style>

