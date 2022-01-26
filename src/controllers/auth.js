import { runQuery } from '../helpers/query.js';
import { findUserByEmail } from '../helpers/users.js';

const loginError = 'User or password incorrect';

/* Object that needs to be passed to every page */
const options = {
  title: 'user',
  page: 'Login',
  error: '',
  success: '',
};

export const signinPage = (req, res) => {
  res.render('auth/login', {data: options});
}

export const signupPage = (req, res) => {
  res.render('auth/signup', {data: { ...options, page: 'Signup' }});
}

export const signin = async (req, res) => {
  let query = `
    SELECT *
    FROM Users
    WHERE Users.email = ${ req.body.email }
  `

  console.log(query)

  await runQuery(query, (err, result, fields) => {
    console.log('------------------')
    console.log(err)
    if (err) {
      res.status(500).send('Something went wrong!')
      return
    }
    console.log('------------------')
    console.log(result)
    console.log(result[0].password)
  })
/*
  if (body.submit === 'Login') {
    // Will check if the user exists
    const foundUser = mockData.find( (mockUser) => mockUser.email === body.email)

    if (!foundUser) {
      res.render('login', { data: { ...options, error: loginError }}); // user does not exist
    }

    // Checks if passwords match
    if (foundUser.password !== body.password) {
      res.render('login', { data: { ...options, error: loginError }}); // passwords do not match
    }

    // If it gets to this point, user is ok and can login
    req.session.user = (({password, ...o}) => o)(foundUser) // stores all user except password
    res.redirect('/')
  } else {
    console.log('User is creating a new account');

    const newAccount = {
      name: body.name,
      email: body.email,
      password: body.password,
      rgpd: body.rgpd === 'on', // true if accepted
      role: body.email.split('@').pop() === 'admin.pt' ? 'ADMIN' : 'USER'
    }

    console.log(newAccount)
  }*/
  res.send(true)
}

export const signup = async (req, res) => {
  let query = "INSERT INTO `Users`(`email`, `password`, `name`, `rgpd`, `role`) VALUES ('" + req.body.email + "', '" + req.body.password + "', '" + req.body.name + "', " + (req.body.rgpd ? 1 : 0) + ", 'USER')"

  await runQuery(query, (err, result, fields) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') { // Error if the email already exists
        console.log('aqui')
        res.status(500).send('Something went wrong!')
        return
      }
    }

    // If email does not exist then the user was created
    res.status(201).send(true);
  })
}

export const logout = (req, res) => {
  req.session.user = null
  res.redirect('/')
}