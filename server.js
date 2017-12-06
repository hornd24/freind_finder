var express = require("express");

var bodyParser = require("body-parser");
var path = require("path");
var mysql = require('mysql');

var routs = require('./routing/htmlroutes');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "public/index.html"));
// });
routs(app);


var compareNum=[];
var compare=[];
var newfreind = [];
var friendsList = [{
        name: 'Eric Cartman',
        photo: 'https://vignette.wikia.nocookie.net/southpark/images/5/58/Cartman-no-hat-0.png/revision/latest/scale-to-width-down/310?cb=20170725145528',
        questions: [2, 5, 4, 3, 1, 3, 5, 4, 5, 1]
    },
    {name: 'Stan Marsh',
    photo: 'https://vignette4.wikia.nocookie.net/southpark/images/2/2a/1105_chasedbyrabbits.JPG/revision/latest?cb=20070901123200',
    questions: [5, 3, 4, 3, 4, 3, 5, 3, 5, 4]
       
    }, {
        name: 'Randy Marsh',
        photo: 'https://static.comicvine.com/uploads/original/11125/111254686/5113188-0906127496-CHKON.jpg',
        questions: [5, 5, 5, 3, 2, 4, 5, 3, 4, 5]

    },
    {name: 'Butters Stotch',
    photo: 'https://vignette.wikia.nocookie.net/southpark/images/0/06/ButtersStotch.png/revision/latest/scale-to-width-down/310?cb=20170322004353',
    questions:  [5, 5, 5, 5, 3, 2, 4, 5, 3, 2]
        
    },
]
// [5, 5, 5, 5, 3, 2, 4, 5, 3, 2, 5]
app.post("/api/add", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var answers = req.body;
    // console.log(answers)


console.log(friendsList.length)
function Comparing(name,link,sum){
    this.freindNam=name;
    this.urlLink=link;
    this.math=sum;
}

    newfreind.push(answers);
   
// console.log(friendsList[1]);

var perfectName = '';
var perfectPhoto = '';


    for (i = 0; i < newfreind.length; i++) {
        // console.log(newfreind[i].questions[i])
        if (answers.name == newfreind[i].name) {
            var avdata = newfreind[i].questions.map(Number);
            newfreind.splice('')
  
            // console.log(test)
                 }         //   console.log(friendsList[0].questions)
            for (b = 0; b < friendsList.length; b++) {
                // console.log(b)
            //   console.log(  friendsList[b])
            sum = 0;
                for (j = 0; j < friendsList[b].questions.length; j++) {
                   
                
                    //    console.log(friendsList[j].questions)
                    sum +=Math.abs(avdata[j] -friendsList[b].questions[j]);
                //    console.log(avdata[j])
                    // console.log(typeof sum)
                    // console.log(typeof friendsList[i].questions);
                    // console.log(typeof test[0])
                   
                }
                // console.log(friendsList)
              
                
          var  comparing= new Comparing(friendsList[b].name,friendsList[b].photo,sum)

          compare.push(comparing);    
             
         

                
            }
            
        }
        console.log(compare)
        
        var match=null;
        
        for(var i=0;i<compare.length;i++){
            if(!match || match.math> compare[i].math){
            // if(min>compare[i].math){
                // min=compare[i].math;
                match=compare[i]


            }
        }
        compare.splice('')
        sum=0;

        console.log(match)
        perfectName=match.freindNam;
        perfectPhoto=match.urlLink
    //    console.log(compare)
  
// for(var i=0;i<compare.length;i++){
//    compareNum.push(compare[i].math);

// var test =Math.min(compareNum[i])

// }
// // var testing= Math.min(compareNum);
// console.log(compareNum)
// console.log(test)

// compare.splice('');

// console.log(testing);
console.log('hi')
    res.json({perfectName,perfectPhoto});
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});