<template>
    <Carousel :items-to-show=itemsToShowVar :wrap-around="true" :autoplay=autoTimer>
      <Slide v-for="slide in dataArr" :key="slide">
        <div class="carousel__item">
            <router-link @mousedown="(e) => mouseDownGetCoords(e)" @mouseup="(e) => mouseUpGetCoords(e)" :to="getLink(slide)" class="router-container">
                <div class="each-slide-con">
                    <img class="slide-imgs" :src=getImgLink(slide)></img>
                    <p class="slide-titles">{{ slide }}</p>
                </div>
            </router-link>
        </div>
      </Slide>
  
      <template #addons>
        <Navigation />
        <Pagination class="under-btns"/>
      </template>
    </Carousel>
  </template>
  


<script>
    import { defineComponent } from 'vue'
    import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    export default defineComponent({                  
        name: 'WrapAround',
        components: {
            Carousel,
            Slide,
            Navigation,
            Pagination
        },
        data() {
            return {
                dataArr: ["Portfolio", "Skills", "Resume", "Contact", "Cats", "About me"],
                autoTimer: 0,
                itemsToShowVar: 3.334,
                mousePosX: 0,
                mousePosY: 0,
                canNavigate: false
            }
        },
        methods: {
            mouseDownGetCoords(e) {
                this.mousePosX = e.pageX;
                this.mousePosY = e.pageY;
            },
            mouseUpGetCoords(e) {
                if (e.pageX === this.mousePosX && e.pageY === this.mousePosY) 
                    this.canNavigate = true;
                else 
                    this.canNavigate = false;
                
            },
            returnValue(value) {
                return value;
            },
            getLink(slideValue) {
                if (this.canNavigate === false) return "";
                switch(slideValue) {
                    case "About me":
                        return "/about";
                    case "Portfolio":
                        return "/portfolio";
                    case "Skills":
                        return "/skills";
                    case "Resume":
                        return "/resume";
                    case "Contact":
                        return "/contact";
                    case "Cats":
                        return "/cats";
                    default:
                        return "/";       
                }
            },
            getImgLink(slideValue) {
                //"/about.png"
                switch(slideValue) {
                    case "About me":
                        return "/carousel-imgs/about.png";
                    case "Portfolio":
                        return "/carousel-imgs/portfolio.png";
                    case "Skills":
                        return "/carousel-imgs/skills.png";
                    case "Resume":
                        return "/carousel-imgs/resume.png";
                    case "Contact":
                        return "/carousel-imgs/contact.png";
                    case "Cats":
                        return "/carousel-imgs/cats.png";
                    default:
                        return "";
                }

            },
            updateTimer(current) {
                this.autoTimer = current;
            }
        },
        mounted() {
            setTimeout(() => {
                this.updateTimer(3500)
            }, 9000)
            if (window.innerWidth <= 1200) this.itemsToShowVar=1.366
            else if (window.innerWidth > 1200) this.itemsToShowVar=3.334
        },
        created: function() {
        window.addEventListener("resize", (e) => {
            if (e.target.innerWidth <= 1200) this.itemsToShowVar=1.366
            else if (e.target.innerWidth > 1200) this.itemsToShowVar=3.334
        });
        },
        destroyed: function() {
            window.removeEventListener("resize", e);
        },
    })
</script>

<style>
.carousel__item {
  min-height: 200px;
  height: 200px;
  width: 250px;
  background-color: #13141a;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  border-width: 5px;
  border-color: #13141a;
}
.carousel__item:hover {
    background-color: #1a1b22b9;
    border-color: #16171db9;
}

.carousel__slide {
  padding: 10px;
  width: 300px;
  max-width: 300px;
  min-width: 300px;
  height: 220px;
  width: 30%;
  max-width: 30%;
  min-width: 30%;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: white;
}
.carousel__prev:hover,
.carousel__next:hover {
  box-sizing: content-box;
  color: rgba(255, 255, 255, 0.5);
}
.carousel__prev {
    margin-left: -5%;
}
.carousel__next {
    margin-right: -5%;
}
.router-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
}
/* <li> elements */
.carousel__pagination-item {
    width: 3%;
    height: 4px;
    margin: 0 5px 0 5px;
}
/* buttons inside each <li> */
.carousel__pagination-button {
    width: 100%;
    height: 100%;
    padding: 0;
}
.carousel__pagination-button::after {
    background-color: #4a5edb;
    width: 100%;
    height: 100%;
}
.carousel__pagination-button:hover::after {
    background-color: #141c4d;
    width: 100%;
}
.carousel__pagination-button--active::after {
    background-color: #141c4d;
    width: 100%;
}

/* #4a5edb;
#629fe9;
#7e9af5; */
.each-slide-con {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.slide-imgs {
    width: 100%;
    height: 152px;
}
.slide-titles {
    font-size: 14px;
    display: flex;
    height:32px;
    justify-content: center;
    align-items: center;
}




@media only screen and (max-width: 1200px) {
    .carousel__item {
        margin: 0 15px 0 15px;
    }
    .carousel__slide {
        margin: 0 70px 0 70px;
    }
    .router-container {
        width: 200px;
    }
    .each-slide-con, .slide-imgs, .slide-titles {
        width: 100%;
    }
    .carousel__prev {
        margin-left: -30px;
        display: none;
    }
    .carousel__next {
        margin-right: -30px;
        display: none;
    }
}
</style>