const express = require("express");
// console.log('express:', express)

const app = express();

const user_details = require("./MOCK_DATA.json")

app.listen(1234, () => {
    console.log("Hai friend I am listening port number 1234")
})

app.get("/", (req, res) => {
    res.send("Welcome to Home page")
})

app.get("/users", (req, res) => {
    res.send(user_details)
})