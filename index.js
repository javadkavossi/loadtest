const express = require("express");

const { fork } = require("child_process");
const app = express();

app.get("/", (req, res) => {
    const child = fork("longTask.js");
    child.send("start-process")
    child.on("message", sum => {
        res.send(sum.toString())
    })
    
})

app.listen(3030, () => console.log("Example app listening on port 3030!"));