const express = require('express');

// import the array of categories
const categories = require('./faker/TrendCategories');
// Express Initialize
const app = express();
app.use(express.json())

// pick the local port
const port = 8000;
app.listen(port,()=> {
console.log('listen port 8000');
})

// duplicate this route to make new dummy routes
app.get('/categories', (req,res)=>{
    res.json(categories);
})