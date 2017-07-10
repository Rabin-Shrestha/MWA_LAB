/**
 * Created by Rabin Shrestha on 7/10/2017.
 */
class person
{
    _firstName:String="";
    get FirstName()
    {
        return this._firstName;
    }
    set FirstName(value:String)
    {
        this._firstName=value.toUpperCase();
    }

}

let assad=new person();
assad.FirstName="assad";
console.log(assad.FirstName);