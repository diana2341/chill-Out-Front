function toggleNightMode() {
  const toggle = document.querySelector('.toggle-button')
  toggle.textContent = "Night Mode On"

  const body = document.querySelector('body')

  toggle.addEventListener('click', (e) => {

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