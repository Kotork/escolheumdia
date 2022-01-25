import { runQuery } from './query.js';

export const findUserByEmail = async (email) => {
  let query = `
    SELECT *
    FROM Users
  `

  let foundUser;

  // Find user or admin
  await runQuery(query, (err, result, fields) => {
    foundUser = result.find( user => user.email === email)

    if (foundUser) {
      return foundUser
    }
  })

  query = `
    SELECT *
    FROM Clients
  `

  // Find client
  await runQuery(query, (err, result, fields) => {
    foundUser = result.find( user => user.email === req.body.email)

    if (foundUser) {
      return foundUser
    }
  })

  return null
}

export const findUserById = async (id) => {
  let query = `
    SELECT *
    FROM Users
  `

  let foundUser;

  // Find user or admin
  await runQuery(query, (err, result, fields) => {
    foundUser = result.find( user => user.id === id)

    if (foundUser) {
      return foundUser
    }
  })

  query = `
    SELECT *
    FROM Clients
  `

  // Find client
  await runQuery(query, (err, result, fields) => {
    foundUser = result.find( user => user.id === req.body.id)

    if (foundUser) {
      return foundUser
    }
  })

  return null
}