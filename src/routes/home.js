const express = require('express');
const homeRouter = express.Router()

const runQuery = require('../helpers/query');

/* Object that needs to be passed to every page */
const options = {
    title: 'Page title',
    page: 'Page file name'
  };

homeRouter.get('', (req, res) => {
  /*var query = "SELECT * FROM Autores;";
  runQuery(query, (err, result, fields) => {
    console.log(result);
  })*/
  res.render('home', {tile: 'Escolhe um dia', page: 'Home'});
})

module.exports = homeRouter;