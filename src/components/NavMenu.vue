<template>
    <div id="all-nav-container">
        <div id="nav-container">
            <router-link to="/" exact tag="div" class="rl">Home</router-link>
            <router-link to="/about" exact tag="div" class="rl">About me</router-link>
            <router-link to="/about" class="rl">Portfolio</router-link>
            <router-link to="/about" class="rl">Skills</router-link>
            <router-link to="/about" class="rl">Resume</router-link>
            <router-link to="/about" class="rl">Contact</router-link>
        </div>
        <div id="img-links">
            <p id="GH">GH</p>
            <p id="LI">LI</p>
            <p id="ML">MAIL</p>
        </div>
    </div>
</template>




<script>
export default {
}
</script>



<style scoped>
@font-face {
    font-family: "SourceFont";
    src: url("./fonts/static/SourceCodePro-Regular.ttf")
}
@font-face {
    font-family: "OutfitR";
    src: url("./fonts/static/Outfit-Regular.ttf")
}
@font-face {
    font-family: "OutfitM";
    src: url("./fonts/static/Outfit-Medium.ttf")
}
#all-nav-container {
    position: fixed;
    width: 130px;
    height: 275px;
    border-top: solid;
    border-bottom: solid;
    border-color: #4a5edb;
    border-radius: 5%;
    background-color: #4a5ddb04;
    top: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 2000px;
    animation: slidin 2.5s;
    
}
#nav-container {                 /* */
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 10% 0 10% 0;
    background-color: #13141a;
    border-radius: 10px;
    animation: fadeInAfterFinish 2.5s;
}
#nav-container:hover {
    /* transition smooth color l8er*/ 
    background-color: #1a1b22;
}
.rl {
    color:white;
    margin-left: 15%;
    text-decoration: none;
    font-family: 'OutfitR', sans-serif;
    font-size: 16px;
}

.rl:hover {
    color: #4a5edb; 
}
.rl:active {
    color: #629fe9;
}
.router-link-exact-active {
    color: #7e9af5;
}
#img-links {            /* */
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #13141a;
    border-radius: 10px;
    animation: fadeInAfterFinish 2.5s;
}
p {
    color: white;
    font-size: 12px;
}

@keyframes slidin {
    0% {
        height: 0;
        border-radius: 20px;
    }
    20% {
        height: 0;
        border-radius: 20px;
    }
    21% {
        border-radius: 5%;
    }
    60% {
        height: 29.9%;
        
    }
    100% {
        height: 29.9%;
    }
}
@keyframes fadeInAfterFinish {
    0% {
        opacity: 0;
    }
    55% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>

