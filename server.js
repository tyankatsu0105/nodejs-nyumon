const http = require('http');
const fs = require('fs');

const getFromClient = (req, res) => {
  fs.readFile('./index.html', 'UTF-8', (error, data) => {
    const content = data.replace(/replaced/g, '置換されたテキスト')
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.write(content)
    res.end()
  })
}

const server = http.createServer(getFromClient)

server.listen('3000')

console.log('http://localhost:3000/');
