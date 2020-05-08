function renderMixForm() {
  let form_container = document.getElementById("save-mix-form");

  let form = document.createElement("form")
  form.id = "mix-form"
  form.autocomplete="off"

  
  form.innerHTML = `

    <input id="mix-title-input" type="text" name="mix-name" placeholder=" Your mix name here">
    <input id="save-mix" type="submit" value="save">
  `

  form_container.append(form)
  form.reset()
}



function saveNewMix() {
  let saveBtn = document.getElementById("save-mix")

  saveBtn.addEventListener("click", (e) => {
    e.preventDefault()
let save=document.getElementById("saved")
if (event.target)
save.visibility="visible"
    
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
    .then(addNewMixToList)
    .catch(err => console.log("error:", err))
    form.reset()
  })

} 


function addNewMixToList () {
  
  const mix_list = document.getElementById('mixesLi')

  mix_list.innerHTML = ''

  fetchSavedMixes()
}
