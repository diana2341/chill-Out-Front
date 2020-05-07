function renderMixForm() {
  let form_container = document.getElementById("save-mix-form");

  let form = document.createElement("form")
  form.id = "mix-form"

  form.innerHTML = `

    <label>Mix name: </label>
    <input id="mix-title-input" type="text" name="mix-name">
    <input type="submit" placeholder="your mix name here">
  `
  form_container.append(form)
}

//
//

function saveNewMix() {
  let saveBtn = document.getElementById("save")

  saveBtn.addEventListener("click", (e) => {

    let audio_collection = document.querySelectorAll('audio')
    const user_id = parseInt(document.querySelector('.left-container').dataset.userId, 10)
    let mix_name = document.getElementById('mix-title-input').value
    

    let new_mix = {
      mix_name : mix_name,
      user_id : user_id,
    }

    audio_collection.forEach((audio) => {

      let audio_name = audio.parentNode.parentNode.dataset.audioKey
      let volume_input = parseFloat(audio.parentNode.children[2].value)

      Object.assign(new_mix, {[audio_name] : volume_input})

    })

    fetch(`${url}/mixes`, {
      method: 'POST',
      body: JSON.stringify(new_mix),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(r => r.json())
    .catch(err => console.log("error:", err))
  })
} 


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