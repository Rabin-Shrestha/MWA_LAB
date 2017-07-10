/**
 * Created by Rabin Shrestha on 7/10/2017.
 */
var car = (function () {
    function car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
    }
    car.prototype.honk = function () {
        console.log(this.name + " is saying : Toooooooot !!");
    };
    car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return car;
}());
var car = new car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);
