// import codeEvaluate function
var codeEvaluate = require('../codeEvaluate');

// ================================================
// handleMessage --- ?????
exports.handleMessage = function(socket, count) {
  socket.on('message', function (message) {
    socket.emit("existingClientCount", count-1);
    //socket.in('hardRoom').emit('messageReceived', message);
  });
};

// ================================================
// handleJoin - broadcast users that a new users has joined to room
exports.handleJoin = function(socket, count) {
  socket.on('join', function (username) {
    socket.emit("joinMessage", 'you have joined the room');                 // private message
    socket.broadcast.emit('joinMessage', username+' has joined the room');  // all except user
  });
};

// ================================================
// handle getProblem - provide user a problem prompt
var fakeProblem = {
  1: 'write function that returns false',
  2: 'write function that returns false'
};
exports.handleGetProblem = function(socket) {
  socket.on('getProblem', function(problemID) {
    socket.emit('sendProblem', fakeProblem[problemID]);
  });
};

// ================================================
// handle submit solution (Yoshi still working)
exports.handleSubmitSolution = function(socket) {
  // handle user's submitted solution
  socket.on('submitSoln', function (code) {
    console.log('handleSubmitSolution')
    console.log(code)
    console.log(socket.id)

    // emit solutionResult event with the result
    var result = 'pass';
    socket.emit('solutionResult', result);
    socket.broadcast.emit('solutionResult', result);
    // socket.to(socket.id).emit('solutionResult', 'for your eyes only');
    // socket.to(socket.id).emit('solutionResult', result);
  });

};

// ================================================
// live feed
exports.handleLiveFee = function(socket) {

};

// ================================================
// close
exports.closeSocket = function(socket) {

};
