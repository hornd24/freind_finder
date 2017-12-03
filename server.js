var express = require("express");

var bodyParser = require("body-parser");
var path = require("path");
var mysql      = require('mysql');

var routs =require('./routing/htmlroutes');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));
  });

  var friendsList=[{ 
    name:'Eric Cartman',
photo:'https://vignette.wikia.nocookie.net/southpark/images/5/58/Cartman-no-hat-0.png/revision/latest/scale-to-width-down/310?cb=20170725145528',
questions:[2,5,4,3,1,3,5,4,5,1]
},
{name:'Butters Stotch',
photo:'https://vignette.wikia.nocookie.net/southpark/images/0/06/ButtersStotch.png/revision/latest/scale-to-width-down/310?cb=20170322004353',
questions:[5,5,5,5,3,2,4,5,3,2,5]
},{
    name:'Randy Marsh',
    photo:'https://static.comicvine.com/uploads/original/11125/111254686/5113188-0906127496-CHKON.jpg',
    questions:[5,5,5,3,2,4,5,3,4,5]

},
{
    name:'Stan Marsh',
    photo:'https://vignette4.wikia.nocookie.net/southpark/images/2/2a/1105_chasedbyrabbits.JPG/revision/latest?cb=20070901123200',
    questions:[5,3,4,3,4,3,5,3,5,4]
},
]

  app.post("/api/add", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var answers= req.body;
  console.log(answers.questions)
  
    console.log(answers);
  
    friendsList.push(answers);
    res.json(answers);
  });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});