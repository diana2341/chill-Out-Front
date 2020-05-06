// function title(){
//     let log_container=document.getElementsByClassName("login_container")[0]
//     let title=document.createElement("h1")
//     title.innerHTML=`
//     <span>I</span>
//     <span>L</span>
//     <span>L</span>
//     <span>U</span>
//     <span>C</span>
//     <span>i</span>
//     <span>D</span>
//     <span>B</span>
//     <span>E</span>
//     <span>A</span>
//     <span>T</span>
//     <span>s</span>
  
//     `
//     log_container.appendChild(title)

//     console.log(title)
// }
function stars(){
    let log_container=document.getElementsByClassName("login_container")[0]
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
;
}