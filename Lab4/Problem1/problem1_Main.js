/**
 * Created by Rabin Shrestha on 6/30/2017.
 */
const http=require('http');
const  url =require('url');
const fs=require('fs');
const {fork}=require('child_process');
const server=http.createServer();
//http://localhost:4000/?url=file.txt
server.on('request',(req,res)=>requestHandler(req,res));
server.listen(4000);


function requestHandler(request, response){
    "use strict";
    console.log(`Request handler called .....!!`);
    const filePath=url.parse(request.url,true).query.url;
    console.log(`File requested is : ${filePath} `);
    const childProcess=fork('problem1_childProcess.js');
    childProcess.send(filePath);
    childProcess.on('message',(resultData)=>{ response.write(resultData); response.end("File Read completed !!")})
}
