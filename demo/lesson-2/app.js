// http server 读取本地文件

const http = require('http')
const fs = require('fs')
const path = require('path')

let app = http.createServer((req,res) => {
    const index = path.join(__dirname, 'index.html')
    
    console.log(req.url)
    if(req.url === '/' || req.url === '/index.html'){
      fs.readFile(index, (err,data) => {
          if(err){
              console.log(err);
              res.writeHead(500, {'Content-Type': 'text/html'})
              res.end('500 server error')
          }else{
              res.writeHead(200, {'Content-Type': 'text/html'})
              res.end(data)
          }
      })
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end(`<html><body>404 not found</body></html>`)
    }
})

app.listen(3000, () => console.log('server app running at localhost:3000'))