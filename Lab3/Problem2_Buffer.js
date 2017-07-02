/**
 * Created by Rabin Shrestha on 6/28/2017.
 */
// this will use buffering technique to load the image
var http=require('http');
var fs=require('fs');

var server=http.createServer();
server.on('request',function (req,res) {
    fs.readFile('./bigImage.jpg',(err,data)=>{if(err)throw err;res.end(data);})
});
server.listen(5555);