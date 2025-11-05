const express = require('express')
const auth = require('./auth.routes')
const board = require('./board.routes')
const column = require('./column.routes')
const card = require('./card.routes')
const { requireAuth } = require('../middlewares/auth')

const router = express.Router()

router.use('/auth', auth)
router.use('/boards', board)
router.use('/', column)
router.use('/', card)

router.get('/me', requireAuth, (req, res) => res.json({ user: req.user }))

module.exports = router
