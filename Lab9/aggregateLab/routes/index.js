var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {

 var db=req.db_obj;
    /*****************************************
     *1. Find all the zip codes in Iowa state.
     ******************************************/
    console.log('1. Find all the zip codes in Iowa state.\n');
    db.states.aggregate([
        {$match: {'state': 'IA'}},
        {$project: {'_id': 0, 'zipcode': '$_id', 'state': 1}}
    ], function (err, data) {
        console.log(data);
    });



    /*****************************************
     *2. Find all the zip codes with a population less than 1000.
     ******************************************/
    console.log('*2. Find all the zip codes with a population less than 1000.\n');
     db.states.aggregate([
     {$match: {'pop': {$lt: 1000}}},
     {$project: {'_id': 0, 'zipcode': '$_id', 'pop': 1}}
     ], function (err, data) {
         console.log(data);
     });


     /*****************************************
     *3. Find all the cities that have more than one zip code, sort the results based by state and city name.
     ******************************************/
     console.log('Qno3: Find all the cities that have more than one zip code, sort the results based by state and city name.\n');
    db.states.aggregate([
        {$group: {_id: {'city': '$city', 'state': '$state'}, 'num_zipcodes': {$sum: 1}}},
        {$match: {'num_zipcodes': {$gt: 1}}},
        {$project: {'_id': 0, 'city': '$_id.city', 'state': '$_id.state', 'num_zipcodes': 1}},
        {$sort: {'state': 1, 'city': 1}}
    ], function (err, data) {
        console.log(data);
    });


    /*****************************************
     *4. Display the least populated city in each state.
     ******************************************/
    console.log('4. Display the least populated city in each state.\n');
    db.states.aggregate([
        {$group: {'_id': {'city': '$city', 'state': '$state'}, 'population': {$sum: '$pop'}}},
        {$sort: {'population': 1}},
        {$group: {'_id': '$_id.state', 'city': {$first: '$_id.city'}, 'population': {$first: '$population'}}},
        {$sort: {'_id': 1}}
    ], function (err, data) {
        console.log(data);
    });


  res.render('index', { title: 'Express' });
});

module.exports = router;
