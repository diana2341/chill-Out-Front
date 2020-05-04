
const url = 'http://localhost:3000/api/vi'

const adapter = {

  getUsers: () => {
    return fetch(`${URL}/users`)
    .then(res=>res.json())
  },

  createUser: (username) => {
    return fetch(`${URL}/users`, {
      method: 'POST',
      headers: { 
        "Content-Type": "application/json", 
        "Accept": "application/json"
      },
      body: JSON.stringify(username)
    })
    .then(res => res.json())
  }
}

