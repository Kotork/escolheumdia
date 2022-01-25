let form = document.getElementById('authForm');
const EJSdata = document.getElementById('containerLogin').getAttribute('data-ejs');

async function handleSubmit (event) {
  event.preventDefault();


  alert('aqui');
  console.log('aqui');
}

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  let data = {}

  if (document.getElementById('submitBtn').value === 'Login') {
    let email = document.getElementById('loginEmail').value
    let password = document.getElementById('loginPassword').value
    data = {email, password}
  } else {
    let name = document.getElementById('signupName').value
    let email = document.getElementById('signupEmail').value
    let password = document.getElementById('signupPassword').value
    let rgpd = document.getElementById('signupRGPD').checked
    data = {name, email, password, rgpd}
  }

  fetch(`${ baseUrl }/auth/signup`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }).then( response => {
    if (response.status === 400) {
      alert('Utilizador já existe')
      form.reset()
    } else {
      alert('Utilizador criado com sucesso')
      window.location.href = `${baseUrl}/user`
    }

  }).catch(error => {
    alert(error.message)
  });
}
form.addEventListener("submit", handleSubmit)