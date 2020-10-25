

const url = 'https://illucid-backend.herokuapp.com/'


function loginOverlaySetup() {
  let login_container = document.querySelector('.login_container')

  login_container.style.backgroundImage = "url(images/project bg.png) initial"

  document.addEventListener("submit", (event) => {
    let login_container = document.querySelector('.login_container')
    var x = document.querySelector("#root");

    if(event.target) {

        x.style.visibility = "visible"
        login_container.style.display = 'none'

        }
  })
}

function loginSetup() {
//////////////////////////////
// create login form ///
//////////////////////////////
  const login_container = document.querySelector('.login_container')

  const div = document.createElement('div')
  div.id = 'inner-login'
  login_container.append(div)


  const login_form = document.createElement('form')
  
  login_form.id = 'login-form'
  login_form.setAttribute("autocomplete","off")

  login_form.innerHTML = `
  <div class="form__group field">

    <input type="text" class="form__field" placeholder="Username" name="username" id="username-field"  >
    <label for="username" class="form__label">Please Enter a Username</label>

    <input type="submit" value="Login" id="login-form-submit" style="display: none">
    </div>

  `

    div.append(login_form)

    

//////////////////////////////
// add submit listener ///
//////////////////////////////

  login_form.addEventListener('submit', (e) => {
    e.preventDefault()

    const input = e.target.username
    const username = input.value

    const new_username = {
      username
    }

    login_form.reset()

    const options = {
      method: 'POST',
      body: JSON.stringify(new_username),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    /////////////////////////
    // adds user to user db
    ////////////////////////
    fetch(`${url}/users`, options)
    .then(r => r.json())
    .then(user => {  
    /////////////////////
    // finds current user_id and username and creates welcome sign / stores user_id on page. 
    /////////////////////
      const welcomeUser = document.querySelector('.left-container')
      welcomeUser.dataset.userId = user.id

      const p = document.createElement('p')

      p.innerHTML = `
      <h1 id= "currentUser">Welcome <strong>${user.username}</strong></h1>

      `
      welcomeUser.append(p)

    })
    .catch(err => console.log("error:", err))

  })
}

// =============================first pge setiings==================================


// adds bg animation
function addBackground(){
  let bg=document.querySelector(".background-animation")
  let img= document.createElement("div")
  
    
  bg.appendChild(img)

}

function audioList(){
  let menu=document.querySelector(".user-created-mix-display")
   let innermenu=document.createElement("div")
   innermenu.id="music-list"
   
   innermenu.innerHTML=`

   <input type="checkbox" id="slide" name="" value="" />
   <div class="container">

       <label for="slide" class="toggle">☰ <p id="saved"> ↖ Audio saved! Checkout these Mixes ♫</p> </label> 
       <nav class="sidebar"> 

       <ul id="mixesLi">
       
       </ul>
       
       </nav>
   </div>

`
menu.appendChild(innermenu)
}



function frontTitle(){
  let titlesec=document.querySelector(".login_container")
  let header=document.createElement("h1")
  header.innerHTML=`
  <div class="titleName">
  <div class="name">
    <span class="i">I</span>
    <span class="l">L</span>
    <span class="l2">L</span>
    <span class="u">U</span>
    <span class="c">C</span>
    <span class="i">I</span>
    <span class="d">D</span>

    <span class="space">&nbsp;</span>
    <span class="b">B</span>
    <span class="e">E</span>
    <span class="a">A</span>
    <span class="t">T</span>
    <span class="s">S</span>
  </div>
</div>
  `
  titlesec.appendChild(header)
  
}



function stars(){
  let log_container=document.querySelector(".container")

  let login=document.querySelector(".login_container")
let star= document.createElement("span")
star.innerHTML=`
  <div class="animation-wrapper">
<div class="particle particle-1"></div>
<div class="particle particle-2"></div>
<div class="particle particle-3"></div>
<div class="particle particle-4"></div>
</div>
`
log_container.appendChild(star);
;
} 
function starstwo(){
  let log_container=document.querySelector(".container")

  let login=document.querySelector(".login_container")
let star= document.createElement("span")
star.innerHTML=`
  <div class="animation-wrapper">
<div class="particle particle-1"></div>
<div class="particle particle-2"></div>
<div class="particle particle-3"></div>
<div class="particle particle-4"></div>
</div>
`
login.appendChild(star)
;
} 
function starsMobile(){
  let log_container=document.querySelector(".container")

  let login=document.querySelector(".mobile")
let star= document.createElement("span")
star.innerHTML=`
  <div class="animation-wrapper">
<div class="particle particle-1"></div>
<div class="particle particle-2"></div>
<div class="particle particle-3"></div>
<div class="particle particle-4"></div>
</div>
`
login.appendChild(star)
;
} 


