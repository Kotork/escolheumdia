import { runQuery } from '../helpers/query.js'

let options = {
  title: 'Perfil',
  page: 'Profile',
  error: ''
};

export const userPage = (req, res) => {
  options.page = req.url === '/' ? 'Profile' : req.url.substr(2)[0].toUpperCase() + req.url.substr(2).substr(1).toLowerCase();
  let query;

  switch (options.page) {
    // USER PAGE CARDS
    case 'Cards':
      query = `
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
      break;
    // USER PAGE STAFF
    case 'Staff':
      console.log("staff")
      query = `
        SELECT *
        FROM Staff
        WHERE Staff.id_user = ${req.session.user.id}
      `

      runQuery(query, (err, result, fields) => {
        console.log("aqui")
        console.log(result)
      })
      break;
    default:
      console.log('other page')
  }

  console.log(options)

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