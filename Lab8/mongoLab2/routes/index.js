var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

   const db=req.db_obj;
    db.locations.find({}).toArray(function (err,data)
    {
        console.log(" retrived data is "+JSON.stringify(data));
        res.render('index', {locationList: data});
    });

});



module.exports = router;
