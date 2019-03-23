const express = require('express')
const app = express()
const port = process.env.PORT || 300


app.use((req,res) => {
    const data = `<h1>hello world</h1>`
    res.writeHead(200, { 'Content-Typs': 'text/html' })
    res.end(data)
})

app.listen(port, () => console.log('server app running at localhost:3000'))