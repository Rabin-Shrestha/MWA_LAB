/**
 * Created by Rabin Shrestha on 7/10/2017.
 */
class baseObject
{
    constructor(public weidth:number=0,public length: number=0)
    {}

}

class rectangle extends baseObject
{
    constructor()
    {
        super();
        this.weidth=5;
        this.length=2;
    }
    calcsize()
    {
        return this.length*this.weidth;
    }
}

console.log(new rectangle().calcsize());