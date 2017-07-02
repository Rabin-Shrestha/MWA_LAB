/**
 * Created by Rabin Shrestha on 7/2/2017.
 */
const Rx = require('@reactivex/rxjs');
const fetch=require('node-fetch');

const source=Rx.Observable.create(myObserver);

function myObserver(observer)
{
    "use strict";
    const dataFetcher = fetch('http://jsonplaceholder.typicode.com/users');
    dataFetcher.then(function (data1)
    {
    for(let dataRow of data1)
    {
        observer.next(data1);
    }

    });

}
const subscriber=source.subscribe(
    (row)=>{console.log(
        row.id+
        row.name+
            row.username+
            row.email+
            row.address.city+
            row.address.zipcode+
            row.address.geo.lat+
            row.address.geo.lgn+
            row.website
    );},
    ()=>{},
    ()=>{}
)