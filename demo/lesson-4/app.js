// 路由的使用
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// res.send(xxx)
// xxx有'text/html','text/plain','application/json','text/xml'种类型
app.get('/', (req, res) => {
    const data = `<h1>hello world</h1>`
    res.send(data)
})

app.get('/about',(req,res) => {
    res.send('About')
})

// app.listen(port, () => console.log('server app running at localhost:3000'))

// let server = app.listen(port, () => console.log('server started on port %s', server.address().port))

let server = app.listen(port, '127.0.0.1', () => {
    let host = server.address()
    console.log('server started on %s:%s', host.address, host.port)
})
