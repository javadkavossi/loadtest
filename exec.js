
const {exec} = require("child_process");
exec("loadtest -n 10 -c 10 http://localhost:3030", (err, stdout, stderr) => {
    if(err) return console.log("Error: ", err.message)
    if(stderr) return console.log("stderror: ", stderr);
    console.log("stdout: ", stdout);
})