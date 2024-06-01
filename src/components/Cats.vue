<template>
    <div id="main-content">
        
        
        <div id="title-container">
            <h2>hihi</h2>
            <p id="hwaccelforce">-</p>
        </div>
        
    </div>
</template>




<script>
</script>



<style scoped>
#main-content {
    height: 100%;
    /*width: 52.5%;*/
    width: 100%;
    /*border: solid;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: dashed;
    border-color: white;
}
#title-container {
    width: 594px;
    height: 15%;
    display: flex;
    align-items: center;
    margin: 0 auto 0 auto;
    border: solid;
}
#hwaccelforce {
    color: #03A062;
    white-space: nowrap;
    overflow: hidden;
   /* animation: typing 2s steps(60, end) forwards, blink 1s infinite; */
    animation: typing 4s steps(60, end) forwards, blink 1s infinite;
    margin-bottom: 20%;
    } 
  
    @keyframes typing { 
            0% { 
                width: 594px;
            } 
            45% {
                width: 594px;
            }
            100% { 
                width: 594px;       /* After welcome text fade in carousel :) */
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
</style>

