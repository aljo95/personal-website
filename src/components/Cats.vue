<template>
    <div id="cats-container">

        <h2 id="title">Bonus page: Me & my families' cats :)</h2>
        
        <div id="content-container">
            <div id="clickables">
                <p class="cat-names" id="geppa" @click="(e) => catigator(e)">Geppa</p>
                <p class="cat-names" id="kajsa" @click="(e) => catigator(e)">Kajsa</p>
                <p class="cat-names" id="milia" @click="(e) => catigator(e)">Milia</p>
                <p class="cat-names" id="tiger" @click="(e) => catigator(e)">Tiger</p>
                <p class="cat-names" id="zeke" @click="(e) => catigator(e)">Zeke</p>
            </div>
            <div id="img-container">
                <div v-if="geppa">
                    <img></img>
                    <p>GEPPIS</p>
                </div>
                <div v-if="kajsa">
                    <img></img>
                    <p>KAJSIS</p>
                </div>
                <div v-if="milia">
                    <img></img>
                    <p>MILLIS</p>
                </div>
                <div v-if="tiger">
                    <img></img>
                    <p>TIGGIS</p>
                </div>
                <div v-if="zeke">
                    <img></img>
                    <p>ZEKIS</p>
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
            prevSelected: "geppa"
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
        }
    },
    mounted() {
        document.getElementById(this.prevSelected).style.color = "#7e9af5"
    }
}
</script>



<style scoped>
@font-face {
    font-family: "OutfitR";
    src: url("./fonts/static/Outfit-Regular.ttf")
}
#cats-container {
    height: 100%;
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /*overflow-y: scroll;*/
    /*animation: slideUpComponent 0.2s forwards;*/
}
#title {
    font-family: OutfitR, sans-serif;
    color: #6999eb;
    font-size: 24px;
    height: 10%;
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
    width: 50%;
    height: 5%;
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
    width: 60px;
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
    outline: auto;
    overflow-y: auto;
}
</style>

