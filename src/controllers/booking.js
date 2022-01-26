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
    if (err) {
      res.status(404).send()
    } else {
      res.render('booking', {data: { ...options, clients: result }});
    }
  })
}

export const bookingClientPage = (req, res) => {
  let query = `
    SELECT *
    FROM Services
    WHERE Services.id_client = ${ req.params.client }
  `

  runQuery(query, (err, result, fields) => {
    console.log(err)
    console.log(result)
    if (err) {
      res.status(404).send()
    } else {
      res.render('bookingClient', {data: { ...options, services: result, id_client: req.params.client }});
    }
  })
}

export const bookingClientPage2 = (req, res) => {
  let query = `
    SELECT *
    FROM Staff
    WHERE Staff.id_client = ${ req.params.client }
  `
  console.log(req.params)

  console.log(query)

  runQuery(query, (err, result, fields) => {
    console.log(err)
    console.log(result)
    if (err) {
      res.status(404).send()
    } else {
      res.render('bookingClient2', {data: { ...options, staff: result, id_client: req.params.client, id_service: req.params.service }});
    }
  })
}

export const bookingClientPage3 = (req, res) => {
  let id_client = req.params.client
  let id_service = req.params.service
  let id_staff = req.params.staff
}