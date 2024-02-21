const express = require('express')
const { ValidationError, Op } = require('sequelize')
const router = express.Router()
const Trades = require('../models/trades')

router.post('/', async (req, res) => {
  const { type, user_id, symbol, shares, price, timestamp } = req.body

  try {
    const trade = new Trades({
      type,
      user_id,
      symbol,
      shares,
      price,
      timestamp,
    })
    await trade.save()
    return res.status(201).json(trade)
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json(error)
    }
    return res.status(500).end('Server error')
  }
})

router.get('/', async (req, res) => {
  const { type, user_id } = req.query
  const where = {}
  if (type) {
    where['type'] = type
  }
  if (user_id) {
    where['user_id'] = user_id
  }
  try {
    const trades = await Trades.findAll({
      order: [['id', 'ASC']],
      where,
    })
    return res.status(200).json(trades)
  } catch {
    return res.status(500).end('Server error')
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const trade = await Trades.findOne({
      where: {
        id,
      },
    })
    if (!trade) {
      return res.status(404).end('ID not found')
    }
    return res.status(200).json(trade)
  } catch {
    return res.status(500).end('Server error')
  }
})

router.delete('/:id', (req, res) => res.status(405).end())
router.put('/:id', (req, res) => res.status(405).end())
router.patch('/:id', (req, res) => res.status(405).end())

module.exports = router
