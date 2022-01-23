const authForm = document.getElementById('authForm');

const EJSdata = document.getElementById('containerLogin').getAttribute('data-ejs');

console.log(EJSdata);

function switchLoginSignup(changeTo) {
  authForm.classList.remove('error--shadow');
  if (changeTo === 'Login') {
    // redirects to the same page
    window.location.href = window.location.href
  } else {
    authForm.innerHTML = `
      <h1 class="form--title">Faz o teu registo</h1>
      <div class="form--field">
        <label for="signupName">Nome</label>
        <input id="signupName" type="text" name="name" value="">
      </div>
      <div class="form--field">
        <label for="signupEmail">Email</label>
        <input id="signupEmail" type="email" name="email" value="">
      </div>
      <div class="form--field">
        <label for="signupPassword">Password</label>
        <input id="signupPassword" type="password" name="password" value="">
      </div>
      <div class="form--field__checkbox">
        <input id="signupRGPD" type="checkbox" name="rgpd">
        <label for="signupRGPD">RGPD - Termos e Condições</label>
      </div>
      <input type="submit" name="submit" value="Registar" class="btn btn--round">
      <span class="form--info">
        Já tens conta?
        <a type="button" class="btn--text" onclick="switchLoginSignup('Login')">Faz login aqui!</a>
      </span>
    `
  }
}