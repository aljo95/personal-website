<template>
    <!--<h4 id="hwaccelforce">-</h4> -->
    <div id="title-and-about-con">
        <div id="title-con">
                <h2 id="title"> About me</h2>
        </div>
        <div id ="about-container">
            
            <p>
                Developer and software engineer based in Stockholm. Started web development many years ago while learning the languages JavaScript, TypeScript and Python with libraries and frameworks such as React, Next, Express and Vue in Node.js along with Python Flask and Django.
            </p>
            <p>
                Formalized my computer science and engineering knowledge in university by attending the computer engineering programme at KTH, Royal Institute of Technology in Stockholm. Learned concepts and programming skills all the way from the bits in a CPU instruction and assembly programming to higher level concepts and languages such as CI/CD piplines and the C, C++ and Java languages.
            </p>
            <p>
                I have both led and been part of a wide array of projects developing web and mobile apps, backend REST APIs and embedded systems to name a few. Using an Agile workflow for courses in mordern software development has allowed me to understand the process of professional software development companies may apply.
            </p>
            <p>
                Outside of my formal education I have spent more time learning industry standard tools such as unit and regression testing with Jest and Cypress. Backend development with Java Spring Boot and Java Spring's other frameworks along with honing my skills in React, Vue and Express for Node.js development. For database technologies I prefer PostgreSQL for relational databases and MongoDB with Mongoose for simpler NoSQL backends.
            </p>
            <p>
                During my free time I still find myself often learning new tools for application based development and making various projects to implement them. Outside of developing software I have a large passion for the GNU/Linux OS along with FOSS principles, and enjoy automating processes with Bash scripting along with testing various distros, DEs and WMs for design and interactivity purposes. So far my favorites are Mint, Debian & Arch. 
            </p>
        </div>
    </div>

</template>




<script>
export default {
}
</script>

<style>
#title-and-about-con {
    z-index: 1;
}
#title-con {
    z-index: 1;
}
#about-container {
    z-index: 1;
}
</style>

<style scoped>
@font-face {
    font-family: "OutfitR";
    src: url("./fonts/static/Outfit-Regular.ttf")
}
h2 {
    color: #6999eb;
    font-family: OutfitR, sans-serif;
    font-size: 28px;
}

p {
    color:#e8eaeb;
    font-family: OutfitR, sans-serif;
    margin-bottom: 3%;
    font-size: 18px;
    border-left: solid;
    border-color: #4a5edb;
    padding-left: 1%;
}
#title-and-about-con {
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: slideUpComponent 0.2s forwards;
    z-index: 1;
}
#title-con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    margin-top: 2%;
    z-index: 1;
}
#about-container {
    width: 60%;
    overflow-y: auto;
    z-index: 1;
    height: 100%;
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
        margin-top: 0%;
        opacity: 1;
    }
}
@media only screen and (max-width: 1200px) {
  #about-container {
    width: 70%;
    padding-right: 5%;
  }
}
@media only screen and (max-width: 800px) {
  #about-container {
    width: 90%;
    padding-right: 5%;
    
  }
}


/* force animation accel =) 
#hwaccelforce {
    position: absolute;
    color: #03A062;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 4s steps(60, end) forwards, blink 1s 1;
    margin-bottom: 20%;
    opacity: 1;
} */
@keyframes typing { 
    0% { 
        width: 0vw;
    } 
    45% {
        width: 50vw;
    }
    100% { 
        width: 100vw;
    } 
} 
@keyframes blink { 
    0%, 
    100% { 
        border-right: 2px solid transparent; 
    } 
    50% { 
        border-right: 2px solid #090d14;
    } 
} 
::-webkit-scrollbar {
    width: 10px;
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
</style>

