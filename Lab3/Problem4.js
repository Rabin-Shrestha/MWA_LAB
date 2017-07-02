/**
 * Created by Rabin Shrestha on 6/28/2017.
 */
// Zipping and unzipping file
var fs=require('fs'); // Loading FileSystem module as variable
var zlib=require('zlib'); // Loading zlib module as variable
/*
============================
 For Zipping the data File
=============================
var zipper=zlib.createGzip(); //gipper Object
var myDataStreamer= fs.createReadStream(__dirname+'/DataFile.txt'); // source file to compress
var zippedFile=fs.createWriteStream(__dirname+'/CompressedData.gz'); // destination file to write on
myDataStreamer.pipe(zipper).pipe(zippedFile);

*/

/*
==================================
For Unzipping the compressed data
===================================
*/
const unzipper=zlib.createGunzip(); // unzipper object
const myDataStreamer2=fs.createReadStream(__dirname+'/CompressedData.gz');
const unzippedFile=fs.createWriteStream(__dirname+'/unZippedFile.txt');
myDataStreamer2.pipe(unzipper).pipe(unzippedFile);