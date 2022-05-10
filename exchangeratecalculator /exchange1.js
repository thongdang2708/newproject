let currency_one = document.getElementById('currency-one');
let currency_two = document.getElementById('currency-two');
let amount_one = document.getElementById('amount-one');
let amount_two = document.getElementById('amount-two');
let rate = document.getElementById('rate');

currency_one.addEventListener('change', calculate);
currency_two.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
amount_two.addEventListener('input', calculate);



calculate();

async function calculate() {

    let currencyOne = currency_one.value;
    let currencyTwo = currency_two.value;

    let res = await fetch('https://api.exchangerate-api.com/v4/latest/' + currencyOne);

    let data = await res.json();

    let rateEl = data.rates[currencyTwo];

    rate.innerHTML = `1 ${currencyOne} : ${rateEl} ${currencyTwo}`;

    amount_two.value = rateEl;
};

let swapper = document.getElementById('swap-btn');

swapper.addEventListener('click', () => {
    let temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;

    calculate();
})