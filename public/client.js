const socket = io.connect("http://localhost:3000")

socket.on("message", (message) => {
        console.log(`New message: ${message}`)
})
