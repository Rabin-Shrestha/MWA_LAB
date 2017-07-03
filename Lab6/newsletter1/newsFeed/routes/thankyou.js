/**
 * Created by Rabin Shrestha on 7/3/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('thankyouView', { EMAIL: 'Express' });
});

module.exports = router;
