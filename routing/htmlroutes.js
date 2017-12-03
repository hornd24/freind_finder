
var express = require("express");


    var app = express();
    
    module.exports= function(){
        var express = require("express");
        
        
            var app = express();
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
 
    
    
    }