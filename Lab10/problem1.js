/**
 * Created by Rabin Shrestha on 7/10/2017.
 */
var BankAccount = (function () {
    function BankAccount() {
        this.money = 200;
    }
    BankAccount.prototype.deposit = function (value) { this.money += value; };
    return BankAccount;
}());
var mySelf = (function () {
    function mySelf() {
        this.name = "Asaad";
        this.bankAccount = new BankAccount();
        this.hobbies = ["Violin", "Cooking"];
    }
    return mySelf;
}());
var myself = new mySelf();
myself.bankAccount.deposit(3000);
console.log(myself);
