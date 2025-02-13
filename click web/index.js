let gem = document.querySelector('.gem-cost')
let parsedGem = parseFloat(gem.innerHTML)

let clickerCost = document.querySelector(".clicker-cost");
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let gpc = 1;


function incrementGem() {
    gem.innerHTML = Math.round(parsedGem+=gpc);
}

function buyClicker() {
    if (parsedGem >= parsedClickerCost) {
        gem.innerHTML = Math.round(parsedGem -= parsedClickerCost);

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 0.5).toFixed(2))       
        clickerIncrease.innerHTML = parsedClickerIncrease
        gpc+= parsedClickerIncrease

        parsedClickerCost *=1.5;
        clickerCost.innerHTML = Math.round(parsedClickerCost)
    }
}
