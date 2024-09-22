const express = require('express');

const app = express();
const PORT = 3015;
const HOSTNAME = 'localhost';

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get("/about", (req, res) => {
  res.send("About page")  ;
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.listen(PORT,()=>{
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
    
})