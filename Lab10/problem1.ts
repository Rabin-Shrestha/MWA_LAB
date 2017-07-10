/**
 * Created by Rabin Shrestha on 7/10/2017.
 */
class BankAccount
{    money: number=200;
    deposit(value:number):void{this.money+=value;}
}
class mySelf {
    name: string = "Asaad";
    bankAccount: BankAccount = new BankAccount();
    hobbies: string[] = ["Violin", "Cooking"];
}


let myself= new mySelf();
myself.bankAccount.deposit(3000);
console.log(myself);

