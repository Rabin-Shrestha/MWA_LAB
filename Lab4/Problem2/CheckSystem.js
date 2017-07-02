/**
 * Created by Rabin Shrestha on 6/30/2017.
 */
const os = require('os');
const Rx = require('@reactivex/rxjs');

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus().length);
//=====================================
// Problem2 :
//=====================================
console.log("### using normal way ###");
console.log("Checking your system....!!")
if(os.cpus().length<2){
    console.log("Processor is not Supported!");}
else if(os.totalmem()<2e+9){
   console.log("This app needs at least at least 2GB of RAM !");
}else{
    console.log("System is checked successfully");
}

//=====================================
// Problem2 : Using Observable
//=====================================
console.log("\n### using Observable way ###");

 const source = Rx.Observable.create(function (observer) {
 observer.next("Checking your system!");
 if(os.cpus().length<2){
 observer.next("Processor is not Supported!");
 }
 else if(os.totalmem()<2e+9){
 observer.next("Your System requires at least 2GB!");
 }else{
 observer.next("System is checked successfully");
 }
 });

 // subscription of Observable : i.e reading and process of provided data from observable
 const subscription = source.subscribe(
     (x)=>{console.log(x)}
     ,(err)=> console.error(err)
     ,(info)=>{console.info(info);}
     );