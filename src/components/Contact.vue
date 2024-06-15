<template>
    <router-link to="/cats"><img id="surprise" src="/surprise.png" /></router-link>
    <img id="bg-logo" src="/contact/background-logo.png"></img>
    <div id="contact-container">
        <h2>Contact</h2>

        <div id="phone-and-mail">
            <p><img id="mail-icon" src="/contact/email-icon.png" class="icons"></img>johansson_a95@hotmail.com</p>
            <p><img src="/contact/phone-icon-white.png" class="icons"></img>+4670 748 38 97</p>
        </div>

        <div id="gh-and-li">
            <a href="https://github.com/aljo95">
                <img class="bottom-icons" src="/contact/github-mark-white.png"></img>
            </a>
            <a href="https://www.linkedin.com/in/johansson-alex/">
                <img class="bottom-icons" src="/contact/linkedin-icon.png"></img>
            </a>
        </div>
        <p id="copyright-string">&copy; 2024 <br>Alexander Johansson</p>
    </div>
</template>




<script>
export default {
    mounted() {
        this.counterInterval = 0;
        this.counterInterval = setInterval(() => {
            document.getElementById("surprise").classList.toggle("toggleCatAnim");
        }, 10000)
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
#bg-logo {
    position: absolute;
    z-index: 0;
    opacity: 0.06;
    width: 500px;
}
#contact-container {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: slideUpComponent 0.25s forwards;
    z-index: 1;
}
h2 {
    margin: 0;
    color: white;
    font-size: 32px;
    height: 45px;
    font-family: OutfitR, sans-serif;
    color: #6999eb;
    margin-bottom: 10%;
}
#phone-and-mail {
    width: 83%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10%;
    border-left: solid;
    padding-left: 10px;
    padding-right: 10px;
    border-color: #4a5edb;
}
#mail-icon {
    width: 25px;
    height: 25px;
    margin-top: 2px;
    margin-left: -1%;
}
p {
    font-size: 17px;
    margin: 0;
    display: flex;
    align-items: center;
    font-family: OutfitR, sans-serif;
}
.icons {
    width: 20px;
    height: 20px;
    margin-right: 3%;
}
#gh-and-li {
    width: 125px;
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
}
.bottom-icons {
    width: 30px;
    height: 30px;
    background-color: #13141a;
    border-radius: 10px;
    padding: 10px;
}
.bottom-icons:hover {
    background-color: #22232cb9;
}
#copyright-string {
    margin-top: 5%;
    text-align: center;
    font-size: 15px;
    opacity: 0.96;
}
@keyframes slideUpComponent {
    0% {
        margin-top: 1.5%;
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
@media only screen and (max-width: 400px) {
    #bg-logo {
        width: 100%;
    }
    #surprise {
        position: absolute;
        height: 10%;
        top: 100%;
        right: 20%;
        pointer-events: all;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    .toggleCatAnim {
        animation: catAnim 10s forwards linear;
    }
@keyframes catAnim {
    0% {
        top: 100%;
    }
    5% {
        top: 91.5%;
    }
    95% {
        top: 91.5%;
    }
    100% {
        top: 100%;
    }
}
}
</style>

