
let test1 = 40;
let test2 = 20;
let test3 = 10;

    if(test1>11) {
    console.log('abc1');

}else if(test1<=30) {
    console.log('abc2');

}else if(test1 !== 10) {
    console.log('abc3');
}
else (console.log('else'));
console.log('ghb');




let el1 = document.querySelector('input[name="second-input"]');
el1.addEventListener('change', (ev) => {
const value = Number(ev.target.value);
console.log(typeof value);

if(isNaN(value)) {

    el1.classList.add('err-style');
return;
}else  { 
    el1.classList.remove('err-style');
}


if(value === '1'){
    console.log(555);
}

const elPerimetr = document.querySelector('input[name="perimetr"]');
const elPower = document.querySelector('input[name="power"]');
const elStatus = document.querySelector('.status' > span)

const run = (ev) => {
    const valuePerimetr = elPerimetr.value;
    const valuePower = elPower.value;
    const elStatus = document.querySelector('input[name')

    if(valuePower === 'off') {
        elStatus.innerHTML = 'power off';
        return;
    }
    if(valuePerimetr === 'alarm') {
        elStatus.innerHTML = 'alarm';
        return;
    }

}

elPerimetr.addEventListener('change',run);
elPower.addEventListener('change',run);

})