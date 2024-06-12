
<template>
    <div id="all-nav-container" v-if="!isMobile">
        <div id="nav-container">
            <router-link to="/" exact tag="div" class="rl">Home</router-link>
            <router-link to="/about" exact tag="div" class="rl">About me</router-link>
            <router-link to="/portfolio" class="rl">Portfolio</router-link>
            <router-link to="/skills" class="rl">Skills</router-link>
            <router-link to="/resume" class="rl">Resume</router-link>
            <router-link to="/contact" class="rl">Contact</router-link>
        </div>
        <div id="img-links">
            <a href="https://github.com/aljo95/PersonalPage">
                <img id="GH-Icon" src="/nav-icons/github-mark-white.png"></img>
            </a>
            <a href="https://www.linkedin.com/in/johansson-alex/">
                <img id="LI-Icon" src="/nav-icons/linkedin-icon.png"></img>
            </a>
            <a href="mailto:johansson_a95@hotmail.com">
                <img id="MAIL-Icon" src="/nav-icons/email-icon.png"></img>
            </a>
        </div>
    </div>
        <img id="mobile-menu" src="/nav-icons/menuIconMobile.png" @click="toggleMenu" v-if="isMobile"></img>
        <div id="mobile-nav-container" v-if="isMobileMenuClicked && isMobile">
            <img id="mobile-menu-opened" src="/nav-icons/menuIconMobile.png" @click="toggleMenu" ></img>
            <div id="mobile-routes-container">
                <router-link to="/" exact tag="div" class="rl mrl" @click="toggleMenu">Home</router-link>
                <router-link to="/about" exact tag="div" class="rl mrl" @click="toggleMenu">About me</router-link>
                <router-link to="/portfolio" class="rl mrl" @click="toggleMenu">Portfolio</router-link>
                <router-link to="/skills" class="rl mrl" @click="toggleMenu">Skills</router-link>
                <router-link to="/resume" class="rl mrl" @click="toggleMenu">Resume</router-link>
                <router-link to="/contact" class="rl mrl" @click="toggleMenu">Contact</router-link>
            </div>
            <div id="mobile-icon-links">
                <a href="https://github.com/aljo95/PersonalPage">
                    <img id="GH-Icon-Mobile" src="/nav-icons/github-mark-white.png"></img>
                </a>
                <a href="https://www.linkedin.com/in/johansson-alex/">
                    <img id="LI-Icon-Mobile" src="/nav-icons/linkedin-icon.png"></img>
                </a>
                <a href="mailto:johansson_a95@hotmail.com">
                    <img id="MAIL-Icon-Mobile" src="/nav-icons/email-icon.png"></img>
                </a>
            </div>
        </div>
</template>


<script>
export default {
    data() {
        return {
            isMobile: false,
            isMobileMenuClicked: false
        }
    },
    created: function() {
        window.addEventListener("resize", (e) => {
            if ((window.location.href).slice(-9) === 'portfolio' || (window.location.href).slice(-10) === 'portfolio/') {
                if (e.target.innerWidth <= 1280) this.isMobile=true
                else if (e.target.innerWidth > 1280) this.isMobile=false 
            } else {
                if (e.target.innerWidth <= 1180) this.isMobile=true
                else if (e.target.innerWidth > 1180) this.isMobile=false
            }
        });
    },
    destroyed: function() {
        window.removeEventListener("resize", e);
    },
    mounted() {
        if ((window.location.href).slice(-9) === 'portfolio' || (window.location.href).slice(-10) === 'portfolio/') {
            if (window.innerWidth <= 1245) this.isMobile=true
            else if (window.innerWidth > 1245) this.isMobile=false 
        } else {
            if (window.innerWidth <= 1180) this.isMobile=true
            else if (window.innerWidth > 1180) this.isMobile=false
        }
    },
    methods: {
        toggleMenu() {
            if (document.querySelector("#mobile-nav-container")) {
                document.querySelector("#mobile-nav-container").classList.toggle("classSlideIn")
                setTimeout(() => {
                    this.isMobileMenuClicked = !this.isMobileMenuClicked;
                    return;
                }, 200)
            } else {
                this.isMobileMenuClicked = !this.isMobileMenuClicked;
                setTimeout(() => {
                    if (this.isMobileMenuClicked)
                        document.querySelector("#mobile-nav-container").classList.toggle("classSlideOut");
                    
                }, 10)
            }
        }
    }
}
</script>


<style>
@font-face {
    font-family: "OutfitR";
    src: url("./fonts/static/Outfit-Regular.ttf")
}
#all-nav-container {
    position: fixed; /* fixed? */
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
    animation: slidin 2.5s;
	will-change: transform;
    z-index: 99;
}
#nav-container {
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
    z-index: 99;
}
#nav-container:hover {
    /* transition smooth color l8er*/ 
    background-color: #1a1b22b9;
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
#img-links {
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #13141a;
    border-radius: 10px;
    animation: fadeInAfterFinish 2.5s;
}
#img-links:hover {
    background-color: #1a1b22b9;
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
        height: 275px;
    }
    100% {
       height: 275px;
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
#GH-Icon {
    width: 22.5px;
    height: 22.5px;
    padding-top: 30%;
}
#LI-Icon {
    width: 17.5px;
    height: 17.5px;
    padding-top: 30%;
}
#MAIL-Icon {
    width: 30px;
    height: 30px;
    padding-top: 25%;
}

/*****  Mobile *****/
#mobile-menu { /* Icon */
    width: 35px;
    height: 35px;
    background-color: #13141a;
    padding: 15px;
    border-radius: 0 0 15px 0;
    position: absolute;
    z-index: 99;
}
#mobile-nav-container {
    position: absolute;
    width: 240px;
    height: 340px;
    background-color: #13141a;
    left: -60%;
    z-index: 99;
}
.classSlideOut {
    animation: slideOutMobileMenu 0.2s linear forwards;
}
.classSlideIn {
    animation: slideInMobileMenu 0.2s linear forwards;
}
@keyframes slideOutMobileMenu {
    0% {
        left: -60%;
    }
    100% {
        left: 0%;
    }
}
@keyframes slideInMobileMenu {
    0% {
        left: 0%;
    }
    100% {
        left: -60%;
    }
}
#mobile-menu-opened {
    float:right;
    font-size: 24px;
    width: 33px;
    height: 33px;
    padding: 5%;
    margin-top: 7px;
    margin-left: 7px;
    z-index: 2;
}
#mobile-menu-opened:active { 
    background-color: #49494e;
}
#mobile-routes-container {
    height: 70%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 5%;
}
.mrl {
    font-size: 22px;
    font-weight: bold;
}
#mobile-icon-links {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 10px;
}
#GH-Icon-Mobile {
    width: 35px;
    height: 35px;
}
#LI-Icon-Mobile {
    width: 30px;
    height: 30px;
}
#MAIL-Icon-Mobile {
    width: 40px;
    height: 40px;
    padding-top: 7.5px;
}
/*
@media only screen and (max-width: 1200px) {
  #mobile-menu {
    width: 35px;
    height: 35px;
    padding: 15px;
  }
}
*/
</style>
