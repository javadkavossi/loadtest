const express = require("express");

const app = express();

app.get("/", (req, res) => {
    let sum = 0 
    for (let index = 0; index < 1000000000; index++) {
        sum += index
    }
    res.send(sum.toString());
})

app.listen(3030, () => console.log("Example app listening on port 3030!"));