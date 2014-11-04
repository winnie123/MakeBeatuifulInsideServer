/**
 * Created by Administrator on 2014/11/3.
 */
/**
 * Created by Administrator on 2014/11/3.
 */
var restify=require('restify');//restful
var bunyan=require('bynyan');//log
var server=restify.createServer(
//    {
//        name: 'myapp',
//        version: '1.0.0'
//    }
);
//server.use(restify.acceptParser(server.acceptable));
//server.use(restify.queryParser());
//server.use(restify.bodyParser());
server.get('/controller/:name', function (req, res, next) {
    res.send(req.params);
//    return next();
});
server.listen(1111,function(){
    console.log('%s listening at %s', server.name, server.url);
});