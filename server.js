const http = require('http');
const fs = require('fs');
const ejs = require('ejs')

const html = fs.readFileSync('./index.ejs', 'UTF-8')

const getFromClient = (req, res) => {
  const content = ejs.render(html, {
    content: 'ejsで組み込まれた文章'
  })
  res.writeHead(200, { 'Content-Type': 'text/html'})
  res.write(content)
  res.end()
}

const server = http.createServer(getFromClient)

server.listen('3000')

console.log('http://localhost:3000/');
