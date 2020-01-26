const http = require('http');
const fs = require('fs');
const ejs = require('ejs')
const url = require('url')

const html = fs.readFileSync('./index.ejs', 'UTF-8')
const htmlOther = fs.readFileSync('./other.ejs', 'UTF-8')
const css = fs.readFileSync('./style.css', 'UTF-8')

const getFromClient = (req, res) => {
  const route = url.parse(req.url)
  let content;
  
  switch (route.pathname) {
    case '/':
      content = ejs.render(html, {
        content: 'ejsで組み込まれた文章',
        title: 'top'
      })
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.write(content)
      res.end()
      break;

    case '/other':
      content = ejs.render(htmlOther, {
        content: 'ejsで組み込まれた文章',
        title: 'other'
      })
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.write(content)
      res.end()
      break;

    case '/style.css':
      res.writeHead(200, { 'Content-Type': 'text/css'})
      res.write(css)
      res.end()
      break;
  
    default:
      res.writeHead(200, { 'Content-Type': 'text/plain'})
      res.write('no contents')
      res.end()
      break;
  }
   
}

const server = http.createServer(getFromClient)

server.listen('3000')

console.log('http://localhost:3000/');
