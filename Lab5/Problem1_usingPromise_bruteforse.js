/**
 * Created by Rabin Shrestha on 7/1/2017.
 */
const express = require('express');
const app = express();
const http = require('http');
const fetch = require('node-fetch');

//https://www.npmjs.com/package/node-fetch
//http://jsonplaceholder.typicode.com/users/

app.get('/users', function (request, response) {
        response.status(200);
        response.set('Content-Type', 'text/html');

        //creating the promise here :
        const dataFetchPromise = fetch('http://jsonplaceholder.typicode.com/users');
        dataFetchPromise.then(function (data1) {
            return data1.json();
        }).then(function (json) {
            response.write("List of user information");
            response.write(`<table frame=vside  border="2" title="User Listing"> `);
            for (let i = 0; i <= json.length; i++)
            {
                for (n in json[i])
                {
                 //if data element is itself a arrya object
                    let data=json[i][n];
                    let data1="";
                    if( n=='address'|| n=="company") {
                        for (let att in data)
                            data1 += "  "+att+':'+data[att];
                    }else
                    {data1=data;}
                    response.write(`<tr><td> ${n}  </td><td>`);
                    response.write(`${data1}  </td></tr>`);
                }
                response.write(`<tr  ><td colspan="2">      </td></tr>`);

            }
            response.write(`</table>`)
            response.end("Data fetch completed");
        }).catch(err => {
            console.log("The error :" + err);
        });
    }
);
app.listen(2000, () => {
    console.log('The server is running !!');
});

