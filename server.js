var express = require('express'),
    logger = require('morgan')('dev'),
    server = express();

    server.use(express.static(__dirname+'/public'));
    server.use(logger);//where to find the folder;

    server.get('/',function(req,res){
      res.sendFile('public/html/index.html',{root:__dirname});
    });//root is where to look for the folder, narvigate people

server.listen(8080,function(){
  console.log('Now listening on port 8080');
});
