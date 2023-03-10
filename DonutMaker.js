document.getElementById("alert").addEventListener("click",
console.log("clicked"))
const some_action = () => {
  console.log("clicked")
}
document.getElementById("alert").addEventListener("click", some_action);

document.getElementById("reset").addEventListener("click", reset);

function reset() {
  donuts = 0;
  autoClicker = 0;
  donutMultiplier = 0;
  oldCost = 100;
  donutMultiplierCost = 10;
  updateAutoClickInfo()
  updateMultiplierInfo()
}

let donuts = Math.ceil(0);

let donutCount = document.getElementById("counter");
document.getElementById("alert").addEventListener("click", makeDonut);

let refreshDonutCount = function() {
donutCount.innerHTML = Math.ceil(donuts);
}

function makeDonut() {
  if(donutMultiplier > 0) {
  donuts += Math.pow(1.2, donutMultiplier)
  } else if(donutMultiplier == 0) {
    donuts += 1;
  }
  console.log(donuts)
  refreshDonutCount()
}

let autoClicker = Math.ceil(0);
let oldCost = Math.ceil(100);

document.getElementById("autoClick").addEventListener("click", activateAutoClicker);
let clickerCount = document.getElementById("autoClickerCount");
let clickerCost = document.getElementById("autoClickerCost");
clickerCost.innerHTML = Math.ceil(oldCost);
clickerCount.innerHTML = Math.ceil(autoClicker);

function updateAutoClickInfo() {
  refreshDonutCount();  
  clickerCount.innerHTML = Math.ceil(autoClicker);
  clickerCost.innerHTML = Math.ceil(oldCost);
}

function activateAutoClicker() {
  if (donuts >= oldCost) {
    donuts -= oldCost;
    autoClicker +=1;
    oldCost = Math.ceil(oldCost * 1.1);
  } else {
    console.log("you don't have enough donuts!");
  }
  console.log(autoClicker, donuts)
  updateAutoClickInfo()
}

setInterval(autoClickedDonuts, 1000);

function autoClickedDonuts() {
  if(autoClicker > 0) {
  donuts += autoClicker + Math.pow(1.2, donutMultiplier);
  } 
  refreshDonutCount()
}

let donutMultiplier = 0;
let donutMultiplierCost = 10;

document.getElementById("donutMultiply").addEventListener("click", buyDonutMultiplier);
let donutMultiplierCount = document.getElementById("multiplier");
let multiplierCost = document.getElementById("multiplierCost");
donutMultiplierCount.innerHTML = donutMultiplier;
multiplierCost.innerHTML = donutMultiplierCost;

function updateMultiplierInfo() {
  donutMultiplierCount.innerHTML = Math.ceil(donutMultiplier);
  multiplierCost.innerHTML = Math.ceil(donutMultiplierCost);
  refreshDonutCount()
}

function buyDonutMultiplier() {
  if (donuts >= donutMultiplierCost) {
    donuts -= donutMultiplierCost;
    donutMultiplier += 1;
    donutMultiplierCost = donutMultiplierCost * 1.1;
    updateMultiplierInfo()
  }
  else {
    console.log("you don't have enough donuts!");
  }
  refreshDonutCount()
  console.log(donuts, autoClicker, donutMultiplier);
}
