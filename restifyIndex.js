/**
 * Created by itnew on 2014/11/3.
 */
var restify =require('restify');
var server = restify.createServer({
    name: 'mbi',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/mbi/:name', function (req, res, next) {
    console.log(res.render.toString());
    res.render('views/index.html',{});
//    return next();

//    res.write('hello world');
//    res.send('hello world');
});

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});