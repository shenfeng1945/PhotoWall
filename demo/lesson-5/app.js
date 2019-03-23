const app = require('express')()
const port = process.env.PROT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
let users = [{ id: 1, name: 'curry' }]

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/users', (req, res) => {
    res.send({ success: true, users })
})

app.get('/users/:name', (req, res) => {
    const name = req.params.name
    const user = users.find(item => item.name === name)
    let result = user ? { success: true, user } : { success: false, reason: `user not found: ${name}` }
    res.send(result)
})

app.post('/users', (req, res) => {
    let user = req.body
    console.log(user,'user');
    if (!user || !user.name) {
        res.send({ success: false, reason: 'cannot create user' })
        return
    }
    users.push(user)
    user.id = users.length
    res.send({ success: true, user: user })
})

app.put('/users/:name', (req, res) => {
    let name = req.params.name
    newName = req.body.name
    let user = users.find(item => item.name === name)
    let result
    if (user) {
        user.name = newName
        result = { success: true, user }
    } else {
        result = { success: false, reason: 'user not found: ' + name }
    }
    res.send(result)
})

app.delete('/users/:name', (req, res) => {
    let name = req.params.name
    let user = users.find(item => item.name === name)
    let result = user ? { success: true, user } : { success: false, reason: 'user not found: ' + name }
    users = users.filter(item => item.name !== name)
    res.send(result)
})

let server = app.listen(port, '127.0.0.1', () => {
    let host = server.address()
    console.log('server started on %s:%s', host.address, host.port)
})