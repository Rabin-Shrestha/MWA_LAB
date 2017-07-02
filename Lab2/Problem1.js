/**
 * Created by Rabin Shrestha on 6/28/2017.
 */
//Add two  new function odd and even in  to Array object which returns all odd or even numbers in array

Array.prototype.even=function () {
    let arr=this;
    let resultEvenArray=[];
    for(let num of this)
    {
        if(num%2==0)resultEvenArray.push(num);
    }
    return resultEvenArray;
};
Array.prototype.odd=function () {
    let arr=this;
    let resultOddArray=[];
    for(let num of this)
    {
        if(num%2!=0)resultOddArray.push(num);
    }
    return resultOddArray;
};

console.log([1,2,3,4,5,6,7,8].even());

console.log([1,2,3,4,5,6,7,8].odd());