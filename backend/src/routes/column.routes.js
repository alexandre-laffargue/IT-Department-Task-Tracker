const express = require('express')
const { createColumn, patchColumn, deleteColumn } = require('../controllers/column.controller')
const { requireAuth } = require('../middlewares/auth')

const router = express.Router()

router.post('/boards/:boardId/columns', requireAuth, createColumn) // create
router.patch('/columns/:id', requireAuth, patchColumn)             // update
router.delete('/columns/:id', requireAuth, deleteColumn)           // delete

module.exports = router
