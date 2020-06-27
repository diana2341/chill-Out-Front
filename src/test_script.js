
const soundDictionary = {
    light_rain_volume: {
        image: "images/rainy.png",
        audio: "audio/second-audio/light-rain.mp3"
    }, 
    bird_volume: {
        image: "images/bird.png",
        audio: "audio/second-audio/birds.fade.ogg"
    },
    large_fire_volume: {
        image: "images/regular-fire.png",
        audio: "audio/second-audio/fire-large-flame.mp3"
    },
    thunder_volume: {
        image: "images/thunder-cloud.png",
        audio: "audio/second-audio/thunder.fade.ogg"
    },
    wave_volume: {
        image: "images/wave.png",
        audio: "audio/second-audio/ocean-wave.mp3"
    },
    strong_wind_volume: {
        // too strong 
        image: "images/strongwind.png",
        audio: "audio/second-audio/wind-strong.mp3"
    },
    forest_volume: {
        // also pretty loud windy more than forest
        image: "images/forest.png",
        audio: "audio/second-audio/forest-windy-bird.mp3"
    },
    heavy_rain_volume: {
        // like this one
        image: "images/thunder.png",
        audio: "audio/second-audio/rain-concrete.mp3"
    },
    campfire_volume: {
        image: "images/fire.png",
        audio: "audio/second-audio/campfire.mp3"//
    },
    river_volume: {
        image: "images/riverWave.png",
        audio: "audio/second-audio/river.mp3"
    },
    light_wind_volume: {
        // i like this one
        image: "images/wind-simple.png",
        audio: "audio/second-audio/rain-light-in-nature.mp3"
    },
    coffee_shop_volume: {
        image: "images/cafe.png",
        audio: "audio/second-audio/coffee.mp3"
    },
    cat_purring_volume:{
        image:"images/cat.png",
        audio:"audio/second-audio/Cat-purring-sound.wav"
},
night_sound_volume:{
  image: " images/nighttime.png",
audio:"audio/second-audio/Summer-insect-sounds-night.mp3"
},
wind_chime_volume:{
    image: "images/windchime.png",
    audio:"audio/second-audio/Wind-chimes-sound.mp3"
}
}






document.addEventListener("DOMContentLoaded", () => {

    addBackground()
    loginOverlaySetup()
    loginSetup()
    renderAudioContainers()
    clickIconToPlay()
    volume()
    resetButtonSetup()
    playPause()

    
    renderMixForm()
    saveNewMix()

    toggleNightMode()

    fetchSavedMixes()

    audioList()
    frontTitle()
    stars()


})



function clickIconToPlay () {
    let sound_list = document.querySelector(".sound-list") 

    sound_list.addEventListener("click", (e) => { 

        const audio_container = e.target.parentNode.parentNode
        // get grandparent container that has dataset id
        const imageTag = audio_container.children[0].children[0]
        
        const audioTag = audio_container.children[0].children[1]
        const volumeInput = audio_container.children[0].children[2]
        //// user later for refactoring the volume function /////

        if(e.target.className === 'icon') {
            // if (audio_container)
            const image_key = imageTag.parentNode.parentNode.dataset.audioKey 
            const grandparent_key = audio_container.dataset.audioKey
            
            if (image_key === grandparent_key) {
                const audio = audio_container.querySelector('audio')
                // console.log("targeted",audio)

                togglePlay(audio)
            }
        }
    })
}


// //==================================================================================

function renderAudioContainers(){ 

    for (let key in soundDictionary) {
        let audio_key = key
        let audio_path = soundDictionary[key].audio
        let image_path = soundDictionary[key].image

        createAudioContainer(audio_key, audio_path, image_path)

        let audio_container = document.querySelector(`[data-audio-key="${audio_key}"]`)

        let volumeInput = audio_container.children[0].children[2]
        volumeInput.value = 0

        let audioTag = audio_container.children[0].children[1]
        audioTag.volume = 0
    }

}



function createAudioContainer(key, audio, image){

    let sound_list = document.querySelector(".sound-list") 
    
    let sound_container = document.createElement("div")

    sound_container.className = "audio-container"
    sound_container.dataset.audioKey = key

    sound_container.innerHTML=`
        <div class="inner" >
            <img style="cursor:pointer" class="icon" src=${image}>
            <audio loop><source src=${audio}></audio>        
            <input style="cursor:pointer" type="range"  class="volumeSlider" min="0" max="1" step="0.01" style="cursor: pointer;">
        </div>
        `
    sound_list.appendChild(sound_container)
}


function togglePlay(sound) {
 
    function loopIt(){
        var player = null;
    
        if(current_player == sound){
            player = sound;
            current_player = sound;
        }
        else{
            player = sound;
            current_player = sound;
        }
    
        player.play();
    
        setTimeout(loopIt, 5333); //5333 is the length of the audio clip in milliseconds.
    }

    if (sound.paused) {

        sound.play();
    }
    else {
        sound.pause();
    }
};


function sliderMovesVolume () {
    audio_containers = document.querySelectorAll('.audio-container')

    audio_containers.forEach(container => {

        let audioTag = container.children[0].children[1]
        let volumeInput = container.children[0].children[2]

        audioTag.volume = volumeInput.value

    });
}






function volume() {

    document.addEventListener("input", (event) => {

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
        if(event.target === slider[4]) {
            audio[4].volume = event.target.value    
        }
        if(event.target === slider[5]) {
            audio[5].volume = event.target.value    
        }
        if(event.target === slider[6]) {
            audio[6].volume = event.target.value    
        }
        if(event.target === slider[7]) {
            audio[7].volume = event.target.value    
        }
        if(event.target === slider[8]) {
            audio[8].volume = event.target.value    
        }
        if(event.target === slider[9]) {
            audio[9].volume = event.target.value    
        }
        if(event.target === slider[10]) {
            audio[10].volume = event.target.value    
        }
        if(event.target === slider[11]) {
            audio[11].volume = event.target.value    
        }
        if(event.target === slider[12]) {
            audio[12].volume = event.target.value    
        }
        if(event.target === slider[13]) {
            audio[13].volume = event.target.value    
        }
        if(event.target === slider[14]) {
            audio[14].volume = event.target.value    
        }

    })
}



function playPause(){

    let listen = document.querySelector(".play-controls")

    listen.addEventListener("click",function(event){
        let audio = document.getElementsByTagName("audio") 

        let pauseButton = document.getElementById("pause")
        let playButton = document.getElementById("play") 
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



//reset button
function resetButtonSetup() {
  
    let controls_container = document.querySelector('.play-controls')
  
    controls_container.addEventListener('click', (e) => {
      
      
      if (e.target.id === 'reset') {
        console.log('i reset all the volumes to zero:' )
        
        let sliders = document.querySelectorAll('.volumeSlider')
        let audios = document.querySelectorAll("audio")
        
        sliders.forEach(slider => {
          slider.value = 0
  
          audios.forEach(audio => {
              audio.volume = 0
          })
          
        })
  
      }
  
      if (e.target.id === 'preset') {
        console.log('oh hey some #presets:')
      }
  
    })
  
  }
  // toggle button night mode & day
  function toggleNightMode() {
    const toggle = document.querySelector('.toggle-button')
    toggle.textContent = "Night Mode On"
  
    const body = document.querySelector('body')
  
    toggle.addEventListener('click', (e) => {
  
      if (toggle.id === "background-toggle-day") {
        body.className = "body-night"
        toggle.textContent = "Night Mode On "
        toggle.id = 'background-toggle-night'
        
      } else if (toggle.id === "background-toggle-night") {
        
        body.className = "body-day"
        toggle.textContent = "Day Mode On"
        toggle.id = 'background-toggle-day'
      } 
    })
  }






