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
            response.write(`<tr><th> Id  </th><th> Name  </th><th> UserName  </th><th> Email  </th><th> CITY  </th><th> Zip Code  </th><th> Latitude  </th><th> longitude  </th><th> Website  </th></tr>`);

            for (n of json) {
                response.write(`<tr>
                              <td> ${n.id}  </td>
                              <td> ${n.name}  </td>
                              <td> ${n.username}  </td>
                              <td> ${n.email}  </td>
                              <td> ${n.address.city}  </td>
                              <td> ${n.address.zipcode}  </td>
                              <td> ${n.address.geo.lat}  </td>
                              <td> ${n.address.geo.lng}  </td>
                              <td> ${n.website}  </td>                              
                              </tr>`);
            }
            response.write(`</table>`)
            response.end("Data fetch completed");
        }).catch(err => {
            console.log("Cant fetch the Data form server :" + err);
        });
    }
);
app.listen(2000, () => {
    console.log('The server is running !!');
});

