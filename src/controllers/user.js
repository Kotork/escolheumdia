import { runQuery } from '../helpers/query.js'

let options = {
  title: 'Perfil',
  page: '',
  error: ''
};

export const cardsPage = (req, res) => {
  options.page = 'Cards'

  let query = `
    SELECT *
    FROM Cards
    WHERE Cards.id_user = ${req.session.user.id}
  `

  runQuery(query, (err, result, fields) => {
    if (result.length) {
      options = { ...options, card: {
        id: result[0].id,
        name: result[0].name,
        number: result[0].number,
        validity: result[0].validity,
        cvv: result[0].cvv,
      } }
    }
  })

  res.render('user', {data: options});
}

export const staffPage = (req, res) => {
  options.page = 'Staff'

  let query = `
    SELECT *
    FROM Staff
    WHERE Staff.id_client = ${req.session.user.id}
  `
  console.log(query)

  runQuery(query, (err, result, fields) => {
    console.log("aqui")
    console.log(err)
    if (err) {
      res.status(404).send()
    } else {
      console.log(result)
      res.render('user', {data: { ...options, staff: result }});
    }
  })
}

export const bookingsPage = (req, res) => {
  options.page = 'Bookings'

  res.render('user', {data: options});
}

export const clientsPage = (req, res) => {
  options.page = 'Clients'

  res.render('user', {data: options});
}

export const invoicesPage = (req, res) => {
  options.page = 'Invoices'

  res.render('user', {data: options});
}

export const sddPage = (req, res) => {
  options.page = 'Sdd'

  res.render('user', {data: options});
}

export const servicesPage = (req, res) => {
  options.page = 'Services'

  res.render('user', {data: options});
}

export const usersPage = (req, res) => {
  options.page = 'Users'

  res.render('user', {data: options});
}

export const userPage = (req, res) => {
  options.page = req.url === '/' ? 'Profile' : req.url.substr(2)[0].toUpperCase() + req.url.substr(2).substr(1).toLowerCase();

  res.render('user', {data: options});
}

// function that creates or updates a card
export const updateCard = (req, res) => {
  let query;

  if (req.body.id) {
    // update card
    query = "UPDATE `Cards` SET `name`='" + req.body.name + "', `number`='" + req.body.number + "', `cvv`=" + req.body.cvv + ", `validity`='" + req.body.validity + "' WHERE Cards.id = " + req.body.id

    runQuery(query, (err, result, fields) => {
      if (err) {
        res.status(404).send()
      } else {
        res.status(200).send()
      }
    })
  } else {
    // create new card
    query = "INSERT INTO `Cards`(`name`, `number`, `cvv`, `validity`, `id_user`) VALUES ('" + req.body.name + "', '" + req.body.number + "', " + req.body.cvv + ", '" + req.body.validity + "', " + req.session.user.id + ")"

    runQuery(query, (err, result, fields) => {
      if (err) {
        res.status(404).send()
      } else {
        res.status(200).send()
      }
    })
  }
  res.status(500).send()
}