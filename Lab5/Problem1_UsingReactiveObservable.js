/**
 * Created by Rabin Shrestha on 7/2/2017.
 */
const rx=require('@reactivex/rxjs');

const source=rx.Observable.create();
function myObserver(provider)
{
    "use strict";
    provider.next("Data is being fetch form internet");



}