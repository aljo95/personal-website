<template>
    <router-link to="/cats"><img id="surprise" src="/surprise.png" /></router-link>
    <div id="resume-container">
        <!--<a id="download-link" href="/resume/CV_Alexander_Johansson.pdf" download>Download Resume</a>-->
        <p id="download-link">Updating soon</p>
        <div id="img-container">
            <!--<img id="cv-image" src="/resume/cv-image.png"></img>-->
        </div>

    </div>
</template>


<script>
export default {
    mounted() {
        this.counterInterval = 0;
        this.counterInterval = setInterval(() => {
            document.getElementById("surprise").classList.toggle("toggleCatAnim");
        }, 50000)
    },
    unmounted() {
        clearInterval(this.counterInterval);
    }
}
</script>


<style scoped>
@font-face {
    font-family: "OutfitR";
    src: url('$fonts/Outfit-Regular.ttf')
}
#resume-container {
    width: 1150px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    animation: slideUpComponent 0.25s forwards;
}
#download-link {
    font-family: OutfitR, sans-serif;
    font-size: 22px;
    color: #6999eb;
    height: 12.5%;
    display: flex;
    align-items: center;
}
#img-container {
    overflow-y: auto;
    overflow-x: hidden;
    width: 70%;
    height: 87.5%;
}
@media only screen and (max-width: 1150px) {
    #resume-container {
        width: 805px;
    }
    #img-container {
        width: 100%;
    }
}
@media only screen and (max-width: 800px) {
    #resume-container {
        width: 600px;
    }
    #img-container {
        width: 120%;
        height: auto;
    }
    #cv-image {
        width: 100%;
    }
    #download-link {
        font-size: 16px;
    }
}

@media only screen and (max-width: 500px) {
    #download-link {
        height: 15%;
    }
    #surprise {
        display: none;
    }
}
@keyframes slideUpComponent {
    0% {
        margin-top: 1%;
        opacity: 0;
    }
    60% {
        opacity: 0.5;
    }
    100% {
        margin-top: 0%;
        opacity: 1;
    }
}
</style>
