var express = require('express');
var router = express.Router();
const Rx = require('@reactivex/rxjs');
const fetch=require('node-fetch');



/* GET users listing. */
router.get('/', function(req, res, next) {
    const dataFetchPromise = fetch('http://jsonplaceholder.typicode.com/users');
    dataFetchPromise.then(function (data1) {
        return data1.json();
    }).then((data)=>{ res.render('users',{users:data})});// send data to the users.jade file to render it


  //res.send('respond with a resource');
});

module.exports = router;
