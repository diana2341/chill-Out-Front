function audioList(){
    let menu=document.querySelector(".user-created-mix-display")
     let innermenu=document.createElement("div")
     innermenu.id="music-list"
     innermenu.innerHTML=`

     <input type="checkbox" id="slide" name="" value="" />
     <div class="container">
         <label for="slide" class="toggle">☰</label>
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
    <span>w</span>
    <span>o</span>
    <span>o</span>
    <span>h</span>
    <span>o</span>
    <span>o</span>
    <span>o</span>
    <span>!</span>
    `
    titlesec.appendChild(header)
    
}