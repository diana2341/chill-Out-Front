document.addEventListener("DOMContentLoaded",function(){
  createRange() 
  imageIcon()
  sounds()
  imagePlayAudion()
  setVolume()

})

//==================================================================================
function createRange(){
let iRange=document.getElementById("controls")
let rangeInput= document.createElement("input")
rangeInput.setAttribute("type","range")
rangeInput.setAttribute("id","volumeSlider")
rangeInput.setAttribute("min","0")
rangeInput.setAttribute("max","1")
rangeInput.setAttribute("step","0.01")
iRange.appendChild(rangeInput)
}
//==================================================================================
function imageIcon(){
   let rainImg= document.createElement("img")
   rainImg.setAttribute("id","rain")
   rainImg.src="images/rainy.png" 
   
   document.body.appendChild(rainImg)
}
//==================================================================================
function sounds(){
    let rainSound=document.createElement("audio")
    rainSound.setAttribute("id","rainNoise")
    rainSound.preload="auto"
    rainSound.volume = 1
    rainSound.innerHTML=`
    <source src="audio/rain_1.ogg" type="audio/ogg"> 
    `
    rainSound.loop=true
    document.body.appendChild(rainSound)
}
//==================================================================================
function imagePlayAudion(){
    let rainSound=document.getElementById("rainNoise")

    document.addEventListener("click",function(event){
        if(event.target.id==="rain"){
            togglePlay(rainSound)
        }
    })
    
}
//==================================================================================

function togglePlay(sound) {
    if (sound.paused) {
        sound.play();
    }
    else {
        sound.pause();
    }
};

//==================================================================================


 function setVolume() {
    let rainSound=document.getElementById("rainNoise")

let slider= document.getElementById("volumeSlider")

slider.oninput=(e)=>{
let volume=e.target.value
rainSound.volume=volume
}
 }



 