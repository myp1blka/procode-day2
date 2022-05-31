
const elKnopka_start = document.querySelector('select[name="knopka_start"]');
const elRefrigerator = document.querySelector('select[name="refrigerator_isnue"]');
const elKovbasa = document.querySelector('select[name="kovbasa_kuplena"]');
const elDverka = document.querySelector('select[name="dverka_vidkryta"]')
const elStatus = document.querySelector('.status')

const elTexto = document.querySelector('.Text_na_start');

const run = (ev) => {
    elStatus.innerHTML = '>';
    const valueRefrigerator = elRefrigerator.value;
    const valueKovbasa = elKovbasa.value;
    const valueDverka = elDverka.value;

    elStatus.insertAdjacentHTML('beforeend', 'Спробуємо поїсти ковбаси! =) <br><br>');
    if(valueRefrigerator === 'no') {
        elStatus.insertAdjacentHTML('beforeend', 'Але нажаль ми не маємо холодильника, тож і ковбаски ніде взяти :(<br>');
        return;
    }
    if(valueKovbasa === 'no') {
        elStatus.insertAdjacentHTML('beforeend', 'Але нажаль ніхто не закупив ковбаски :(<br>');
        return;
    }
    if(valueDverka === 'no') {
        elStatus.insertAdjacentHTML('beforeend', 'Відкриваємо дверцята..<br>');
    }
    else if(valueDverka === 'yes') {
        elStatus.insertAdjacentHTML('beforeend', 'От же ж якась падлюка не закрила дверцята!<br>');
    }
    elStatus.insertAdjacentHTML('beforeend', 'Дістаємо ковбаску..<br>');
    elStatus.insertAdjacentHTML('beforeend', 'Не забуваємо закрити дверцята!<br>');
    elStatus.insertAdjacentHTML('beforeend', 'Смакуємо смачненьку ковбаску<br>');

}

elTexto.addEventListener('click', run);

// кнопку оживити не вийшло
elKnopka_start.addEventListener('click', run);


