/**
 * Created by Rabin Shrestha on 6/28/2017.
 */
'use strict'
// reading the events module in variable so that we could use it for extending the class
let EventEmmitter1=require("events");
class  Clock extends EventEmmitter1
{
    // we nee constructor for initializing the superclass
    constructor()
    {
        super();
        // to call self emit function we need selfPattern
        let self=this;
        // Emit() function will be called in interval of 1 sec
      let tiker=  setInterval(()=>{self.emit('tick')},1000);
        clearInterval('tiker', 10000);
    }
}

let myClock=new Clock();
myClock.on('tick',()=>{console.log("Wooohooo !!")});
