const express = require('express')
const app = express()
const port = 7981

app.get('/', (req, res) => {
  res.json([
    {
      name:"bob",
        id:"hello"
  },
  {
    name:"vinod",
    id:"hey"
  }
])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})