function increase() {
    let num = document.getElementById('number');
    let toInc = Number(num.innerText) + 1;
    num.innerText = toInc;
}

function decrease() {
    let num = document.getElementById('number');
    let toDec = +num.innerText - 1;
    num.innerText = toDec;
}