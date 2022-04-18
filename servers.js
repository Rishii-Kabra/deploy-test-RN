const express = require("express");
const Quote = require('inspirational-quotes');
const app = express();
const path = require('path')


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get("/api", function(req, res) {
    res.send(Quote.getQuote());
});



let port = process.env.PORT;
if(port == null || port == "") {
    port = 5000;
}


app.listen(port, function() {
    console.log("Server started successfully");
});