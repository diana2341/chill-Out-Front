
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

