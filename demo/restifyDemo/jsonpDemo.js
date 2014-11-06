/**
 * Created by itnew on 2014/11/6.
 */
var restify=require('restify');
var server=restify.createServer();
server.use(restify.queryParser());
server.use(restify.jsonp());
server.listen(1010,function(){
    console.log('%s listening for %s',server.name,server.url);
});

server.get('/hello/:name',function(req,res,next){
//    res.send('hello');
    res.send({'name':'hello world'});
    next();
});

