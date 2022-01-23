const express = require('express');
const homeRouter = express.Router()

/* Object that needs to be passed to every page */
const options = {
    title: 'Page title',
    page: 'Page file name'
  };

homeRouter.get('', (req, res) => {
    res.render('home', {tile: 'Escolhe um dia', page: 'Home'});
})

module.exports = homeRouter;