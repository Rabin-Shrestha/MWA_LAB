var express = require('express');
var router = express.Router();
const Rx = require('@reactivex/rxjs');
const fetch=require('node-fetch');
const allData={};


/* GET users listing. */
router.get('/', function(req, res, next) {
    //using promise
    const dataFetchPromise = fetch('http://jsonplaceholder.typicode.com/users');
    dataFetchPromise.then(function (data1) {
        return data1.json();
    }).then((data)=>{
        // data read using promisify
        allData.dataFromPromisify=data; //res.render('users',{users:data})
        //load using reactive
        loadDataUsingReactive();

    });

    //using reactive programming
    function loadDataUsingReactive()
    {
        "use strict";
        const rxPromise= fetch('http://jsonplaceholder.typicode.com/users');
        const rxObservable=Rx.Observable.fromPromise(rxPromise);
        rxObservable.subscribe( ObservableLoader,(err)=>console.log("Error occured"));

    }

    function ObservableLoader(response)
    {
        "use strict";
        const source2=Rx.Observable.fromPromise(response.json());
        source2.subscribe(data=>{
            console.log(data);
            allData.dataFromReactiveObservable=data; asyncAwait(response);
        },(err)=>{console.log("error")});
        // work with your data here})

    }
    async function asyncAwait()
    {
        "use strict";
        try{
            const promise3=fetch('http://jsonplaceholder.typicode.com/users');
            const dataPromise= await promise3;
            const data=await dataPromise.json();
            allData.dataFromAsyncAwait=data;
            res.render('users', { allData:allData, title:'User Listing Express App'});

        }
        catch(err)
        {
            console.log("Error !!"+err);
        }


    }

});

module.exports = router;
