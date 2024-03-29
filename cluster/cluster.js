const cluster = require("cluster")

const os = require("os")

if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();

    }
    cluster.on("exit", (work, code, signal) => {
        cluster.fork()
    })
} else {
    require("./app")
}