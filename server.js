// 服务器端支持干净的URL，利用node的express框架123
const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.get('/post/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = {title:req.params.id}
    app.render(req,res,actualPage,queryParams)
  });
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
}).catch((ex)=>{
    console.error(ex,statck)
    process.exit(1)
})
