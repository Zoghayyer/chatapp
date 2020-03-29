const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shortid = require('shortid');
const database = require('./database');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const router = express.Router();

// Enable cors
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// logging middleware
router.use(function (req, res, next) {
  console.log('\nReceived:', {
    url: req.originalUrl,
    body: req.body,
    query: req.query
  });
  next();
})

// Helper functions
const findRoom = (roomId) => {
  const room = database.find((room) => room.id === parseInt(roomId));
  if (room === undefined) {
    return {
      error: `a room with id ${roomId} does not exist`
    }
  }
  return room;
};

const logUser = (room, username) => {
  const userNotLogged = !room.users.find((user) => user === username);

  if (userNotLogged) {
    room.users.push(username);
  }
};

// API Routes
router.get('/rooms', function (req, res) {
  const rooms = database.map((room) => {
    return {
      name: room.name,
      id: room.id
    }
  });
  console.log('Response:', rooms);
  res.json(rooms);
});

router.get('/rooms/:roomId', function (req, res) {
  let room = findRoom(req.params.roomId);
  if (room.error) {
    console.log('Response:', room);
    res.json(room);
  } else {
    console.log('Response:', {
      name: room.name,
      id: room.id,
      users: room.users
    });
    res.json({
      name: room.name,
      id: room.id,
      users: room.users
    });
  }
})

router.route('/rooms/:roomId/messages')
  .get(function (req, res) {
    let room = findRoom(req.params.roomId);
    if (room.error) {
      console.log('Response:', room);
      res.json(room);
    } else {
      console.log('Response:', room.messages);
      res.json(room.messages);
    }
  })
  .post(function (req, res) {
    let room = findRoom(req.params.roomId);
    if (room.error) {
      console.log('Response:', room);
      res.json(room);
    } else if (!req.body.name || !req.body.message || !req.body.userId) {
      console.log(
        'Response:', 
        {
          error: 'request missing name or message'
        }
      );
      res.json({
        error: 'request missing name or message'
      });
    } else {
      logUser(room, req.body.name);
      const messageObj = {
        name: req.body.name,
        message: req.body.message,
        userId: req.body.userId,
        id: shortid.generate()
      };
      room.messages.push(messageObj);
      console.log(
        'Response:', 
        {
          message: 'OK!'
        }
      );
      res.json(messageObj);
    }
  });

app.use('/api', router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);
