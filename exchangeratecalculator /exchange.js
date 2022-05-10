let currencyOne = document.getElementById('currency-one');
let currencyTwo = document.getElementById('currency-two');
let amount_one = document.getElementById('amount-one');
let amount_two = document.getElementById('amount-two');
let rate = document.getElementById('rate');
let swap = document.getElementById('swap');

calculate();
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
amount_two.addEventListener('input', calculate);
async function calculate() {

    let currency_One = currencyOne.value;
    let currency_Two = currencyTwo.value;
    let res = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency_One}`);

    let data = await res.json();

    let rateEl = data.rates[currency_Two];

    rate.innerText = `1 ${currency_One} : ${rateEl} ${currency_Two} `;

    amount_two.value = rateEl;


};

swap.addEventListener('click', () => {

    let temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
});

console.log(swap);
