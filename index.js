const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var a = 1;
  var b = 2;
  res.send('Hello World ha thanh phong are you thereeeeeeeeeee!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})