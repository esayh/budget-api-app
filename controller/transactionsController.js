const express = require('express')
const transactions = express.Router()
const transactionsArr = require('../models/transactions')

transactions.get('/', (req, res) => {
	res.status(200).json(transactionsArr)
})

transactions.get('/:index', (req, res) => {
	const { index } = req.params
	if (transactions[index]) {
		res.status(200).json(transactionsArr[index])
	} else {
		res.redirect('/404')
	}
})

transactions.post('/', (req, res) => {
	transactionsArr.push(req.body)
	res.json(transactionsArr[transactionsArr.length - 1])
})

transactions.put('/:index', (req, res) => {
	const { index } = req.params
	if (transactionsArr[index]) {
		transactionsArr[index] = req.body
		res.json(transactionsArr[index])
	} else {
		res.redirect('/404')
	}
})

transactions.delete('/:index', (req, res) => {
	const { index } = req.params
	const removeTransaction = transactionsArr.splice(index, 1)
	if (transactionsArr[index]) {
		res.json(removeTransaction)
	} else {
		res.redirect('/404')
	}
})

module.exports = transactions
