/**
 * Created by Administrator on 2014/11/13.
 */
var unity=require("./ioc/unity");
var fs=require("fs");
//controller路径
var normalizedPath = (__dirname+"/controller");
//加载所有controller
var initRoute=function() {
    var i= 0,len= 0,controller=null;
    fs.readdir(normalizedPath, function (err, files) {
        if(err){
            console.log(err.message);
            throw err;
        }
        var controllers=[],actions=null;
        //load每个controller
        for(i= 0,len=files.length;i<len;i++){
            console.log('file:%s',files[i]);
            controller= require("./controller/" + files[i]);
            actions=[];
            for(var attr in controller){
                if(controller.hasOwnProperty(attr)){
                    actions.push(attr);
                }
            }
            controllers.push({'name':files[i],'actions':actions});
        }
        //设置路由规则
        unity.unityFactory(controllers);
    })
};

exports.initRoute=initRoute;