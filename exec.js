
const {exec} = require("child_process");
exec("loadtest -n 20 -c 20 http://localhost:3030", (err, stdout, stderr) => {
    if(err) return console.log("Error: ", err.message)
    if(stderr) return console.log("stderror: ", stderr);
    console.log("stdout: ", stdout);
})