/**
 * Created by Rabin Shrestha on 6/28/2017.
 */
// converts the domain name to equivalent IP address
const dns=require('dns');
const ipaddress=dns.resolve4('www.mum.edu',(error,address)=>
{
    console.error(error);
    console.log(address);
    return address
});

// console.log(ipaddress,);