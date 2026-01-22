// console.log("VAibhav")

const billAmount = document.querySelector('#bill')
const tip = document.querySelector("#tip")
const calculateButton = document.querySelector('#calculate')
const total = document.querySelector('#total')


calculateButton.addEventListener('click',() => {
    let totalBill = 0;
    let tipValue = parseFloat(tip.value) || 0;
    let billValue = parseFloat(billAmount.value) || 0;


    let tipInRupees = (tipValue/100) * billValue;
    console.log(tipValue/100)
    totalBill = (billValue + tipInRupees);
    total.innerHTML = totalBill.toFixed(2);
    // console.log('vaibhav')
} )

// function calculate(){
//     let tipValue = tip.value;
//     let billValue = billAmount.value;
//     let tipInRupees = (tipValue/100) * billValue;
//     totalBill = (billValue + tipInRupees);
//     total.innerHTML = 'totalBill';
//     console.log('vaibhav')
// }