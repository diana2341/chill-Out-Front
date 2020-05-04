document.addEventListener("DOMContentLoaded", () => {
    createRange() 
    imageIcon()
    sounds()
    imagePlayAudion()
    setVolume()
    loginSetup()
    // createBackground()
    // // makepic()
    makeCanvas()


})
//     // "images/cafe.png",
//     // "images/cat.png",
//     // "images/night.png",
//     // "images/fire.png",
//     // "images/road.png",
//     // "images/wind .png"

// // let images= [
// //     "images/bird.png",
// //     "images/rainy.png",
// //     "images/thunder.png",
// //     "images/wave.png"

// // ]
// // let audio=[
// //     "audio/birds.fade.ogg",
// //     "audio/rain_1.ogg",
// //     "audio/thunder.fade.ogg",
// //     "audio/River-sounds.mp3"

// // ]


//==================================================================================
function createRange() {
  
    let controlsUl = document.getElementById("controls")    
    let rangeInput = document.createElement("input")
    rangeInput.setAttribute("type","range")
    rangeInput.setAttribute("id","volumeSlider")
    rangeInput.setAttribute("min","0")
    rangeInput.setAttribute("max","1")
    rangeInput.setAttribute("step","0.01")
    rangeInput.style.cursor = "pointer"
    controlsUl.appendChild(rangeInput)

}
//==================================================================================
function imageIcon() {
    
    let iRange = document.getElementById("controls")
    let rainImg = document.createElement("img")
    rainImg.setAttribute("id","rain")
    rainImg.src = "images/rainy.png" 
    rainImg.style.cursor = "pointer"
    
    iRange.appendChild(rainImg)
}
//==================================================================================
function sounds() {
    let iRange = document.getElementById("controls")

    let rainSound = document.createElement("audio")
    rainSound.setAttribute("id","rainNoise")
    rainSound.preload = "auto"
    rainSound.volume = 1
    rainSound.innerHTML = `
    <source src="audio/rain_1.ogg" type="audio/ogg">
    `
    rainSound.loop = true
    iRange.appendChild(rainSound)
}
//==================================================================================
function imagePlayAudion() {
    let rainSound = document.getElementById("rainNoise")

    document.addEventListener("click", (event) => {
        if (event.target.id === "rain") {
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
    let rainSound = document.getElementById("rainNoise")

    let slider = document.getElementById("volumeSlider")

    slider.oninput = (e) => {
        let volume = e.target.value
        rainSound.volume = volume
    }
}

