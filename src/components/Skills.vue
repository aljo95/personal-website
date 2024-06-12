<template>
    <h4 id="hwaccelforce">-</h4>
    <div id="skills-container">
        <h2>Skills</h2>
        <div id="ranking-container">
            <p id="skill-type"> {{ skillType }} </p>
            <img class="ranking-images" :src="skillImage"></img>
        </div>
        <div id="icons-container">
            <div class="imgs-containers" v-for="s in skills"
            @mouseover="(e) => mouseOver(e)"
            @mouseleave="(e) => mouseLeave(e)"
            @click="(e) => mouseClick(e)"
            >
                <img :id=getID(s) :src=getImgLink(s)></img>
            </div>
        </div>
    </div>
</template>




<script>
export default {
    data() {
        return {
            skills: [
                "js", "ts", "java", "py", "asm", "c", "elixir", 
                "angular", "react", "next", "vue", "tailwind", 
                "mySQL", "postgreSQL", "mDB",
                "express", "spring", "django"
            ],
            skillType: "JavaScript",
            skillImage: "/skills-icons/ranking/jsSkill.png"
        }
    }, 
    methods: {
        getImgLink(skill) {
            return "/skills-icons/"+skill+"1.png";
        },
        getID(skill) {
            return skill;
        },
        getRankingImage(e) { /* */
            this.skillImage = "/skills-icons/ranking/" + e.id + "Skill.png"
        },
        mouseLeave(e) {
            if (e.target.children[0])
                e.target.children[0].classList.remove("hoverClick")
        },
        mouseOver(e) {
            if (e.target.children[0]) {
                e.target.children[0].classList.add("hoverClick")
            }
        },
        mouseClick(e) {
            let icons = document.querySelectorAll(".imgs-containers")
            let parent
            let targetElement

            if (e.target.nodeName === "DIV") {
                targetElement = e.target.children[0]
                parent = e.target
            }
            else if (e.target.nodeName === "IMG") {
                targetElement = e.target
                parent = e.target.parentElement
            }
            
            for (let i=0; i<icons.length; i++) {
                if (icons[i].children[0].classList.contains("onlyClick")) 
                    icons[i].children[0].classList.remove("onlyClick");
                if (icons[i].classList.contains("img-containers-clicked"))
                    icons[i].classList.remove("img-containers-clicked");
                
            }
            targetElement.classList.add("onlyClick");
            parent.classList.add("img-containers-clicked")

            // Call function to show skill level
            this.showSkill(targetElement)
            this.getRankingImage(targetElement)
            let rankCon = document.getElementById("ranking-container").children;
            for (let i=0; i<rankCon.length; i++) {
                rankCon[i].classList.toggle("rankAnim");
                setTimeout(() => {
                    rankCon[i].classList.remove("rankAnim");
                }, 250)
            }
        },
        showSkill(e) {
            switch(e.id) {
                case "js": {
                    this.skillType = "JavaScript"
                    break;
                }
                case "ts": {
                    this.skillType = "TypeScript"
                    break;
                }
                case "c": {
                    this.skillType = "C"
                    break;
                }
                case "java": {
                    this.skillType = "Java"
                    break;
                }
                case "py": {
                    this.skillType = "Python"
                    break;
                }
                case "mySQL": {
                    this.skillType = "MySQL"
                    break;
                }
                case "postgreSQL": {
                    this.skillType = "postgreSQL"
                    break;
                }
                case "mDB": {
                    this.skillType = "mongoDB"
                    break;
                }
                case "asm": {
                    this.skillType = "Assembly"
                    break;
                }
                case "angular": {
                    this.skillType = "Angular"
                    break;
                }
                case "elixir": {
                    this.skillType = "Elixir"
                    break;
                }
                case "react": {
                    this.skillType = "React.js"
                    break;
                }
                case "next": {
                    this.skillType = "Next.js"
                    break;
                }
                case "vue": {
                    this.skillType = "Vue.js"
                    break;
                }
                case "tailwind": {
                    this.skillType = "Tailwind CSS"
                    break;
                }
                case "express": {
                    this.skillType = "Express.js"
                    break;
                }
                case "spring": {
                    this.skillType = "Java Spring Boot"
                    break;
                }
                case "django": {
                    this.skillType = "Python Django"
                    break;
                }
            }
        }
    },
    mounted() {
        document.getElementById("js").classList.add("onlyClick")
        document.getElementById("js").parentElement.classList.add("img-containers-clicked")
    }
}
</script>



<style scoped>
@font-face {
    font-family: "OutfitR";
    src: url("./fonts/static/Outfit-Regular.ttf")
}
#skills-container {
    width: 750px;
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: slideUpComponent 0.3s forwards;
}
h2 {
    color: #6999eb;
    height: 7%;
    font-family: OutfitR, sans-serif;
    margin: 0;
    font-size: 26px;
    background-image: linear-gradient(to bottom right, #4a5ddb, rgb(118, 152, 214) );
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}
#icons-container {
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
}


/************* ICONS  ************/
#js, #ts, #c, #java, #py, #mySQL, #postgreSQL, #mDB, #asm, 
#angular, #elixir, #react, #next, #vue, #tailwind, #express,
#spring, #django {
    width: 45%;
    height: 45%;
    border-radius: 5px;
    transition: 0.15s;
}

.imgs-containers {
    border: solid;
    border-color: #2b2668;
    border-width: 2px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    margin: 10px;
    background-color: rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 7.5px 1px black;
    -webkit-box-shadow: 0 0 7.5px 1px black;
    box-shadow: 0 0 7.5px 1px black;
    transition: 0.25s;
}
.imgs-containers:hover {
    
    -moz-box-shadow: 0 0 7.5px 2px #4a5ddbb4;
    -webkit-box-shadow: 0 0 7.5px 2px #4a5ddbb4;
    box-shadow: 0 0 7.5px 2px #4a5ddbb4;
    border-color: #4a5ddbb4;
    background-color: #2b266867;
    cursor: pointer;
}
/* we will toggle this class on mouseover and click */
.hoverClick {
    width: 65% !important;
    height: 65% !important;
}
.onlyClick {
    width: 65% !important;
    height: 65% !important;
}
.img-containers-clicked {
    -moz-box-shadow: 0 0 7.5px 1px #2b2668;
    -webkit-box-shadow: 0 0 7.5px 1px #2b2668;
    box-shadow: 0 0 7.5px 2px #4a5ddbb4;
    border-color: #4a5ddbb4;
    background-color: #2b266867;
}

#ranking-container {
    width: 375px;
    height: 20%;
    border: solid;
    border-color: #2b2668;
    border-radius: 10px;
    border-width: 2px;
    /*background-color: #2b266848;*/
    background-image: linear-gradient(to bottom right, #2b266848, #13102c48, rgb(12, 12, 12));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    margin-bottom: 1.5%;
    
}
#skill-type {
    font-family: OutfitR, sans-serif;
    color: #6999eb;
    margin: 0;
    font-weight:bold;
    margin-top: 1%;
    font-size: 14px;
}
.ranking-images {
    width: 60%;
    height: 60%;
}
.rankAnim {
    animation: rankingIn 0.5s;
}
@keyframes rankingIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes slideUpComponent {
    0% {
        margin-top: 1.5%;
        opacity: 0;
    }
    60% {
        opacity: 0.5;
        /*margin-top: -0.5%;*/
        margin-top: 0;
        margin-bottom: 0;
    }
    100% {
        opacity: 1;
        margin-bottom: 50%;
        margin-top: 50%;
    }
}

@media only screen and (max-width: 600px) {
    #skills-container {
        height: 50%;
    }
    #ranking-container {
        width: 280px !important;
        height: 65px !important;
        min-height: 65px !important;
        max-height: 65px !important;
    }
    #skill-type {
        font-size: 14px;
    }
    #icons-container {
        height: 65vh;
    }
}
@media only screen and (max-width: 400px) {
    #skills-container {
        height: 100%;
        padding-top: 15%;
    }
    #ranking-container {
        width: 330px;
        width: 280px !important;
    }
    #skill-type {
        font-size: 14px;
    }
    #icons-container {
        height: auto;
    }
}
</style>

