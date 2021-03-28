function increase() {
    let num = document.getElementById('number');
    let toInc = +num.value + 1;
    num.value = toInc;
}

function decrease() {
    let num = document.getElementById('number');
    let toInc = +num.value - 1;
    num.value = toInc;
}