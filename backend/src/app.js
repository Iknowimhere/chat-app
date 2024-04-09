const express = require("express");
const data = require("../data/data");
const cors = require("cors");

let app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/chats", (req, res) => {
  res.send(data);
});

// app.get("/chats/:id",(req,res)=>{
//     res.send(data)
// })

module.exports = app;
