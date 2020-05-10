var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'HelloWorld', 'coolMethod', [arg0]);
};


module.exports.sayHello = function (arg0, success, error) {
    exec(success, error, 'HelloWorld', 'sayHello', [arg0]);
}