import { runQuery } from '../helpers/query.js';
import { findUserByEmail } from '../helpers/users.js';

const loginError = 'User or password incorrect';

/* Object that needs to be passed to every page */
const options = {
  title: 'user',
  page: 'Login',
  error: ''
};

const mockData =[
  {
    id: 1,
    name: 'luisfonseca',
    email: 'lf@gmail.com',
    password: '1234',
    rgpd: true,
    role: 'USER'
  }, {
    id: 2,
    name: 'Ricardo Mateus',
    email: 'a@a.pt',
    password: '1234',
    rgpd: true,
    role: 'USER'
  }, {
    id: 3,
    name: 'Admin User',
    email: 'admin@admin.pt',
    password: 'admin',
    rgpd: true,
    role: 'ADMIN'
  }, {
    id: 4,
    name: 'Client User',
    email: 'client@test.pt',
    password: '1212',
    rgpd: true,
    role: 'CLIENT'
  }
]

export const signinPage = (req, res) => {
  res.render('auth/login', {data: options});
}

export const signupPage = (req, res) => {
  res.render('auth/signup', {data: { ...options, page: 'Signup' }});
}

export const signin = (req, res) => {
  const body = req.body;

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
    res.send(newAccount)
  }
}

export const signup = async (req, res) => {
  const foundUser = findUserByEmail(req.body.email)

  if (foundUser) {
    res.status(400).send('User already exists!')
  }

  let query = `
    INSERT INTO Users ('email', 'password', 'name', 'rgpd', 'role') VALUES (${req.body.email}, ${req.body.password}, ${req.body.name}, ${req.body.rgpd}, 'USER')
  `

  runQuery(query, (err, result, fields) => {
    console.log(result);
  })

  res.send(true)
}

export const logout = (req, res) => {
  req.session.user = null
  res.redirect('/')
}