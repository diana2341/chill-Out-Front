
function buttonBarSetup() {
  
  let button_bar = document.querySelector('.button-bar')

  button_bar.addEventListener('click', (e) => {
    
    if (e.target.id === 'save') {
      // console.log('i save stuff:')
    }
    if (e.target.id === 'reset') {
      console.log('i reset all the volumes to zero:' )
      
      let sliders = document.querySelectorAll('.volumeSlider')
      let audios = document.querySelectorAll("audio")
      
      // console.log('volume sliders:', sliders)

        sliders.forEach(slider => {
        slider.value = 0

        audios.forEach(audio => {
            audio.volume = 0
        });
        
      });

    }

    if (e.target.id === 'preset') {
      console.log('oh hey some #presets:')
    }

  })

}

// playPause()
// function resetButton() {
//   let button_bar = document.querySelector('')

//   button_bar.addEventListener('click', (e) => {
    

//     if ()

//   })

// }