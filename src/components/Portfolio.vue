<template>

    <router-link to="/cats"><img id="surprise" src="/surprise.png" /></router-link>
    <div id="portfolio-container">
        <h2 id="title">Web Portfolio</h2>
        <p id="sub-title">Solo Dev Projects</p>

        <div id="first-container">
            <h3 class="project-title">NodeChat</h3>
            <div id="first-links">
                <a href="https://github.com/aljo95/NodeChat"><img id="gh-icon" src="/portfolio-imgs/gh-icon-port.png"></img></a>
                <a href="http://www.nodechat.live"><img id="link-icon" src="/portfolio-imgs/link-icon-port.png"></img></a>
            </div>
            <div class="project-description1">
                <div class="text-lines">Full-stack real-time chat application.</div>
                <div class="text-lines" id="first-second">Built with React, Express, MongoDB in Node.js.</div>
                <div class="text-lines" id="first-third">Dockerized and deployed in an AWS EC2 instance.</div>
                <div class="text-lines">Nginx reverse proxy with Certbot and Let's encrypt.</div>
            </div>
            <div id="link-img-1"><a class="link-text" href="https://nodechat.live">nodechat.live</a></div>
            <img class="img-1" src="/portfolio-imgs/nc-bigimg.png"></img>
        </div>
        <div id="second-container">
            <h3 class="project-title">Improved Police Reports</h3>
            <div id="first-links">
                <a href="https://github.com/aljo95/improved-police-next.js"><img id="gh-icon" src="/portfolio-imgs/gh-icon-port.png"></img></a>
                <a href="https://enklapolisrapporter.vercel.app/"><img id="link-icon" src="/portfolio-imgs/link-icon-port.png"></img></a>
            </div>
            <div class="project-description2">
                <div class="text-lines">Next.js application in TypeScript.</div>
                <div class="text-lines" id="first-second">Improved Swedish police's incidents report page by extending it's functionalities.</div>
                <div class="text-lines" id="first-third">Consumes a public API and scrapes pages with Next.js serverless functions.</div>
                <div class="text-lines">Hosted for free via Vercel.</div>
            </div>
            <div id="link-img-1"><a class="link-text" href="https://enklapolisrapporter.vercel.app/">Simple Police Reports</a></div>
            <img class="img-1" src="/portfolio-imgs/epr-bigimg.jpg"></img>
        </div>
        <div id="third-container">
            <h3 class="project-title">Youtube Side Comments</h3>
            <div id="first-links">
                <a href="https://github.com/aljo95/yt-comment-side-view"><img id="gh-icon" src="/portfolio-imgs/gh-icon-port.png"></img></a>
                <a href="https://chromewebstore.google.com/detail/youtube-side-comments/lfjgegiodinfcejpdfoclmljkllkmgpf"><img id="link-icon" src="/portfolio-imgs/link-icon-port.png"></img></a>
            </div>
            <div class="project-description3">
                <div class="text-lines">Front-end based Chrome extension.</div>
                <div class="text-lines" id="first-second">Adds functionality to Youtube video viewer by allowing comments to be read on the side of the video.</div>
                <div class="text-lines">Available on the Chrome Web store with several active users.</div>
            </div>
            <div id="link-img-1"><a class="link-text" href="https://chromewebstore.google.com/detail/youtube-side-comments/lfjgegiodinfcejpdfoclmljkllkmgpf">Youtube Side Comments</a></div>
            <img class="img-3" v-bind:src="GIFSimulate"></img>
        </div>
    </div>
</template>




<script>
export default {
    data() {
        return {
            GIFSimulate: "/portfolio-imgs/y1.jpg"
        }
    },
    mounted() {
        setInterval(() => {
            if (this.GIFSimulate === "/portfolio-imgs/y1.jpg")
                this.GIFSimulate = "/portfolio-imgs/y2.jpg"
            else if (this.GIFSimulate === "/portfolio-imgs/y2.jpg")
                this.GIFSimulate = "/portfolio-imgs/y1.jpg"
        }, 4000)
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
#title, #sub-title {
    /*margin-top: 5%;*/
    font-family: OutfitR, sans-serif;
    color: #6999eb;
    font-size: 28px;
}
#sub-title {
    /*margin-top: 1%;*/
    color: #6999eb;
    font-size: 18px;
    margin-top: -10px;
}
#first-links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80px;
    height: 40px;
    background-color: #172133;
    border-radius: 15px;
    opacity: 0.95;
    
}
#gh-icon {
    width: 20px;
    height: 20px;
    margin-top: 3px;
}
#link-icon {
    margin-top: 3px;
    width: 25px;
    height: 25px;
}

#portfolio-container {
    height: 100%;
    width: 1160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    animation: slideUpComponent 0.2s forwards;
}
@keyframes slideUpComponent {
    0% {
        margin-top: 1%;
        opacity: 0;
    }
    60% {
        opacity: 0.5;
        /*margin-top: -0.75%;*/
    }
    100% {
        opacity: 1;
        margin-top: 0%;
    }
}

::-webkit-scrollbar {
    width: 12.5px;
    border: none;
}
::-webkit-scrollbar-thumb {
    background-color: #3c5792; /*#5278b9d5;  #4a5edb; */
    border-radius: 3px;
    margin: auto;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #5576bd;
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: #1a1b2c;
}



#first-container, #second-container, #third-container {
    border-top: solid;
    border-width: 2px;
    width: 1075px;
    border-color: #172133;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: OutfitR, sans-serif;
    color: white;
    margin-bottom: 25px;
}
.project-title {
    font-family: OutfitR, sans-serif;
    color: #6999eb;
}
.project-description1, .project-description2, .project-description3 {
    
    border-left: solid;
    
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 2px;
    border-color: #4a5edb;
    border-width: 4px;
    width: 410px;
    margin-top: 2%;
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
.project-description2 {
    width: 600px !important;
}
.project-description3 {
    width: 570px !important;
}
.text-lines {
    margin: 0;
    padding: 0;
    font-family: OutfitR, sans-serif;
    font-size: 18px;
}
#first-second {
    margin: 10px 0 10px 0;
}
#first-third {
    margin-bottom: 10px;
}
#link-img-1 {
    font-size: 22px;
    margin-bottom: 20px;
    margin-top: -5px;
}
.img-1, .img-3 {
    width: 96%;
    border: solid;
    border-radius: 15px;
    border-color: #3c5792;
}
.link-text:link {
    color: #6894f3;
}
.link-text:visited {
    color: #6894f3;
}
.link-text:hover {
    color: #3c5792;
}
.link-text:active {
    color: #3c5792;
}

/* media queries */
@media only screen and (max-width: 1180px) {
    #first-container, #second-container, #third-container {
        width: 900px;
    }
    #surprise {
        display: none;
    }
}
@media only screen and (max-width: 1000px) {
    #first-container, #second-container, #third-container {
        width: 800px;
    }
    #portfolio-container {
        height: 100dvh !important;
    }
    #surprise {
        display: none;
    }
}
@media only screen and (max-width: 915px) {
    #first-container, #second-container, #third-container {
        width: 700px;
    }
    #portfolio-container {
        height: 100dvh !important;
    }
    #surprise {
        display: none;
    }
}
@media only screen and (max-width: 815px) {
    #first-container, #second-container, #third-container {
        width: 100%;
    }
    .project-description1, .project-description2, .project-description3 {
        width: 90% !important;
    }
    #portfolio-container {
        height: 100dvh !important;
    }
    .text-lines {
        font-size: 16px;
    }
    #link-img-1 {
        font-size: 18px;
        padding: 10px 0 5px 0;
    }
    #first-links {
        margin-bottom: 10px;
    }
    #surprise {
        display: none;
    }
} /*text-wrap:wrap; */
</style>

