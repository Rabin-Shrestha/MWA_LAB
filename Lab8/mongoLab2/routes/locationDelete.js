/**
 * Created by Rabin Shrestha on 7/5/2017.
 */
/*  Handel delete location request*/
var express = require('express');
var objectId = require('mongodb').ObjectID;
var router = express.Router();


router.post('/', function (req, res, next) {
    //res.send('respond with a resource');
    console.log("Delete operation called");
    const deleteRows=req.body.deleteBoxs;
    console.log(" TO be deleted are :" +deleteRows );

    deleteRows.forEach(function (datarow) {
            console.log(" data row is :" + datarow);
            req.db_obj.locations.remove({"_id": objectId(datarow)});
    });

    // After insertion of data deleting  the database again and sending  locationList to the client
    req.db_obj.locations.find({}).toArray(function (err, data) {
        if (err) console.dir(err);
        res.render('index', {locationList: data});
    });

});


module.exports = router;