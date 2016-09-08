
var addTo=function(passed) {
  
  
   function add() {
        return passed + 8;
    }
  return add;

}

var d = addTo(5)();
document.write(d);




function greet(message) {
    console.log(message);
}

function greeter(name, age) {
 
    return name + ", who is " + age + " years old, says hi!";
}

// Generate the message
var message =greeter("Bob", 47);

// Pass it explicitly to greet
greet(message)


function greeter(name, age) {
    var message = name + ", who is " + age + " years old, says hi!";

    return  function greet() {
       console.log(message);
    };
  
}

// Generate the closure
var bobGreeter =new greeter("mamatha", 24);

// Use the closure
bobGreeter();





function setAlarm(message1, timeout) {

    function handle() {
        console.log(message1);
    }


    setTimeout(handle, timeout);
}

setAlarm("Wake UP!", 100);



function mainfun() {
    this.mainmessage="example about prototype functions"
}

mainfun.prototype.firstfun = function () {
  //  document.write(this.mainmessage)
}

mainfun.prototype.secondfun = function () {
    var self = this;
    setTimeout(function () {
        document.write(self.mainmessage)
    },1000)
}

var k = new mainfun();
k.firstfun();
k.secondfun();


function mainfun1() {
    var message3 = "this is close with out using namespaces";

    return {
        firstfun1: function () {
            alert(message3)
        },


        secondfun2: function () {
            setTimeout(function () {
                alert(message3)
            },100)
        }
    }
}
var n = new mainfun1();
n.firstfun1();
n.secondfun2();