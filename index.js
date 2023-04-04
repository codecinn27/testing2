const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/bye', (req, res) => {
    res.send('byebye world')
  })

  app.get('/cinn', (req, res) => {
    res.send('Hi cinn')
  })
  
  app.get('/fariq', (req, res) => {
    res.send('Hi fariq')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })