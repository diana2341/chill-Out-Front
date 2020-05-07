function fetchUserMixes(){

  fetch("http://localhost:3000/api/v1/mixes")
  .then((resp)=>resp.json())
  .then((data)=>{
      // mixList(data)
      console.log(data)
      data.forEach(function(mixes){
      listMixes(mixes)

      })
  })
  }
  
  function listMixes(mixes){
    let mixUl=document.querySelector("#mixesLi")
    
    let mixLi=document.createElement("li")
    // mixLi.dataset.id=mixes.id

    // uploadmixes class is the play button on the lists
    mixLi.innerHTML=`
      
      title:${mixes.mix_name}
      <button class ="uploadedMixes" >play</button> 
      
      <li hidden id = "rain-volume" >${mixes.heavy_rain_volume}</li>
      <li hidden id = "fire-volume">${mixes.large_fire_volume}</li>
      <li hidden id = "fire2-volume">${mixes.campfire_volume}</li>
      <li hidden id = "forest-volume">${mixes.forest_volume}</li>
      <li hidden id = "river-volume">${mixes.river_volume}</li>
      <li hidden id = "wind-volume">${mixes.strong_wind_volume}</li>
      <li hidden id = "wind2-volume">${mixes.light_wind_volume}</li>
      <li hidden id = "thunder-volume">${mixes.thunder_volume}</li>
      <li hidden id = "wave-volume">${mixes.wave_volume}</li>
      <li hidden id = "coffee-volume">${mixes.coffee_shop_volume}<li>
      <li hidden id = "bird-volume">${mixes.bird_volume}</li>
    `

    mixUl.appendChild(mixLi)
  
  }
  function mixList(mixes){
    let miUl=document.getElementById("user-mix-display")

  miUl.addEventListener("click",function(event){
      let rain=parseFloat(document.getElementById("rain-volume").innerHTML)
      let fire=parseFloat(document.getElementById("fire-volume").innerHTML)
      let fire2=parseFloat(document.getElementById("fire2-volume").innerHTML)
      let forest=parseFloat(document.getElementById("forest-volume").innerHTML)
      let river=parseFloat(document.getElementById("river-volume").innerHTML)
      let wind=parseFloat(document.getElementById("wind-volume").innerHTML)
      let wind2=parseFloat(document.getElementById("wind2-volume").innerHTML)
      let thunder=parseFloat(document.getElementById("thunder-volume").innerHTML)
      let wave=parseFloat(document.getElementById("wave-volume").innerHTML)
      let coffee=parseFloat(document.getElementById("coffee-volume").innerHTML)
      let bird=parseFloat(document.getElementById("bird-volume").innerHTML)
  
      let slider = document.getElementsByClassName("volumeSlider")
      let audio = document.getElementsByTagName("audio") 
  
    newArray=Array.from(audio)
    console.log( newArray)
    

  })
  }