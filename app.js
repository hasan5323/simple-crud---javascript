//require
const express = require('express')
const app = express()
const port = 3000
const router = require("./routes")

// external package / middleware
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)

// listen
app.listen(port, ()=>{
    `listening to port ${port}`
})