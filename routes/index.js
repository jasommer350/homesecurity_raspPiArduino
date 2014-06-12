//var express = require('express');
//var router = express.Router();
module.exports = exports = function(app, router) { 
/* GET home page. */

var iHomeSecurityRoute = router.route('/ihomesecurity/:onoff?');

app.get('/', function(req, res) {
    res.render('index', { title: 'iHome Security', subtitle: 'your iHome Security Portal' });
});

iHomeSecurityRoute.get(function(req, res) {
    res.render('index', { title: 'iHome Security', subtitle: 'your iHome Security Portal', lastsysstatus:app.locals.systemStatus });
});

iHomeSecurityRoute.put(function(req, res) {
    var msg = new Buffer(req.params.onoff);
    app.locals.serialPortObj.write(msg, function() {
      app.locals.systemStatus = req.params.onoff;
      //console.log('Message Sent status is: ' + app.locals.systemStatus);
    });
    app.emit('event:reset_MotionCounter');
    res.send('updated');
});

//.all(function(req, res, next) {
    //Used to make sure the app.locals.statusofSystem is synced up correctly
 //   var msg = new Buffer('s');
//    app.locals.serialPortObj.write(msg, function() {
  //    console.log('Message Sent');
 //   });
//    next();
//})
};
