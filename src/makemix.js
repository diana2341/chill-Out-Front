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
let audio=(function (){ 
const audio={}
audio["light_rain_volume"]=1,
audio["heavy_rain_volume"]=1,
audio["large_fire_volume"]=1,
audio["campfire_volume"]=1,
audio["forest_volume"]=1,
audio["river_volume"]=1,
audio["strong_wind_volume"]=1,
audio["light_wind_volume"]=1,
audio["thunder_volume"]=1,
audio["wave_volume"]=1,
audio["coffee_shop_volume"]=1,
audio["bird_volume"]=1
return audio 
})()


function newMix(){
    let slider = document.getElementsByClassName("volumeSlider")

    let saveBtn=document.getElementById("save")
    saveBtn.addEventListener("click",function(event){
 let audio = document.querySelectorAll('audio')
 if(!audio[0].paused) {
console.log(slider[0].value)
}
if(!audio[1].paused) {
    console.log(slider[1].value)
    }
    if(!audio[2].paused) {
        console.log(slider[2].value)
        }
        if(!audio[3].paused) {
            console.log(slider[3].value)
        }
            if(!audio[4].paused) {
                console.log(slider[4].value)
            }
                if(!audio[5].paused) {
                    console.log(slider[5].value)
                }

    
 })

}



// function buttonForm(){
//     let saveBtn=document.getElementById("save")
// saveBtn.addEventListener("click",function(event){
//     var x = document.getElementById("myDIV");
//     x.style.visibility="visible"
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// })
// }
// function buttonForm(){
//     let saveBtn=document.getElementById("save")




//   saveBtn.addEventListener('click', function(event){
//     const form = document.createElement("form")
//     form.innerHTML = `
//       <label>Title: </label>
//       <input type="text" name="title">
//       <br>
//       <label>Image URL: </label>
//       <input type="text" name="imageUrl">
//       <br>
//       <label>Year: </label>
//       <input type="text" name="year">
//       <br>
//       <input type="submit">
//     `

//     document.body.replaceChild(form, saveBtn)
//   })
// }



function createMixForm(){
    let x = document.getElementById("myDIV");
   
    let form=document.createElement("form")
     form.id="mixForm"
    form.innerHTML=`
   
       <label>Mix name: </label>
        <input type="text" name="mixname">
         <input type="submit">
    `
    x.appendChild(form)



}
function addMix(){
    let mixForm=document.getElementById("mixForm")
   mixForm.addEventListener("submit",function(event){
event.preventDefault()

let mixTitle= event.target.mixname.value
// console.log(mixTitle)
let user = document.querySelector('.left-container').dataset.user_id
let key=document.querySelector(".audio-container").dataset.audioKey

console.log(key)

    fetch("http://localhost:3000/api/v1/mixes",{
        method: 'POST',
      body: JSON.stringify({
          mixTitle,
          user_id:user,
          audio

    }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(r => r.json())
    .then((resp)=>console.log(resp))
    .catch(err => console.log("error:", err))
})
  
}