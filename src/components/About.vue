<template>
    <div id ="about-container">
        <div id="title-con">
            <h2 id="title"> About me</h2>
        </div>
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
</template>




<script>
export default {
}
</script>



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
    font-size: 16px;
    border-left: solid;
    border-color: #4a5edb;
    padding-left: 1%;
}
#about-container {
    height: 90vh;
    width: 60%;
    padding-left: 1%;
    animation: slideUpComponent 0.3s forwards;
}
#title-con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    margin-top: 2%;
}
@keyframes slideUpComponent {
    0% {
        margin-top: 5%;
        opacity: 0;
    }
    60% {
        opacity: 0.5;
        margin-top: -0.75%;
    }
    100% {
        margin-top: 0%;
        opacity: 1;
    }
}
@media only screen and (max-width: 1200px) {
  #about-container {
    width: 70%;
  }
}
@media only screen and (max-width: 800px) {
  #about-container {
    width: 80%;
  }
}
</style>

