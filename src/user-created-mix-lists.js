function fetchSavedMixes () {
  fetch(`${url}/mixes`)
  .then(r => r.json())
  .then(mixes => {

    renderSavedMixes(mixes)
    
  })

}

function renderSavedMixes (mixes) {

  let mix_list = document.getElementById('user-mix-display')

  mixes.forEach(mix => {

    // create li set attributes
    const li = document.createElement('li')
    // li.className
    li.dataset.mixId = mix.id

    li.dataset.userId = mix.user_id
    // li.textContent = mix.mix_name

    li.innerHTML=`
    
      ${mix.mix_name}
      <button class="play-saved-mix">Play</button>
      `
    // create play button append to li
    // let play_saved_mix_button = document.createElement('button')
    // play_saved_mix_button.className = "play-saved-mix"
    // play_saved_mix_button.textContent = "Play"
    // li.append(play_saved_mix_button)

    // append li to list
    mix_list.append(li)

  })
  addListenerToMixList()
}


// function listMixes(mix){
//   let mixUl = document.getElementById("mixes")
  
//      let mixLi = document.createElement("li")

//      mixLi.dataset.id = mix.id

//      mixLi.innerHTML=`
    
//       title:${mix.mix_name}
//       <button class ="uploadedMixes" >play</button>
//       `
     
//      mixUl.appendChild(mixLi)
  
//   }

function addListenerToMixList () {
  const mix_list = document.getElementById('user-mix-display')
  

  mix_list.addEventListener('click', (e) => {

    if (e.target.className === "play-saved-mix") {

      console.log("clicked play")
      let mix_id = e.target.parentNode.dataset.mixId

      fetch(`${url}/mixes/${mix_id}`)
      .then(r => r.json())
      .then(mix => playMix(mix))
    }
  })
}

function playMix (mix) {

  console.log("mix in the playMix==",mix)
  // console.log(mix.id)
  // console.log('clicked')
  // console.log("selected mix ==",mix)
  // console.log("bird_volume", mix.bird_volume)
  
  let bird_volume_container = document.querySelector('[data-audio-key="bird_volume"]')
  let sliderTag = bird_volume_container.children[0].children[2]
  let soundTag = bird_volume_container.children[0].children[1]
  // let slider = parseFloat(bird_volume_container.children[0].children[2])
  // let sound = parseFloat(bird_volume_container.children[0].children[1])
  
  console.log("before slider",sliderTag)
  console.log("before sound",soundTag)
  // audioTag.volume is audio vol
  // volumeInputTag.value = slider vol

  // console.log(mix.bird_volume)
  sliderTag.value = mix.bird_volume
  sliderMovesVolume()
  sound = mix.bird_volume
  console.log("audio",soundTag.volume)
  console.log("slider",sliderTag)

  // let sound_list = document.querySelector(".sound-list")  
  
  // renderAudioContainers()


  // get bird_volume audio_container to start
}


// if (e.target.id === 'reset') {
//   console.log('i reset all the volumes to zero:' )
  
//   let sliders = document.querySelectorAll('.volumeSlider')
//   let audios = document.querySelectorAll("audio")
  
//   // console.log('volume sliders:', sliders)

//     sliders.forEach(slider => {
//     slider.value = 0

//     audios.forEach(audio => {
//         audio.volume = 0
//     });
    
//   });
// }
