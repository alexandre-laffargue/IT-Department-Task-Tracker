const dotenv = require('dotenv')
const app = require('./app')
const { connectDB } = require('./config/db')

dotenv.config()

const PORT = process.env.PORT || 3000

async function bootstrap () {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`[server] listening on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('[server] failed to start:', err)
    process.exit(1)
  }
}

bootstrap()
