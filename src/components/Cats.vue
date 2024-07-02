<template>
    <div id="cats-container">
        <h2 id="title">Cats</h2>
        <div id="content-container">
            <div id="clickables">
                <p class="cat-names" id="geppa" @click="(e) => catigator(e)">Geppa</p>
                <p class="cat-names" id="kajsa" @click="(e) => catigator(e)">Kajsa</p>
                <p class="cat-names" id="milia" @click="(e) => catigator(e)">Milia</p>
                <p class="cat-names" id="tiger" @click="(e) => catigator(e)">Tiger</p>
                <p class="cat-names" id="zeke" @click="(e) => catigator(e)">Zeke</p>
            </div>
            <div id="img-container">
                <div id="g-imgs" v-show="geppa">
                    <img id="g1" src="/cats/g/g1.jpg"></img>
                    <img id="g2" src="/cats/g/g2.jpg"></img>
                </div>
                <div id="k-imgs" v-show="kajsa">
                    <img id="k1" src="/cats/k/k1-fix.jpg"></img>
                    <img id="k2" src="/cats/k/k2.jpg"></img>
                    <img id="k3" src="/cats/k/k3.jpg"></img>
                    <img id="k4" src="/cats/k/k4.jpg"></img>
                </div>
                <div id="m-imgs" v-show="milia">
                    <img id="m1" src="/cats/m/m1.jpg"></img>
                    <img id="m2" src="/cats/m/m2.jpg"></img>
                    <img id="m3" src="/cats/m/m3.jpg"></img>
                    <img id="m4" src="/cats/m/m4.jpg"></img>
                    <img id="m5" src="/cats/m/m5.jpg"></img>
                </div>
                <div id="t-imgs" v-show="tiger">
                    <img id="t1" src="/cats/t/t1.jpg"></img>
                </div>
                <div id="z-imgs" v-show="zeke">
                    <img id="z2" src="/cats/z/z2.jpg"></img>
                    <img id="z1" src="/cats/z/z1.jpg"></img>
                    <img id="z3" src="/cats/z/z3.jpg"></img>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            geppa: true,
            kajsa: false,
            milia: false,
            tiger: false,
            zeke: false,
            prevSelected: "geppa",
            imgCon: ""
        }
    },
    methods: {
        catigator(e) {
            this.geppa = false
            this.kajsa = false
            this.milia = false
            this.tiger = false
            this.zeke = false
            
            let currentCat = (e.target.innerText).toLowerCase()

            document.getElementById(this.prevSelected).style.color = "white"
            document.getElementById(currentCat).style.color = "#7e9af5"
            
            switch(currentCat) {
                case "geppa":
                    this.geppa = true;
                    break;
                case "kajsa":
                    this.kajsa = true;
                    break;
                case "milia":
                    this.milia = true;
                    break;
                case "tiger":
                    this.tiger = true;
                    break;
                case "zeke":
                    this.zeke = true;
                    break;
                default:
                    break;
            }
            this.prevSelected = currentCat;
            document.getElementById("img-container").scrollTop = 0;
        }
    },
    mounted() {
        document.getElementById(this.prevSelected).style.color = "#7e9af5"
        this.imgCon = document.getElementById("#img-container")
    }
}
</script>


<style scoped>
@font-face {
    font-family: "OutfitR";
    src: url('$fonts/Outfit-Regular.ttf')
}
#cats-container {
    height: 95%;
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: slideUpComponent 0.2s forwards;
}
#title {
    font-family: OutfitR, sans-serif;
    color: #6999eb;
    font-size: 24px;
    height: 60px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
#content-container {
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#clickables {
    width: 450px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: solid;
    border-left: solid;
    border-right: solid;
    border-color: #4a5ddb46;
    background-color: #13141a;
    border-radius: 15px 15px 0 0;
}
.cat-names {
    font-family: OutfitR, sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
}
.cat-names:hover {
    color: #4a5edb !important; 
    cursor: pointer;
}
.cat-names:active {
    color: #629fe9 !important; 
}
#img-container {
    width: 100%;
    height: 95%;
    border: solid;
    border-color: #4a5ddb46;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #13141a;
    border-radius: 15px;
    padding-bottom: 4%;
}
::-webkit-scrollbar {
    width: 12.5px;
    border: none;
    border-radius: 15px;
}
::-webkit-scrollbar-thumb {
    background-color: #3c5792;
    border-radius: 3px;
    margin: auto;
    border-radius: 15px;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #5576bd;
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: #1a1b2c;
  border-radius: 15px;
  margin: 6px 0 6px 0;
}

/* G */
#g-imgs {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 6px;
}
#g1, #g2 {
    width: 80%;
    margin-top: 4%;
    border-radius: 15px;
}

/* M */
#m-imgs {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 6px;
}
#m1, #m2, #m3, #m4, #m5 {
    width: 80%;
    margin-top: 4%;
    border-radius: 15px;
}
#m1 {
    width: 70%;
}
#m4 {
    width: 50%;
}

/* K */
#k-imgs {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 6px;
}
#k1, #k2, #k3, #k4 {
    width: 80%;
    margin-top: 4%;
    border-radius: 15px;
}
#k1 {
    width: 60%;
    border-radius: 50%;
}

/* Z */
#z-imgs {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 6px;
}
#z1, #z2, #z3 {
    width: 60%;
    margin-top: 4%;
    border-radius: 15px;
}
#z2 {
    width: 85%
}
#z3 {
    width: 70%;
}

/* T */
#t-imgs {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 6px;
}

#t1 {
    margin-top: 4%;
    width: 80%;
    border-radius: 15px;
}

/* MQs */
@media only screen and (max-width: 600px) {
    #cats-container {
        width: 550px;
    }
    #clickables {
        width: 400px;
    }
}
@media only screen and (max-width: 400px) {
    #cats-container {
        width: 320px;
        
    }
    #clickables {
        width: 320px;
    }
    
    #img-container {
        border-radius: 0 0 15px 15px;
    }

    #g-imgs {
        margin: 0;
        padding-bottom: 20%;
    }
    #g1, #g2 {
        width: 90%;
    }
    #t-imgs {
        margin: 0;
        padding-bottom: 50%;
    }
    #t1 {
        width: 90%;
    }

    #k-imgs {
        margin: 0;
    }
    #k1, #k2, #k3, #k4 {
        width: 95%;
    }

    #m-imgs {
        margin: 0;
    }
    #m1, #m2, #m3, #m4, #m5 {
        width: 95%;
    }
    #m4 {
        width: 90%;
    }

    #z-imgs {
        margin: 0;
    }
    #z1, #z2, #z3 {
        width: 95%;
    }
    #t-imgs {
        margin: 0;
    }
    #t1 {
        width: 95%;
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
