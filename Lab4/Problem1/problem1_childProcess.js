/**
 * Created by Rabin Shrestha on 6/30/2017.
 */

const {promisify} = require('util');
const fs = require('fs');
process.on('message', (path) => {

    if(path==null|| path==undefined )process.send("No such file found");


    const asyncreader = promisify(fs.readFile);
    asyncreader(path)
        .then((returnedData) => {
            console.log('Child Process completed reading data...!!');
            process.send(returnedData.toString()); // returning result back to main process
        })
        .catch(
            (err) => { console.log("Error occured :" + err);   }    );
});