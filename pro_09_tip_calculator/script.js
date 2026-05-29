const billInput = document.querySelector('#bill-input')
const customInput = document.querySelector('#custom-input')
const peopleInput = document.querySelector('#people-input')
const calculate = document.querySelector('#calculate')

const totalBill = document.querySelector('#total-bill')
const tipPerson = document.querySelector('#tip-person')
const billPerson = document.querySelector('#bill-person')

const greetings = document.querySelector('.greetings')
const button = document.querySelectorAll('.tip-btn')
let selectedTip = 0;

button.forEach((btn) => {
    btn.addEventListener('click', () => {
         button.forEach((b) => {
            b.classList.remove("active")
        })
        selectedTip = Number(btn.value)
        btn.classList.add("active")
    })
})

calculate.addEventListener('click', (e) => {
    e.preventDefault()

    let bill = Number(billInput.value)
    let customTip = Number(customInput.value)
    let people = Number(peopleInput.value)

    let finalTip = customTip || selectedTip
  
    if(!bill || !finalTip || !people){
        totalBill.classList.add("active")
        totalBill.textContent = "Please Enter Valid Value"
    }
    else{
        let tipCalculate =  (bill * finalTip) / 100 
        let billCalculate = bill + tipCalculate
        let perPersonTip = tipCalculate / people
        let perPersonBill = billCalculate / people
        totalBill.classList.add("active")
        tipPerson.classList.add("active")
        billPerson.classList.add("active")
        greetings.classList.add("active")
        totalBill.textContent = `₹${billCalculate.toFixed(2)}`
        tipPerson.textContent = `₹${perPersonTip.toFixed(2)}`
        billPerson.textContent = `₹${perPersonBill.toFixed(2)}`
    }
})
