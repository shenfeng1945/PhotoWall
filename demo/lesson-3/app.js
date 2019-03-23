// 中间件的使用
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000
const publicDir = require('path').join(__dirname, '/public')
let testMode = false

// app.use使用中间件
// morgan 请求日志中间件，会在控制台打出请求信息
app.use(morgan('dev'))


// 中间件函数
app.use((req, res, next) => {
    if (req.url === '/test') {
        testMode = true
    }
    next()
})

// 如果路径为'/'，则使用这个静态资源
// 等价于app.use('/', express.static(publicDir)) 
app.use(express.static(publicDir))

app.use((req, res) => {
    const data = testMode ? JSON.stringify(req.header) : `<h1>Nothing here for you...</h1>`
    const contentType = testMode ? 'text/plain' : 'text/html'
    res.writeHead(200, { 'Content-Type': contentType })
    res.end(data)
})

app.listen(port, () => console.log('server app running at localhost:3000'))