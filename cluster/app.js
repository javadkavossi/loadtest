const express = require("express")

const app = express()
const cluster = require("cluster")


app.get("/", (req, res) => {

    let sum = 0
    for (let index = 0; index < 1e9; index++) {
        sum += index
    }

    // cluster.worker.kill()
    res.send(`process Id : ${process.pid}`)
})

app.listen(3400, () => {
    console.log("server reday on : http://localhost:3400");
})