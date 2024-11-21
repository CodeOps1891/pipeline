const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(201).json({
    resource: 'Ice-Flakes',
    count: 101,
    shape: 'circle'
  })
})

// Export app without starting the server
module.exports = app

// Only start the server when not in a test environment
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000 // Use Azure's port or default to 3000
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}
