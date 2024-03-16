import express from 'express'

import sumRouter from './routes/sum'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

app.use('/api/sum', sumRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
