/**
 * Created by Administrator on 2014/11/5.
 */
var restify=require('restify');
var server= restify.createServer();
var jsonpFormatter = require('restify-formatter-jsonp');
server.listen(1024,function(){
    console.log('%s listen at %s',server.name,server.url);
});

server.use(jsonpFormatter);

server.get('/hello/:name', function (req, res, next) {
    res.send(req.params);
    return next();
});

////AOP filter
//server.use(function(req,res,next){
//    //权限验证
//    next();
//});