document.addEventListener("DOMContentLoaded",function(){
  createRange() 
  imageIcon()
  sounds()
  imagePlayAudion()
  setVolume()

})

//==================================================================================
function createRange(){
// let rangeDiv= document.createElement("div")
// rangeDiv.className="slidecontainer"
// rangeDiv.innerHTML=`
// <input type="range"  id="myRange" min="0" max="1"  step="0.01">
// `
// document.body.appendChild(rangeDiv)
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
    // rainSound.controls=true
    rainSound.setAttribute("id","rainNoise")
    rainSound.preload="auto"
    rainSound.volume = 1
    // setAttribute("controls", "controls")
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
            // setVolume(rainSound)

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



 