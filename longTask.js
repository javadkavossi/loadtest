function longTask() {
    let sum = 0
    for (let index = 0; index < 1000000000; index++) {
        sum += index
    }
    return sum
}

process.on("message",message =>{
if(message === "start-process"){
    const sum = longTask()
    process.send(sum)
}
})