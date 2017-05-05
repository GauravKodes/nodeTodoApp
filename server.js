var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}))

//Connecting to mongo Db Client
const MongoClient = require('mongodb').MongoClient
var db;
MongoClient.connect('mongodb://gaurav:password@ds115071.mlab.com:15071/gaurav', (err, database) => {
  
    if (err) { return console.log(err); }
    else  {
    db = database;
    app.listen(process.env.PORT || 3000,function() {
    var port = process.env.PORT || 3000;
           console.log('Server Started !!',port);
           })
    }
})

app.get('/',(req,res) => {
  /* res.send('Hello World');*/
  /*res.render('Hello World');*/
    res.sendFile(__dirname + '/index.html');
    
})

app.post('/quotes', (req, res) => {
  console.log(req.body);
})



