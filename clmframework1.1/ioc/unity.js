/**
 * Created by Administrator on 2014/11/14.
 */
var controller = null,attr=null;
var unityFactory = function (controllers, server) {
    for (var i = 0, len = controllers.length; i < len; i++) {
        controller = controllers[i]['name'];
        for(var j= 0,actionLength=controllers[i]['actions'].length;j<actionLength;j++){
//            if( typeof controllers[i]['actions'][j]==='function'){
                console.log('method name is %s', controllers[i]['actions'][j]);
//            }
        }
    }
};

exports.unityFactory = unityFactory;