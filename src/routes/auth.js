const express = require('express');
const authRouter = express.Router()

/* Object that needs to be passed to every page */
const options = {
  title: 'Page title',
  page: 'Page file name'
};

authRouter.get('', (req, res) => {
  res.render('login', {title: 'Login', page: 'Login'});
})

authRouter.post('/', (req, res) => {
  console.log('Form posted');
  console.log(req.query);
  console.log(req.body);
  res.send(true)
})

module.exports = authRouter;