
const elPerimetr = document.querySelector('select[name="perimetr"]');
const elPower = document.querySelector('select[name="power"]');
const elStatus = document.querySelector('.status > span')

const run = (ev) => {
    const valuePerimetr = elPerimetr.value;
    const valuePower = elPower.value;


    if(valuePower === 'off') {
        elStatus.innerHTML = 'power off';
        return;
    }
    if(valuePerimetr === 'safe') {
        elStatus.innerHTML = 'safe';
        return;
    }
        elStatus.innerHTML = 'alarm';

}

elPerimetr.addEventListener('change',run);
elPower.addEventListener('change',run);

