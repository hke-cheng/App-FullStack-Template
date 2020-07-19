// server.js
const express = require("express");
const next = require('next');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  //step 1: initiate express and assign a port
  const server = express();

  //step 3: create customized route, the order is important
  // server.get("/pagesubmit", (req,res)=>{
  //   app.render(req,res,"/",{query})
  // });

  //step 2: re-create the functionality provided by next.js
  server.get("*",(req,res)=>{
    return handle(req,res);
  });


  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Now serving on localhost: 3000")
  })
  
});