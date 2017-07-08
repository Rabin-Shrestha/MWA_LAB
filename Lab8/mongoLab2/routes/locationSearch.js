/**
 * Created by Rabin Shrestha on 7/7/2017.
 */
var express = require('express');
var router = express.Router();

/* Load search page. */
router.get('/', function (req, res, next) {
    res.render('search');

});

router.post('/', function (req, res, next) {
    const name = req.body.name;
    const category = req.body.category;
    const longitude = parseFloat(req.body.longitude);
    const latitude = parseFloat(req.body.latitude);

    const db = req.db_obj;

    db.locations.createIndex({'coords': '2d'});
    db.lab8.find({
        $and: [
            {'coords': {$near: [longitude, latitude]}},
            {'name': {$regex: name, $options: 'i'}},
            {'category': {$regex: category, $options: 'i'}}
        ]
    }).limit(3).toArray(function (err, dataArray) {
        res.setHeader('Content-Type', 'application/json');
        res.send(dataArray);
    });

});

module.exports = router;