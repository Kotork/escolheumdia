let authForm = document.getElementById('authForm');
const EJSdata = document.getElementById('containerLogin').getAttribute('data-ejs');

console.log(authForm);

function handleSubmit (event) {
  event.preventDefault();


  alert('aqui');
  console.log('aqui');
}

authForm.addEventListener('submit', handleSubmit);