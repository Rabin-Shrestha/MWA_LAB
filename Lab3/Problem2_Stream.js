/**
 * Created by Rabin Shrestha on 6/28/2017.
 */
// This uses the streaming technique to load the Image
var http=require('http');
var fs=require('fs');

var server=http.createServer((req,res)=>{
    "use strict";
    var img=fs.createReadStream('./bigImage.jpg').pipe(res);
});
server.listen(5556);