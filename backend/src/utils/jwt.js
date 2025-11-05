const jwt = require('jsonwebtoken')

function signJwt (payload, options = {}) {
  const secret = process.env.JWT_SECRET
  const expiresIn = process.env.JWT_EXPIRES_IN || '1d'
  return jwt.sign(payload, secret, { expiresIn, ...options })
}

function verifyJwt (token) {
  const secret = process.env.JWT_SECRET
  return jwt.verify(token, secret)
}

module.exports = { signJwt, verifyJwt }
