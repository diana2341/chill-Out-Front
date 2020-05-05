function toggleNightmode() {
  const toggle = document.querySelector('.toggle-button')
  toggle.textContent = "Night Mode On"
  // toggle.style.cursor = "pointer"
  const body = document.querySelector('body')

  toggle.addEventListener('click', (e) => {

    // let canvas = document.querySelector('.canvas-background')
    

    if (toggle.id === "background-toggle-day") {
      body.className = "body-night"
      toggle.textContent = "Night Mode On"
      toggle.id = 'background-toggle-night'
      
    } else if (toggle.id === "background-toggle-night") {
      
      body.className = "body-day"
      toggle.textContent = "Day Mode On"
      toggle.id = 'background-toggle-day'
    } 
  })
}