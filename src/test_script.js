const soundDictionary = {
    bird: {
        image: "images/bird.png",
        audio: "audio/birds.fade.ogg"
    },
    light_rain: {
        image: "images/rainy.png",
        audio: "audio/light-rain.mp3"
    }, 
    fire_large: {
        image: "images/fire.png",
        audio: "audio/fire-large-flame.mp3"
    },
    thunder: {
        image: "images/thunder-cloud.png",
        audio: "audio/thunder.fade.ogg"
    },
    wave: {
        image: "images/wave.png",
        audio: "audio/ocean-wave.mp3"
    },
    wind_strong: {
        image: "images/wind-bold.png",
        audio: "audio/wind-strong.mp3"
    },
    

}



document.addEventListener("DOMContentLoaded", () => {

    addBackground()
    loginSetup()
    loginOverlaySetup()
    buttonBarSetup()
    imagePlayAudion()
    ambientIconArray()
    volume()
    playPause()
    toggleNightmode()
    // clickIconToPlay()
})


  // save volume of each sound 
  // on load: find the sound from collection of sound and set volume
  // create a const. similar to ambientICon []

function ambientIconArray(){ 
    let audio_values = Object.values(soundDictionary)

    audio_values.forEach((obj) => {
        let image_path = obj.image
        let audio_path = obj.audio
        loadImageIcon(image_path, audio_path)
    })
}

// array.forEach((item, i) => {
//     item.id = i + 1;

//     loadImageIcon(item)
// });

// function clickIconToPlay () {
//     let sound_list = document.querySelector(".sound-list") 
//     let audio_array = document.querySelectorAll('audio')
//     console.log(audio_array)

//     sound_list.addEventListener("click", (e) => { 
//         if(e.target.className === 'icon') {
//             audio_array.forEach((audio) => {
//                 togglePlay(audio)
//             })
//         }
//     })
// }


// //==================================================================================

function loadImageIcon(image, audio){
    let sound_list = document.querySelector(".sound-list")  
    let sound_container = document.createElement("div")
    // sound_container.dataset.id = item.id
    sound_container.className = "audio-container"

    sound_container.innerHTML=`
        <div class="inner" >
            <img style="cursor:pointer" class="icon" src=${image}>
            <audio loop><source src=${audio}></audio>        
            <input style="cursor:pointer" type="range" class="volumeSlider" min="0" max="1" step="0.01" style="cursor: pointer;">
        </div>
        `
    // document.getElementsByClassName('inner').style.cursor = "pointer"
    sound_list.appendChild(sound_container)


}

function togglePlay(sound) {
    if (sound.paused) {
        sound.play();
    }
    else {
        sound.pause();
    }
};



// //==================================================================================
function imagePlayAudion() {
let img = document.getElementsByClassName("icon") 
let audio = document.getElementsByTagName("audio") 


document.addEventListener("click", (event) => {
        if (event.target === img[0]) {
            togglePlay(audio[0])   
        }
        if (event.target === img[1]) {
            togglePlay(audio[1])   
        }
        if (event.target === img[2]) {
            togglePlay(audio[2])   
        }
        if (event.target === img[3]) {
            togglePlay(audio[3])   
        }
        if (event.target === img[4]) {
            togglePlay(audio[4])   
        }
        if (event.target === img[5]) {
            togglePlay(audio[5])   
        }
    })
}


// //==================================================================================



function volume() {

document.addEventListener("input",function(event){

    let slider = document.getElementsByClassName("volumeSlider")
    let audio = document.getElementsByTagName("audio") 

        if(event.target === slider[0]) {
            audio[0].volume = event.target.value    
        }
        if(event.target === slider[1]) {
            audio[1].volume=event.target.value    
        }
        if(event.target === slider[2]) {
            audio[2].volume = event.target.value    
        }
        if(event.target === slider[3]) {
            audio[3].volume = event.target.value    
        }

    })
}




function loginOverlaySetup() {
    document.addEventListener("submit",function(event){
    let signin = document.getElementsByClassName("login_container")[0]
    var x = document.querySelector("#root");

    if(event.target) {

        x.style.visibility = "visible"
        signin.style.display = 'none'

        }
    })
}


function playPause(){

    let listen = document.querySelector(".play-controls")

    listen.addEventListener("click",function(event){
        let audio = document.getElementsByTagName("audio") 

        let pauseButton = document.getElementById("pause")
        let playButton = document.getElementById("play") 
        // console.log(event.target)
        if(event.target === playButton) {
        Array.from(audio).forEach(function(song){
            song.play()

            })
        }
        
        if(event.target === pauseButton){
            Array.from(audio).forEach(function(song){
                song.pause() 
        }) 
    }})
}






