
const express = require('express');
const router = express.Router()
const {getMessage,updateMessage,addMessage,deleteMessage,getMessageById} = require('../Controllers/inboxController')



router.get('/', getMessage)

router.get('/:id', getMessageById)

router.post('/',addMessage)

router.delete('/:id', deleteMessage)

router.patch('/:id', updateMessage)

module.exports = router;

