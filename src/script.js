document.addEventListener("DOMContentLoaded", () => {
    // createRange() 
    // imageIcon()
    // sounds()
    imagePlayAudion()
    loginSetup()



    // createBackground()
    // // makepic()
    makeCanvas()
    ambientIconArray()
    volume()

})
    // "images/cafe.png",
    // "images/cat.png",
    // "images/night.png",
    // "images/fire.png",
    // "images/road.png",
    // "images/wind.png"
function ambientIconArray(){ 
    let ambientIcon = [{
        image:"images/bird.png",
        audio:"audio/birds.fade.ogg",
        },
        {
        image:"images/rainy.png",
        audio:"audio/rain_1.ogg",
        },

        {
        audio:"audio/thunder.fade.ogg",
        image:"images/thunder.png",
        },

        {
        image:"images/wave.png",
        audio:"audio/River-sounds.mp3"
        },
    ]

    ambientIcon.forEach((item, i) => {
        item.id = i + 1;

        loadImageIcon(item)
    });

    console.log(ambientIcon);
}
// //==================================================================================

function loadImageIcon(item){
    let controlsdiv = document.getElementById("controls")  
    let iconDiv= document.createElement("div")
    iconDiv.dataset.id = item.id

    iconDiv.innerHTML=`
        <span>
        <img class="icon" src=${item.image}>
        <audio loop><source src=${item.audio}></audio>
        <input type="range" class="volumeSlider" min="0" max="1" step="0.01" style="cursor: pointer;"><br>
        </span>
    `
    controlsdiv.appendChild(iconDiv)
}




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
    })
}


// //==================================================================================

function togglePlay(sound) {
    if (sound.paused) {
        sound.play();
    }
    else {
        sound.pause();
    }
};

// //==================================================================================




function volume(){
    let controlsdiv = document.getElementById("controls")  

    controlsdiv.addEventListener("input",function(event){
        let slider=document.getElementsByClassName("volumeSlider")
        let audio = document.getElementsByTagName("audio") 

        if(event.target===slider[0]) {
            audio[0].volume=event.target.value    
        }
        if(event.target===slider[1]) {
            audio[1].volume=event.target.value    
        }
        if(event.target===slider[2]) {
            audio[2].volume=event.target.value    
        }
        if(event.target===slider[3]) {
            audio[3].volume=event.target.value    
        }

    })
}
