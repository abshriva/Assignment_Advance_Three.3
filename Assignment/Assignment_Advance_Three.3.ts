
// Create a Class Animal, should have a name, distance covered by and behavior of that animal:
// Class Animal {name: string; move(distance) {}; makeSound() {} ...}
// Then create 2 more class which will extend Animal class with its property and behaviour for each show the name, distance and sound.
// . For example:
// Class Tiger extends Animal {...}

class Animal{
    constructor(public name:string)
    {

    }

     public set AnimalName(value:string)
    {
     this.name = value;
    }
    public get AnimalName():string
    {
        return this.name;
    }

    public move():void{
       
    }

    public makeSound():void
    {
       
    }

}

class Tiger extends Animal
{
    constructor(name:string)
    {
       super(name);
    }

    // function Overriding
     public move():void{
        console.log('Distance covered by Tiger in Km is 70Km')
    }
 // function Overriding
    public makeSound():void
    {
        console.log('Sound of Tiger is roar ')
    }

}

class Elephant extends Animal
{
     constructor(name:string)
    {
       super(name);
    }
     // function Overriding
     public move():void{
        console.log('Distance covered by Elephant in Km is 20Km')
    }
 // function Overriding
    public makeSound():void
    {
        console.log('Sound of Elephant is trumpet')
    }

}

console.log('===Details of Animals====')
console.log('---------------')
var t = new Tiger('Tiger');
console.log('Animal Name: '+t.AnimalName);
t.move();
t.makeSound();
console.log('---------------')
var e = new Elephant('Elephant');
console.log('Animal Name: '+t.AnimalName);
e.move();
e.makeSound();


