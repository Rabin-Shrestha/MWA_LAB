/**
 * Created by Rabin Shrestha on 7/5/2017.
 */

var express = require('express');
var ObjectId = require('mongodb').ObjectID;
var router = express.Router();

router.post('/', function (req, res, next) {

    const db=req.db_obj;
    const id = req.body.upId;

    const obj = {
        name: req.body.upName,
        category: req.body.upType,
        lat: req.body.upLat,
        long: req.body.upLong
    };

    db.locations.update({_id: ObjectId(id)}, obj, function (err, data) {
        res.redirect('/');
    });

    // db.locations.find({}).toArray(function (err,data)
    // {
    //     console.log(" retrived data is "+JSON.stringify(data));
    //     res.render('index', {locationList: data});
    // });

});



module.exports = router;
