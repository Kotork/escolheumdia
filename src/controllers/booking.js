import { runQuery } from '../models/query.js';

/* Object that needs to be passed to every page */
const options = {
  title: 'booking',
  page: 'Reservas',
  error: '',
  success: '',
};

export const bookingPage = (req, res) => {
  let query = `
    SELECT *
    FROM Clients
  `

  runQuery(query, (err, result, fields) => {
    console.log(err)
    console.log(result)
    if (err) {
      res.status(404).send()
    } else {
      res.render('booking', {data: { ...options, clients: result }});
    }
  })
}
