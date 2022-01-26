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

export const signin = (req, res) => {
  let query = `
    SELECT *
    FROM Users
    WHERE Users.email = '${ req.body.email }'
  `

  console.log(query)

  runQuery(query, (err, result, fields) => {
    if (err) {
      res.status(404).send()
    } else {
      console.log('------------------')
      console.log(result)
      console.log(result[0].password)
      console.log(req.body.password)

      if (result[0].password === req.body.password) {
        // Passwords match and we can login user
        req.session.user = (({password, ...o}) => o)(result[0]) // stores all user except password
        res.status(200).send()
      } else {
        // Passwords do not match
        res.status(401).send()
      }
    }
  })
}

export const signup = async (req, res) => {
  let query = "INSERT INTO `Users`(`email`, `password`, `name`, `rgpd`, `role`) VALUES ('" + req.body.email + "', '" + req.body.password + "', '" + req.body.name + "', " + (req.body.rgpd ? 1 : 0) + ", 'USER')"

  await runQuery(query, (err, result, fields) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') { // Error if the email already exists
        res.status(500).send('Something went wrong!')
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