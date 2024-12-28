const fs = require('fs');

fs.readFile('nodejs_architecture.txt', function (err, data) {
    if (err) { console.log(err) }
    console.log("successfully read the file:", data.toString())
})

fs.writeFile('nodejs_architecture.txt', "added by the write command through nodejs", function (err) {
    if (err) { console.log(err) }
    console.log("file written successfully")
})

fs.appendFile('nodejs_architecture.txt', 'advantages of itHere are some advantages of Node.js:Asynchronous and Event-Driven: Node.jsuses an event-driven, non-blocking I/O model, which makes it efficient and suitable for real-time applications that require high performance and scalability.', 'utf-8', function (err) {
    if (err) { console.log(err) }
    console.log("apeend done successfully")
})

fs.unlink('nodejs_architecture.txt', function (err) {
    if (err) { return console.error(err) }
    console.log("file deleted successfully")
})
