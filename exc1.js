let prompt = require('prompt-sync')();

x = parseInt(prompt("Digite o valor de x: "));
y = parseInt(prompt("Digite o valor de y: "));

// let x = 40;
// let y = 10;

function calcPct(x, y){
    return (y/x) * 100;
}

let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);


