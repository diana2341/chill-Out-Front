function fetchSavedMixes () {
  fetch(`${url}/mixes`)
  .then(r => r.json())
  .then(mixes => renderSavedMixes(mixes))

}

function renderSavedMixes (mixes) {
  const mix_list = document.getElementById('user-mix-display')

  mixes.forEach(mix => {
    console.log(mixes)
    
    const li = document.createElement('li')
    li.dataset.id = mix.id
    li.dataset.userId = mix.user_id
    li.textContent = mix.mix_name
    let play_saved_mix_button = document.createElement('button')
    play_saved_mix_button.className = "play-saved-mix"
    play_saved_mix_button.textContent = "Play"
    li.append(play_saved_mix_button)

    mix_list.append(li)

    
    // li.dataset.creator = mix.user_id.username can do another fetch to add the username i guess
  });
  console.log(mix_list)


}


// make a click listener on 

// function fetchUserMixes(){

//   fetch("http://localhost:3000/api/v1/mixes")
//   .then((resp)=>resp.json())
//   .then((data)=>{
//       mixList(data)
//       data.forEach(function(mixes){
//       listMixes(mixes)

//       })
//   })
//   }
  
//   function listMixes(mixes){
//     let mixUl=document.getElementById("mixes")
    
//     let mixLi=document.createElement("li")
//     mixLi.dataset.id=mixes.id

//     // uploadmixes class is the play button on the lists
//     mixLi.innerHTML=`
      
//       title:${mixes.mix_name}
//       <button class ="uploadedMixes" >play</button> 
      
//       <li hidden id = "rain-volume" >${mixes.heavy_rain_volume}</li>
//       <li hidden id = "fire-volume">${mixes.large_fire_volume}</li>
//       <li hidden id = "fire2-volume">${mixes.campfire_volume}</li>
//       <li hidden id = "forest-volume">${mixes.forest_volume}</li>
//       <li hidden id = "river-volume">${mixes.river_volume}</li>
//       <li hidden id = "wind-volume">${mixes.strong_wind_volume}</li>
//       <li hidden id = "wind2-volume">${mixes.light_wind_volume}</li>
//       <li hidden id = "thunder-volume">${mixes.thunder_volume}</li>
//       <li hidden id = "wave-volume">${mixes.wave_volume}</li>
//       <li hidden id = "coffee-volume">${mixes.coffee_shop_volume}<li>
//       <li hidden id = "bird-volume">${mixes.bird_volume}</li>
//     `

//     mixUl.appendChild(mixLi)
  
//   }
//   function mixList(mixes){
//     let miUl=document.getElementById("mixes")

//   miUl.addEventListener("click",function(event){
//       let rain=parseFloat(document.getElementById("rain-volume").innerHTML)
//       let fire=parseFloat(document.getElementById("fire-volume").innerHTML)
//       let fire2=parseFloat(document.getElementById("fire2-volume").innerHTML)
//       let forest=parseFloat(document.getElementById("forest-volume").innerHTML)
//       let river=parseFloat(document.getElementById("river-volume").innerHTML)
//       let wind=parseFloat(document.getElementById("wind-volume").innerHTML)
//       let wind2=parseFloat(document.getElementById("wind2-volume").innerHTML)
//       let thunder=parseFloat(document.getElementById("thunder-volume").innerHTML)
//       let wave=parseFloat(document.getElementById("wave-volume").innerHTML)
//       let coffee=parseFloat(document.getElementById("coffee-volume").innerHTML)
//       let bird=parseFloat(document.getElementById("bird-volume").innerHTML)
  
//       let slider = document.getElementsByClassName("volumeSlider")
//       let audio = document.getElementsByTagName("audio") 
  
//     newArray=Array.from(audio)
//     console.log( newArray)
    
//   //      newArray.forEach(function(song){
//   //    audio[0].volume=rain//rain
//   //    audio[1].volume=bird//bird
//   //    audio[2].volume=fire//fire
//   //    audio[3].volume=thunder//thunder
//   //    audio[4].volume=wave//waves
//   //             // song.play()
  
//   //     }) 
//   })
//   }


