const express = require('express');
const router = express.Router();
const messagesCtrl = require('../../controllers/messages')


router.post('/newmessage', messagesCtrl.newMessage);
router.post('/newpost', messagesCtrl.newPost);
router.get('/getmessages/:id', messagesCtrl.getMessages);
router.get('/getposts/:id', messagesCtrl.getPosts);


module.exports = router;