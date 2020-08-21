var express = require('express');
var router = express.Router();


const mailRouter = require('../components/mail/router');

/* GET home page. */
router.get('/ping', function(req, res, next) {
  res.send({
    reply: 'pong'
  });
});


router.use('/mail', mailRouter);


module.exports = router;
