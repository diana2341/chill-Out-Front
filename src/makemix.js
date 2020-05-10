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

function newMix () {
	let slider = document.getElementsByClassName('volumeSlider');

	let saveBtn = document.getElementById('save');
	saveBtn.addEventListener('click', function (event) {
		let audio = document.querySelectorAll('audio');
		//  let currentValue = audio[0].parentNode.parentNode.dataset.audioKey
		//  console.log(currentValue)
		// let i=body[light_rain_volume] = slider[0].value

		if (!audio[0].paused) {
			let volume0 = (audio[0].volume = slider[0].value);

			console.log(slider[0].value);
			console.log(`audio:${volume0}`);
			//  return volume0
		}
		if (!audio[1].paused) {
			let volume1 = (audio[1].volume = slider[1].value);
			console.log(slider[1].value);
			console.log(`audio:${volume1}`);
			//  return volume1
		}
		if (!audio[2].paused) {
			let volume2 = (audio[2].volume = slider[2].value);

			console.log(slider[2].value);
			console.log(`audio:${volume2}`);
			//  return volume2
		}
		if (!audio[3].paused) {
			let volume3 = (audio[3].volume = slider[3].value);

			console.log(slider[3].value);
			console.log(`audio:${volume3}`);
		}
		if (!audio[4].paused) {
			let volume4 = (audio[4].volume = slider[4].value);

			console.log(slider[4].value);
			console.log(`audio:${volume4}`);
			//  return volume4
		}
		if (!audio[5].paused) {
			let volume5 = (audio[5].volume = slider[5].value);

			console.log(slider[5].value);
			console.log(`audio:${volume5}`);
			//  return volume5
		}
	});
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

function createMixForm () {
	let x = document.getElementById('myDIV');

	let form = document.createElement('form');
	form.id = 'mixForm';
	form.innerHTML = `
   
       <label>Mix name: </label>
        <input type="text" name="mixname">
         <input type="submit">
    `;
	x.appendChild(form);
}

let audio = (function () {
	const audio = {
		light_rain_volume: 1,
		heavy_rain_volume: 1,
		large_fire_volume: 1,
		campfire_volume: 1,
		forest_volume: 1,
		river_volume: 1,
		strong_wind_volume: 1,
		light_wind_volume: 1,
		thunder_volume: 1,
		wave_volume: 1,
		coffee_shop_volume: 1,
		bird_volume: 1
	};

	return audio;
})();

// let light_rain_volume = audio[0].parentNode.parentNode.dataset.audioKey
// body[light_rain_volume] = slider[0].value
function addMix () {
	let slider = document.getElementsByClassName('volumeSlider');
	let audio = document.querySelectorAll('audio');
	//  let currentValue = audio[0].parentNode.parentNode.dataset.audioKey
	//  console.log(currentValue)
	// let i=body[light_rain_volume] = slider[0].value

	if (!audio[0].paused) var volume0 = (audio[0].volume = slider[0].value);

	console.log(slider[0].value);
	console.log(`audio:${(audio[0].volume = slider[0].value)}`);
	// return volume0

	if (!audio[1].paused) {
		var volume1 = (audio[1].volume = slider[1].value);
		console.log(slider[1].value);
		console.log(`audio:${volume1}`);
		// return volume1
	}
	if (!audio[2].paused) {
		var volume2 = (audio[2].volume = slider[2].value);

		console.log(slider[2].value);
		console.log(`audio:${volume2}`);
		// return volume2
	}
	if (!audio[3].paused) {
		var volume3 = (audio[3].volume = slider[3].value);

		console.log(slider[3].value);
		console.log(`audio:${volume3}`);
	}
	if (!audio[4].paused) {
		var volume4 = (audio[4].volume = slider[4].value);

		console.log(slider[4].value);
		console.log(`audio:${volume4}`);
		// return volume4
	}
	if (!audio[5].paused) {
		var volume5 = (audio[5].volume = slider[5].value);

		console.log(slider[5].value);
		console.log(`audio:${volume5}`);
		// return volume5
	}

	console.log((audio[0].volume = slider[0].value));
	// ===============aboive is the if audio is playing
	let mixForm = document.getElementById('mixForm');
	mixForm.addEventListener('submit', function (event) {
		event.preventDefault();

		let mix_name = event.target.mixname.value;
		// console.log(mixTitle)
		let user_id = document.querySelector('.left-container').dataset.userId;
		let key = document.querySelector('.audio-container').dataset.audioKey;
		let volume0 = (audio[0].volume = slider[1].value); //rain
		let volume1 = (audio[1].volume = slider[2].value); //bird
		let volume2 = (audio[2].volume = slider[3].value); //fire
		let volume3 = (audio[3].volume = slider[4].value); //thunder
		let volume4 = (audio[4].volume = slider[5].value); //waves

		fetch('http://localhost:3000/api/v1/mixes', {
			method: 'POST',
			body: JSON.stringify({
				mix_name,
				user_id,
				light_rain_volume: volume0,
				heavy_rain_volume: volume0,
				large_fire_volume: volume2,
				campfire_volume: volume2,
				forest_volume: volume4,
				river_volume: 0,
				strong_wind_volume: 0,
				light_wind_volume: 0,
				thunder_volume: volume3,
				wave_volume: volume4,
				coffee_shop_volume: 0,
				bird_volume: volume1
			}),
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
			.then((r) => r.json())
			.then(listMixes)
			.catch((err) => console.log('error:', err));
	});
}

//==========get users mixess///
function getMixes () {
	fetch('http://localhost:3000/api/v1/mixes').then((resp) => resp.json()).then((data) => {
		mixList(data);
		data.forEach(function (mixes) {
			listMixes(mixes);
		});
	});
}

function listMixes (mixes) {
	let mixUl = document.getElementById('mixes');

	let mixLi = document.createElement('li');
	mixLi.dataset.id = mixes.id;
	mixLi.innerHTML = `
  
    title:${mixes.mix_name}
    <button class ="uploadedMixes" >play</button>
    `;

	mixUl.appendChild(mixLi);
}

function mixList(mixes){
       let miUl=document.getElementById("mixes")
         
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
console.log(audio[0].volume=rain)
console.log(audio[1].volume=bird)
 console.log(audio[2].volume=thunder)
 console.log(audio[3].volume=fire)
 console.log(audio[4].volume=thunder)
 console.log(audio[5].volume=wave)
 console.log(audio[6].volume=rain)
 console.log(audio[7].volume=rain)
console.log(audio[8].volume=rain)
console.log(audio[9].volume=rain)
console.log(audio[10].volume=rain)
console.log(audio[11].volume=rain)


//  newArray=Array.from(audio)
//  console.log( newArray)
  
//      newArray.forEach(function(song){
//    audio[0].volume=rain//rain
//    audio[1].volume=bird//bird
//    audio[2].volume=fire//fire
//    audio[3].volume=thunder//thunder
//    audio[4].volume=wave//waves
//             // song.play()

//     }) 
})
}
