const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(201).json({
    resource: 'Ice-Flakes',
    count: 100,
    shape: 'circle'
  })
})

// Export app without starting the server
module.exports = app

// Only start the server when not in a test environment
if (process.env.NODE_ENV !== 'test') {
  const PORT = 3000
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
}