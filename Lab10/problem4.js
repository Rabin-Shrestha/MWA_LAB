/**
 * Created by Rabin Shrestha on 7/10/2017.
 */
var person = (function () {
    function person() {
        this._firstName = "";
    }
    Object.defineProperty(person.prototype, "FirstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return person;
}());
var assad = new person();
assad.FirstName = "assad";
console.log(assad.FirstName);
