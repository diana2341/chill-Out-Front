function renderMixForm() {
  let form_container = document.getElementById("save-mix-form");

  let form = document.createElement("form")
  form.id = "mix-form"

  
  form.innerHTML = `

    <label>Mix name: </label>
    <input id="mix-title-input" type="text" name="mix-name" placeholder="your mix name here">
    <input id="save-mix" type="submit" value="save">
  `
  
  form_container.append(form)
  form.reset()
}

//
//

// how to stop it from saving if things are paused but volume is set and u want to still save those volumes... can't really have both. 
// do we allow it to save even if a thing was paused ? probs works better if u exclude the option to have saved mix that is 0 across the board. 
function saveNewMix() {
  let saveBtn = document.getElementById("save-mix")

  saveBtn.addEventListener("click", (e) => {
    e.preventDefault()

    
    const form = document.getElementById('mix-form')
    let audio_collection = document.querySelectorAll('audio')
    const user_id = parseInt(document.querySelector('.left-container').dataset.userId, 10)
    let mix_name = document.getElementById('mix-title-input').value
    

    let new_mix = {
      mix_name : mix_name,
      user_id : user_id,
    }

    
    audio_collection.forEach((audio) => {

      if (!audio.paused) {
        let audio_name = audio.parentNode.parentNode.dataset.audioKey
        let volume_input = parseFloat(audio.parentNode.children[2].value)
  
        Object.assign(new_mix, {[audio_name] : volume_input})
      }
    })
    const mix_list = document.getElementById('user-mix-display')

    fetch(`${url}/mixes`, {
      method: 'POST',
      body: JSON.stringify(new_mix),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(r => r.json())
    .then(listMixes)
    .catch(err => console.log("error:", err))
    form.reset()
  })

} 


function addNewMixToList () {
  
  const mix_list = document.getElementById('user-mix-display')

  mix_list.innerHTML = ''

  fetchSavedMixes()
}
// 

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