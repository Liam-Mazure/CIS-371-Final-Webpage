const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3001


app.get("/", (req, res) =>{
    res.send("Howdy Liam");
});


app.listen(port, () => {
    console.log(`running on port ${port}`);
});