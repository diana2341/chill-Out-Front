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

function newMix(){
  let slider = document.getElementsByClassName("volumeSlider")

  let saveBtn = document.getElementById("save")

  saveBtn.addEventListener("click", (e) => {
    let audio_collection = document.querySelectorAll('audio')
    let audio = document.querySelectorAll('audio')
    
    let light_rain_volume = audio[0].parentNode.parentNode.dataset.audioKey
    body[light_rain_volume] = slider[0].value

    if(!audio[0].paused) {
      console.log(slider[0].value)
      let key = document.querySelector('.audio-container').dataset.audioKey
        console.log(key)
      }
      if(!audio[1].paused) {
        console.log(slider[1].value)
        
      }
      if(!audio[2].paused) {
      console.log(slider[2].value)
      }
      if(!audio[3].paused) {
          console.log(slider[3].value)
      }
      if(!audio[4].paused) {
          console.log(slider[4].value)
      }
      if(!audio[5].paused) {
          console.log(slider[5].value)
      }
  
      let key = document.querySelector('.audio-container').dataset.audioKey
        console.log(key)
  
  })
}
  //   audio_collection.forEach((audio) => {

  //     let key = document.querySelector('.audio-container').dataset.audioKey
  //     console.log(key)
  //     console.log("vol==",audio.volume)
  //     // if(!audio.paused) {
  
  //     // }

  //   })
  // }) 

  // const audio_container = e.target.parentNode.parentNode
  // const audioTag = audio_container.children[0].children[1]






    
  // })



function addMix(){
  fetch("http://localhost:3000/api/v1/mixes",{
      method: 'POST',
    body: JSON.stringify(new_mix),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(r => r.json())
  .catch(err => console.log("error:", err))


}
// document.querySelector([data-audio-key])

// let heavy_rain_volume = 

// connects a slider with a phrase in a dataset-purpose 

// let key = event.target.dataset.key
// let body  = {}
// body[purpose] = 5.5
// body[key] = e.target.dataset.key


// `
// { 
//   user_id: ${user_id},
//   mix_name: ${title},
//   heavy_rain_volume: 1,
//   fire_volume: 0.5
// }
// `

// const newToy = {
//   name: toyForm.name.value,
//   image: toyForm.image.value,
//   likes: 0
// }