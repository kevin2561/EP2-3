const express = require("express")
const app = express()
const http = require("http")
const puerto = 4500
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)
io.on("connection", (socket) => {
    console.log("Usuario conectado")
    socket.on("chat", (msg) => {
        io.emit("chat", msg)
    })
})
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/cliente/index.html`)
})
server.listen(puerto, () => {
    console.log(`Servido corriendo en puerto http://localhost:${puerto}`)
})
