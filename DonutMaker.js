document.getElementById("alert").addEventListener("click",
console.log("clicked"))
const some_action = () => {
  console.log("clicked")
}
document.getElementById("alert").addEventListener("click", some_action);


let donuts = 0;
const container = (document.querySelector('.container').innerText =
  'mmmmmmmmm doughnuts.... ahhhhhhh!') ;

var donutCount = document.getElementById("counter");
document.getElementById("alert").addEventListener("click", makeDonut);

function makeDonut() {
  donuts += 1;
  console.log(donuts)
  donutCount.innerHTML = donuts
}

// autoclicker functions
let autoClicker = 0;

document.getElementById("autoClick").addEventListener("click", activateAutoClicker);


function activateAutoClicker() {
  if (autoClicker < 1 && donuts >= 100) {
    donuts -= 100;
    autoClicker ++;
  }
  console.log(autoClicker, donuts)

  donutCount.innerHTML = donuts; 

}



setInterval(autoClickedDonuts, 1000);

function autoClickedDonuts() {
  donuts += autoClicker
  donutCount.innerHTML = donuts;
}


// purchase donut multiplier

let donutMultiplier = 0;
var donutMultiplierCount = document.getElementById("donutMultiplierCost");
document.getElementById("donutMultiply").addEventListener("click", buyDonutMultiplier);
document.getElementById("alert").addEventListener("click", donutMultiplication);

function buyDonutMultiplier() {
  if (donutMultiplier > 0) {
    donutMultiplierCount = 10
  }
}

//function buyDonutMultiplier() {
 // if (donuts >= 10 && donutMultiplier <= 0) {
   // donutMultiplierCount = 10;
    //donuts -= 10;
    //donutMultiplier +=1;
  

function donutMultiplication() {
  Math.pow(1.2, donutMultiplier)
}





/*const donut = {donutCount : 0}; 
const autoClicker = {autoClickerCount : 0};
const donutMultiplier = {donutMultiplierCount : 0};
const container = (document.querySelector('.container').innerText =
  'mmmmmmmmm doughnuts.... ahhhhhhh!') ;

// create getters and setters for objects

Object.defineProperty(donut, "stats", {
  get : function () {this.donutCount = donut.donutCount;}
});

Object.defineProperty(donut, "reset", {
  get : function () {this.donutCount = 0;}
});
Object.defineProperty(donut, "increment", {
  get : function () {this.donutCount++;}
});
Object.defineProperty(donut, "add", {
  set : function (value) {this.donutCount += value;}
});
Object.defineProperty(donut, "subtract", {
  set: function (value) {this.donutCount -= value;}
});


Object.defineProperty(autoClicker, "reset", {
  get : function () {this.autoClickerCount = 0;}
});
Object.defineProperty(autoClicker, "increment", {
  get : function () {this.autoClickerCount++;}
});
Object.defineProperty(autoClicker, "add", {
  set : function (value) {this.autoClickerCount += value;}
});
Object.defineProperty(autoClicker, "subtract", {
  set: function (value) {this.autoClickerCount -= value;}
});


Object.defineProperty(donutMultiplier, "reset", {
  get : function () {this.donutMultiplierCount = 0;}
});
Object.defineProperty(donutMultiplier, "increment", {
  get : function () {this.donutMultiplierCount++;}
});
Object.defineProperty(donutMultiplier, "add", {
  set : function (value) {this.donutMultiplierCount += value;}
});
Object.defineProperty(donutMultiplier, "subtract", {
  set: function (value) {this.donutMultiplierCount -= value;}
});

// purchase items **if no autoclickers, cost is 100. after, cost increases by 10%

function purchaseAutoClicker() {
  if (this.donutCount < 100) {
    alert("You don't have enough donuts to purchase an AutoClicker")
  } else if (donut.donutCount >= 100 && autoClicker.autoClickerCount == 0) {
  donut.subtract = 100;
  autoClicker.increment; }}
  

// user interaction
var alertButton = document.getElementById('alert');
alertButton.onclick = function addDonut() {
  alert("+1 donut");
  donut.increment;
}

var countNumber= document.getElementById('counter');
countNumber.onclick = function checkDonutCount() {
  alert("You have " + countNumber + " donuts. Wow!");
}

var autoClickButton= document.getElementById('autoClick');
autoClickButton.onclick = function purchaseAutoClicker() {
  alert("You purchased an AutoClicker with 100 of your donuts. Let's get to work!")
}
*/