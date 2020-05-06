// make a div container 
// make input field 
// fetch post to users


function loginSetup() {
  // const body = document.querySelector('body')
  const login_container = document.querySelector('.login_container')
  // console.log("login-conatiner",login_container)

  const div = document.createElement('div')
  div.id = 'inner-login'
  login_container.append(div)

  // const h1 = document.createElement('h1')
  // h1.id = 'login-title'
  // if user exists say login else say create username
  // h1.textContent = 'User Login'
  // div.append(h1)

  const login_form = document.createElement('form')
  
  login_form.id = 'login-form'
  login_form.innerHTML = `
    <input type="text" name="username" id="username-field" class="login-form-field" >
    <label for="text" class="label-name">
    <span class="content-name">
      username
    </span>
  </label>
  `

  div.append(login_form)
  // const login_btn = document.querySelector('#login-form-submit')

  login_form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log("target",e.target.children[0])

    const input = e.target.username

    const username = input.value

    // console.log(username)

    const new_username = {
      username
    }
    console.log(new_username)
    // login_form.reset()

    const options = {
      method: 'POST',
      body: JSON.stringify(new_username),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    const url = 'http://localhost:3000/api/v1'

    fetch(`${url}/users`, options)
    .then(r => r.json())
    .then((resp)=>console.log(resp))
    .catch(err => console.log("error:", err))

  })
  

}






