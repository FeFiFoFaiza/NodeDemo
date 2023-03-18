// Importing node libraries
const express = require("express")
const socketio = require("socket.io")
const http = require("http")

// create instance of Express to route and serve static files
const app = express()
// create http server 
const server = http.createServer(app)
// instance of socet.io
const io = socketio(server)

// Express serves static files inside of the /public folder
app.use("/", express.static(__dirname + "/public"))

server.listen(3000)