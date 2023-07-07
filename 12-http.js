const { clear } = require("console");
const http = require(`http`);

const server = http.createServer((req,res)=>{
if(req.url === `/`){
  res.end(`welcome the our home page`)
}
if(req.url === `/A`){
  res.end(`this is marios server`)
}
res.end(`<h1>Oops</h1><p>this page dos not exist</p> <a href="/">back home</a>`)

})
server.listen(5000)
