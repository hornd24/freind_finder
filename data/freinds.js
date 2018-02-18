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


var express = require("express");

var bodyParser = require("body-parser");
var path = require("path");
var mysql = require('mysql');

var routs = require('./routing/htmlroutes');
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
module.exports=function(app){


var newfreind = [];
var friendsList = [{
        name: 'Eric Cartman',
        photo: 'https://vignette.wikia.nocookie.net/southpark/images/5/58/Cartman-no-hat-0.png/revision/latest/scale-to-width-down/310?cb=20170725145528',
        questions: [2, 5, 4, 3, 1, 3, 5, 4, 5, 1]
    },
    {
        name: 'Butters Stotch',
        photo: 'https://vignette.wikia.nocookie.net/southpark/images/0/06/ButtersStotch.png/revision/latest/scale-to-width-down/310?cb=20170322004353',
        questions: [5, 5, 5, 5, 3, 2, 4, 5, 3, 2, 5]
    }, {
        name: 'Randy Marsh',
        photo: 'https://static.comicvine.com/uploads/original/11125/111254686/5113188-0906127496-CHKON.jpg',
        questions: [5, 5, 5, 3, 2, 4, 5, 3, 4, 5]

    },
    {
        name: 'Stan Marsh',
        photo: 'https://vignette4.wikia.nocookie.net/southpark/images/2/2a/1105_chasedbyrabbits.JPG/revision/latest?cb=20070901123200',
        questions: [5, 3, 4, 3, 4, 3, 5, 3, 5, 4]
    },
]
}
app.post("/api/add", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var answers = req.body;
    // console.log(answers)




    newfreind.push(answers);


    for (i = 0; i < newfreind.length; i++) {
        // console.log(newfreind[i].questions[i])
        if (answers.name == newfreind[i].name) {
            var test = newfreind[i].questions.map(Number);
            // console.log(test)
            //   console.log(friendsList[0].questions)
            for (b = 0; b < friendsList.length; b++) {
                // console.log(b)
                for (j = 0; j < friendsList[i].questions.length; j++) {
                    sum = 0;
                    
                    //    console.log(friendsList[j].questions)
                    sum += test[j] -friendsList[b].questions[j]
                    // console.log(typeof sum)
                    // console.log(typeof friendsList[i].questions);
                    // console.log(typeof test[0])
                    var sumabs = Math.abs(sum)
                  

                }

                console.log(sumabs)
            }
        }
    }

    res.json(answers);
});