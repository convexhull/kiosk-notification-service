const express = require('express');
const { Router } = require('express');



const mailController = require('./controller');


const router = express.Router();



router
    .post('/sendMail', mailController.sendMail)


module.exports = router;