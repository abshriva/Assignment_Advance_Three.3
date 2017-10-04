// Create a Class Animal, should have a name, distance covered by and behavior of that animal:
// Class Animal {name: string; move(distance) {}; makeSound() {} ...}
// Then create 2 more class which will extend Animal class with its property and behaviour for each show the name, distance and sound.
// . For example:
// Class Tiger extends Animal {...}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Object.defineProperty(Animal.prototype, "AnimalName", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.move = function () {
    };
    Animal.prototype.makeSound = function () {
    };
    return Animal;
}());
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    // function Overriding
    Tiger.prototype.move = function () {
        console.log('Distance covered by Tiger in Km is 70Km');
    };
    // function Overriding
    Tiger.prototype.makeSound = function () {
        console.log('Sound of Tiger is roar ');
    };
    return Tiger;
}(Animal));
var Elephant = (function (_super) {
    __extends(Elephant, _super);
    function Elephant(name) {
        return _super.call(this, name) || this;
    }
    // function Overriding
    Elephant.prototype.move = function () {
        console.log('Distance covered by Elephant in Km is 20Km');
    };
    // function Overriding
    Elephant.prototype.makeSound = function () {
        console.log('Sound of Elephant is trumpet');
    };
    return Elephant;
}(Animal));
console.log('===Details of Animals====');
console.log('---------------');
var t = new Tiger('Tiger');
console.log('Animal Name: ' + t.AnimalName);
t.move();
t.makeSound();
console.log('---------------');
var e = new Elephant('Elephant');
console.log('Animal Name: ' + t.AnimalName);
e.move();
e.makeSound();
