const express = require("express");
const app = express();
app.get("/",(req,res)=>{

    res.send('This is my simple nodejs app');
});

app.listen(3000,()=>{
    console.log("Running nodejs app on port 3000");
    
})


