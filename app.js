//Dependencies
const express = require('express')
const cors = require('cors')
const app = express()
const transactionsController = require('./controller/transactionsController')



//Middleware
app.use(cors())
app.use(express.json())
app.use('/transactions', transactionsController)

app.use((req, res, next) => {
  console.log(`[development] middleware running.`)
  next()
})

//Routes
app.get('/', (req, res) => {
  res.send('Welcome to your favorite budgeting app!')
})

app.get('*', (req, res) => {
  res.status(404).send('Transaction not found')
})

module.exports = app