//factory patterns

var facrotyparent = function (name,age,city) {
    var test = {};

    test.name = name;
    test.age = age;
    test.city = city;

    test.factorychild = function () {
      
     // document.write(test.name + "," + test.age + "," + test.city);

    }
    return test;
}

var f = facrotyparent('mamtha', 24, 'kurnool');
var f1 = facrotyparent('mamtha1', 24, 'kurnool1')
f.factorychild();
f1.factorychild();

//constructor patterns

function constructorparent(name,age,city) {
    this.name = name;
    this.age = age;
    this.city = city;

    this.constructorchild = function () {
     //   document.write(this.name + "," + this.age + "," + this.age);
    }
    return this;
}

var c = new constructorparent('venkat', 24, 'vizag')
var c1 = new constructorparent('venkat1', 24, 'vizag1');
c.constructorchild();
c1.constructorchild();

//prototype patterns






//denamic prototypattern

function denamicprototypeparent(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

    if (typeof printchild !== 'function') {
        denamicprototypeparent.prototype.printchild = function () {
            document.write(this.name + " ," + this.age + "," + this.city)
        }
    }

}


var d = new denamicprototypeparent("bekkem", 24, 'nandyala');
var d1 = new denamicprototypeparent("bekkem1", 24, 'nadyala1');
d.printchild();
d1.printchild()