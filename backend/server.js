const express = require('express'); 
const app = express();
const port = 4000;

app.get('/', (req, res) => {     // home page;
  res.send("Welcome to home page");
});

app.get('/contact',(req,res)=>{   // contact page
res.send("welcome to contact page");

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  
});  // created server using the express