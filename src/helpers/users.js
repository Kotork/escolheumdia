import { runQuery } from './query.js';

export const findUserByEmail = async (email) => {
  let query = `
    SELECT *
    FROM Users
  `

  let foundUser;

  console.log('111111111111111111')

  // Find user or admin
  await runQuery(query, (err, result, fields) => {
    console.log('2222222222222222')
    foundUser = result.find( user => user.email === email)

    if (foundUser) {
      return foundUser
    }
  })

  console.log('333333333333333333333')

  query = `
    SELECT *
    FROM Clients
  `

  // Find client
  await runQuery(query, (err, result, fields) => {
    console.log('4444444444444444444444')
    foundUser = result.find( user => user.email === req.body.email)

    if (foundUser) {
      return foundUser
    }
  })

  console.log('5555555555555555555555555')
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