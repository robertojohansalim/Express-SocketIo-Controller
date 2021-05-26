const express = require('express')
const app = express()
const http = require('http').Server(app)

const exphbs = require('express-handlebars')
const io = require('socket.io')(http)

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.set("view engine", 'hbs')

app.use(express.urlencoded({extended: true}))

// Import Controller
const mycontroller = require("./controller/mycontroller")


// All is accepting any method (POST, GET, etc...)
//   -- Notice /send have parameters in the function (run the send function)
app.all("/send_global", mycontroller.send(io))
//   -- Get only Pass the function (not running it) as it is a First Class Citizen 
app.get("/", mycontroller.index)



http.listen(3030, function(){
    console.log("Listening on port: 3030")
})



