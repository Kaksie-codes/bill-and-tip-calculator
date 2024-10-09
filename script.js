// assigning DOM elements to variables
const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.getElementById('custom-tip');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetBtn = document.getElementById('reset-btn');

// setting the default values to zero and number of people to one
let bill = 0;
let tipPercentage = 0;
let noOfpeople = parseFloat(peopleInput.value);;

let tipAmount;

customTipInput.addEventListener('click', () => {
    let customPercentage = prompt('Enter your custom percentage value');
    customPercentage = parseFloat(customPercentage);
    if(isNaN(customPercentage)){
        alert('Please enter a valid percentage');
        return;
    }else{
        tipPercentage = customPercentage;
        calculateBill();
    }
})

// peopleInput.value = noOfpeople;

billInput.addEventListener('keyup', (e) => {
    // console.log(e.keyCode);
    // console.log(e.key);
    billInput.value = billInput.value.trim();
    console.log({ billInput: billInput.value});
    console.log({ lenght: billInput.value.length});

    if(billInput.value.length < 1 || isNaN(billInput.value)){
        alert("Please enter a valid Bill");
    }else{
        bill = parseFloat(billInput.value);
        calculateBill();
    }  
})
peopleInput.addEventListener('keyup', (e) => {    
    peopleInput.value = peopleInput.value.trim();

    if(peopleInput.value.lenght < 0 || isNaN(peopleInput.value)){
        alert("Please enter a valid number of persons");
    }else{
        noOfpeople = parseFloat(peopleInput.value);
        console.log({noOfpeople});
        console.log({bill});
        console.log({tipPercentage});
        calculateBill();
    }  
})


function calculateBill(){
    console.log('calculating bill');
    
    if(isNaN(bill) || isNaN(noOfpeople)){
        return alert("Enter valid data");        
    }
    tipAmount = (bill * (tipPercentage / 100))/noOfpeople;
    const totalAmount = (bill)/noOfpeople + tipAmount;
    tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
    resetBtn.disabled = false;
}

resetBtn.addEventListener('click', () => {
    bill = 0;
    tipPercentage = 0;
    noOfpeople = 1;
    billInput.value = '';
    peopleInput.value = noOfpeople;
    tipAmountDisplay.textContent = '$0.00';
    totalAmountDisplay.textContent = '$0.00';
    resetBtn.disabled = true;   
})

// tipButtons.forEach(tipButton => {
//     // console.log(tipButton.textContent.slice(0, -1));
//     tipButton.addEventListener('click', () => {
//         tipPercentage = parseFloat(tipButton.textContent.slice(0, -1));
//         calculateBill();
//     })
// })

for(let tipButton of tipButtons){
    tipButton.addEventListener('click', () => {
        tipPercentage = parseFloat(tipButton.textContent.slice(0, -1));
        calculateBill();
    })  
}