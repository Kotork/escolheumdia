const loginError = 'User or password incorrect';

/* Object that needs to be passed to every page */
const options = {
  title: 'login',
  page: 'Login',
  error: ''
};

const mockData =[
  {
    name: 'Ricardo Mateus',
    email: 'r.fmateus@hotmail.com',
    password: '1234',
    rgpd: true,
    role: 'USER'
  }, {
    name: 'Ricardo Mateus',
    email: 'a@a.pt',
    password: '1234',
    rgpd: true,
    role: 'USER'
  }, {
    name: 'Admin User',
    email: 'admin@admin.pt',
    password: 'admin',
    rgpd: true,
    role: 'ADMIN'
  }, {
    name: 'Client User',
    email: 'client@test.pt',
    password: '1212',
    rgpd: true,
    role: 'CLIENT'
  }
]

export const signinPage = (req, res) => {
  res.render('login', {data: options});
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

export const logout = (req, res) => {
  req.session.user = null
  res.redirect('/')
}