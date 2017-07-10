/**
 * Created by Rabin Shrestha on 7/10/2017.
 */
class car
{
    constructor(public name:String,public acceleration:number=0)
    {}
    honk()
    {
        console.log(`${this.name} is saying : Toooooooot !!`);

    }
    accelerate(speed: number)
    {
        this.acceleration=this.acceleration+speed;
    }
}
let car=new car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);