const os = require('os');

console.log("os release date: " + os.release());
console.log("operating system name: " + os.type());

const http = require('http')

const server = http.createServer( (req,res) => {
    if(req.url == '/'){
        res.write('<h1>I am happy to learn fullstack web development from PWSKILLS</h1>')
    }else if(req.url == '/about'){
        res.write('<h1>My name is Saklain baig, a fullstack web developer</h1>')
    }
} )

server.listen(3006)
console.log("sever created successfully on port 3006")

