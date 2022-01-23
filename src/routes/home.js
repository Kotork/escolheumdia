import express from 'express';
import { runQuery } from '../helpers/query.js';

const homeRouter = express.Router()

/* Object that needs to be passed to every page */
const options = {
    title: 'Escolhe um dia',
    page: 'Home'
  };

homeRouter.get('', (req, res) => {
  /*var query = "SELECT * FROM Autores;";
  runQuery(query, (err, result, fields) => {
    console.log(result);
  })*/
  res.render('home', { data: options });
})

export default homeRouter;