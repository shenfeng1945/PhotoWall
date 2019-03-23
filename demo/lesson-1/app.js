//创建一个简单http server
const http = require('http')

function onListenEvent(req, res) {
    res.writeHead(200, { 'Content-Typs': 'text/html' })
    res.end(`<h1>hello world</h1>`)
}

const app = http.createServer(onListenEvent)

app.listen(3000, () => console.log('server app running at localhost:3000'))
