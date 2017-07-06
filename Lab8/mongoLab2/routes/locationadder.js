/**
 * Created by Rabin Shrestha on 7/5/2017.
 */
/*  Handel new location add request*/
var express = require('express');
var router = express.Router();
var db;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {locationList: []});
});

router.post('/', function (req, res, next) {
    //res.send('respond with a resource');
    console.log("Post operation called");
    const name = req.body.name;
    const type = req.body.type;
    const lat = req.body.lat;
    const long = req.body.long;
    req.db_obj.locations.insert({'name': name, 'category': type, lat: lat, long: long});
    console.log("Inserted new record :" + JSON.stringify({'name': name, 'category': type, lat: lat, long: long}));

    // After insertion of data redading the database again and sending  locationList to the client
    req.db_obj.locations.find({}).toArray(function (err, data) {
        if (err) console.dir(err);
        res.render('index', {locationList: data});
    });

});


module.exports = router;