const express = require("express");
const server = express();

console.log(__dirname)

server.set('views', __dirname + '/views');
server.set('view engine', "ejs")
server.use('/static', express.static(__dirname + '/public'));

server.get('/', (req,res) => {
    res.render("index");
});

server.post('/', (req,res) => {
    res.send(res);
});



server.listen(3000);

module.exports = server; 
