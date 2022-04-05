const app = require('express')()
const dotenv = require('dotenv')
const NODE_ENV = process.env.NODE_ENV  || 'dev'

dotenv.config({ path: `${process.cwd()}/env/${NODE_ENV}.env`})

app.get('/users', (req, res) => {
  return res.send({ name: 'hung dang'}).status(200)
})

const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(PORT, HOST, ()=> {
  console.log(`Server is running on ${HOST}:${PORT}`)
})
