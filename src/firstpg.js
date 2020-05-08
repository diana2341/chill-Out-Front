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
log_container.appendChild(star)
// login.appendChild(star)
;
} 
