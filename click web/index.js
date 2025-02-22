let gem = document.querySelector('.gem-cost')
let parsedGem = parseFloat(gem.innerHTML)

let clickerCost = document.querySelector(".clicker-cost");
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let pickaxeCost = document.querySelector(".pickaxe-cost");
let parsedPickaxeCost = parseFloat(pickaxeCost.innerHTML);
let pickaxeLevel = document.querySelector(".pickaxe-level")
let pickaxeIncrease = document.querySelector(".pickaxe-increase")
let parsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML)

let gpc = 1;

let gps = 0;


function incrementGem() {
    gem.innerHTML = Math.round(parsedGem+=gpc);
}

function buyClicker() {
    if (parsedGem >= parsedClickerCost) {
        gem.innerHTML = Math.round(parsedGem -= parsedClickerCost);

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.5).toFixed(2))       
        clickerIncrease.innerHTML = parsedClickerIncrease
        gpc+= parsedClickerIncrease

        parsedClickerCost *=1.5;
        clickerCost.innerHTML = Math.round(parsedClickerCost)
    }
}


function buyPickaxe() {
    if (parsedGem >= parsedPickaxeCost) {
        gem.innerHTML = Math.round(parsedGem -= parsedPickaxeCost);

        pickaxeLevel.innerHTML ++

        parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease * 1.0).toFixed(2.0))       
        pickaxeIncrease.innerHTML = parsedPickaxeIncrease
        gps+= parsedPickaxeIncrease

        parsedPickaxeCost *=1.5;
        pickaxeCost.innerHTML = Math.round(parsedPickaxeCost)
    }
}   

setInterval(()  => {
 parsedGem +=gps
 gem.innerHTML = Math.round(parsedGem)   
}, 1000)