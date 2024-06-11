<template>
    <div id="resume-container">

        <a id="download-link" href="/CV_Alexander-Johansson.pdf" download>Download Resume</a>
        <div id="img-container">
            <img id="cv-image" src="/cv-image.png"></img>
        </div>


    </div>
</template>




<script>
export default {
} //#6999eb; #4a5edb;
</script>


<style scoped>
@font-face {
    font-family: "OutfitR";
    src: url("./fonts/static/Outfit-Regular.ttf")
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

}
@keyframes slideUpComponent {
    0% {
        margin-top: 5%;
        opacity: 0;
    }
    60% {
        opacity: 0.5;
        /*margin-top: -0.75%;*/
    }
    100% {
        margin-top: 0%;
        opacity: 1;
    }
}

</style>

