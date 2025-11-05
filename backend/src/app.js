const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const apiRouter = require('./routes')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const path = require('path')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Healthcheck
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// Swagger UI (charge swagger/openapi.yaml)
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger/openapi.yaml'))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Routes API
app.use('/api', apiRouter)

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not found', path: req.originalUrl })
})

// Errors
app.use((err, _req, res, _next) => {
  console.error('[error]', err)
  const status = err.status || 500
  res.status(status).json({ error: err.message || 'Internal Server Error' })
})

module.exports = app
