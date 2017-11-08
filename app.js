var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

//include routes to views
var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var signup = require('./routes/signup');

//make public folder public
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', index);
app.use('/users', users);

<<<<<<< HEAD
//retrieve homepage login/signup button links  
app.get('/login', login);
app.get('/signup', signup);

=======
>>>>>>> cd4b034919e44fd12606c21d8e653de743c3c5db
app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
  if (err.status !== 404) {
    return next();
  }
<<<<<<< HEAD
  res.send(err.message || '404 Page Not Found!');
=======
  res.send(err.message || '404 Page Not Found');
>>>>>>> cd4b034919e44fd12606c21d8e653de743c3c5db
});


//displays port being used 
http.listen(process.env.PORT, function() {
  console.log(process.env.IP + ":" + process.env.PORT);
});


io.on('connection', function(socket) {
  // io.emit({'msg': 'test'})
  io.emit('chat message',"Socket.io test");
  // console.log('a user connected');
  // socket.on('chat message', function(msg) {
  //   io.emit('chat message', msg);
  // });
});