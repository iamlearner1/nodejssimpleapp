const express = require("express");
const app = express();
app.get("/",(req,res)=>{

    res.send('This is my simple nodejs app');
});

app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});

app.get("/message",()=>{
  
  res.send("this is the message endpoint");
})

