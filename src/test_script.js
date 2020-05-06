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

    renderAudioContainers()
    volume()
    playPause()
    toggleNightmode()
    clickIconToPlay()
    getAudioKey()



    
})

function getAudioKey () {
    // fn to find the keys to then put in data set 

    let audio_keys = Object.keys(soundDictionary)
}

  // save volume of each sound 
  // on load: find the sound from collection of sound and set volume
  // create a const. similar to ambientICon []






function clickIconToPlay () {
    let sound_list = document.querySelector(".sound-list") 
    let audio_array = document.querySelectorAll('audio')
    // console.log(audio_array)
    console.log(audio_array[3].volume)

    sound_list.addEventListener("click", (e) => { 
        console.log(e.target)
        if(e.target.className === 'icon') {
            
            console.log("data-audio", e.target.parentNode)
            // togglePlay()
            audio_array.forEach((audio) => {
                togglePlay(audio)
            })
        }
    })
}


// //==================================================================================

function renderAudioContainers(){ 
    prop_names = Object.getOwnPropertyNames(soundDictionary)
    console.log('start')
    for (let key in soundDictionary) {
        let audio_key = key
        let audio_path = soundDictionary[key].audio
        let image_path = soundDictionary[key].image
        console.log("audio_key=", audio_key)
        console.log("audio=", audio_path)        
        console.log('image= ', image_path)
        createAudioContainer(audio_key, audio_path, image_path)
    }

}

function createAudioContainer(key, audio, image){

    let sound_list = document.querySelector(".sound-list")  
    let sound_container = document.createElement("div")

    sound_container.className = "audio-container"

    // let path_name = /[^/]([^.]+)/.exec(`${audio}`)[0]

    sound_container.innerHTML=`
        <div class="inner" >
            <img style="cursor:pointer" class="icon" src=${image}>
            <audio data-audio-key="${key}" loop><source src=${audio}></audio>        
            <input style="cursor:pointer" type="range" class="volumeSlider" min="0" max="1" step="0.01" style="cursor: pointer;">
        </div>
        `

    sound_list.appendChild(sound_container)

  // linking volume slider to audio file. dataset.purpose="large_fire_volume"
}

function togglePlay(sound) {
    if (sound.paused) {
        sound.play();
    }
    else {
        sound.pause();
    }
};


// click save 
// capture volume number of each slider 
// keys of body need to correspond to backend table 
// post the data to our mix table 
// that creates new mix record (instance)

// click load 
// look the mix_id - bind the mix-id to the dom NEED TO KNOW MIX ID
// like a collection_select  - value= mix_id  // or it shows up on page with a play button. // store mix_id on the button somewhere
// fetch the mix record from backend - comes in as json 
// run volume adjuster method on click of play. would be in the .then callback. 


// //==================================================================================
// function imagePlayAudion() {
// let img = document.getElementsByClassName("icon") 
// let audio = document.getElementsByTagName("audio") 


// document.addEventListener("click", (event) => {
//         if (event.target === img[0]) {
//             togglePlay(audio[0])   
//         }
//         if (event.target === img[1]) {
//             togglePlay(audio[1])   
//         }
//         if (event.target === img[2]) {
//             togglePlay(audio[2])   
//         }
//         if (event.target === img[3]) {
//             togglePlay(audio[3])   
//         }
//     })
// }


// //==================================================================================



function volume() {

document.addEventListener("input",function(event){
    console.log("clicked")

    let slider = document.getElementsByClassName("volumeSlider")
    let audio = document.getElementsByTagName("audio") 

        if(event.target === slider[0]) {
            audio[0].volume = event.target.value    
        }
        if(event.target === slider[1]) {
            audio[1].volume = event.target.value    
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





