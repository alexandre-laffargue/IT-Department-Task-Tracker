const bcrypt = require('bcryptjs')
const Joi = require('joi')
const User = require('../models/User')
const { signJwt } = require('../utils/jwt')

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  name: Joi.string().min(2).required()
})

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
})

async function register (req, res, next) {
  try {
    const { email, password, name } = await registerSchema.validateAsync(req.body)

    const exists = await User.findOne({ email })
    if (exists) return res.status(409).json({ error: 'Email already used' })

    const passwordHash = await bcrypt.hash(password, 10)
    const user = await User.create({ email, passwordHash, name })

    const token = signJwt({ sub: user._id.toString(), email: user.email, roles: user.roles })
    res.status(201).json({
      token,
      user: { id: user._id, email: user.email, name: user.name, roles: user.roles }
    })
  } catch (err) {
    if (err.isJoi) err.status = 400
    next(err)
  }
}

async function login (req, res, next) {
  try {
    const { email, password } = await loginSchema.validateAsync(req.body)

    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })

    const ok = await bcrypt.compare(password, user.passwordHash)
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' })

    const token = signJwt({ sub: user._id.toString(), email: user.email, roles: user.roles })
    res.json({
      token,
      user: { id: user._id, email: user.email, name: user.name, roles: user.roles }
    })
  } catch (err) {
    if (err.isJoi) err.status = 400
    next(err)
  }
}

module.exports = { register, login }
