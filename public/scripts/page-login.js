const authForm = document.getElementById('authForm');

function switchLoginSignup(changeTo) {
  if (changeTo === 'Login') {
    authForm.innerHTML = `
      <h1 class="form--title">Faz Login na tua conta</h1>
      <div class="form--field">
        <label for="loginEmail">Email</label>
        <input id="loginEmail" type="email" name="email" value="">
      </div>
      <div class="form--field">
        <label for="loginPassword">Password</label>
        <input id="loginPassword" type="password" name="password" value="">
      </div>
      <input type="submit" name="submit" value="Login" class="btn btn--round">
      <span class="form--info">
        Ainda não tens conta?
        <a type="button" class="btn--text" onclick="switchLoginSignup('Signup')">Regista-te aqui!</a>
      </span>
    `
  } else {
    authForm.innerHTML = `
      <h1 class="form--title">Faz Login na tua conta</h1>
      <div class="form--field">
        <label for="loginEmail">Email</label>
        <input id="loginEmail" type="email" name="email" value="">
      </div>
      <div class="form--field">
        <label for="loginPassword">Password</label>
        <input id="loginPassword" type="password" name="password" value="">
      </div>
      <input type="submit" name="submit" value="Login" class="btn btn--round">
      <span class="form--info">
        Ainda não tens conta?
        <a type="button" class="btn--text" onclick="switchLoginSignup('Login')">Já tens conta!</a>
      </span>
    `
  }
}