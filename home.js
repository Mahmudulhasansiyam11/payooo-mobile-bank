const validPin = 1234;
//get active button
function getActiveButton(id){
    const formBtn = document.getElementsByClassName('form-btn');
    for(const btn of formBtn){
        btn.classList.add("bg-gray-200");
    }
    document.getElementById(id).classList.remove('bg-gray-200')
    document.getElementById(id).classList.add('bg-amber-100')
}

// handle toggle
function handleToggle(id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

//get inputfieldnumber
function getInputFieldNumber(id){
    const element = document.getElementById(id);
    const elementValue = element.value;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}

//get inputfiled
function getInputField(id){
    const element = document.getElementById(id);
    const elementValue = element.value;
    return elementValue;
}

//get Text
function getText(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}

//set Text
function setText(value){
    const availableBalance = document.getElementById('available-balance');
    availableBalance.innerText = value;
}


document.getElementById('add-money').addEventListener('click', function(){
    getActiveButton('add-money');
    handleToggle('add-money-parent')
    
});
document.getElementById('cash-out').addEventListener('click', function(){
    getActiveButton('cash-out');
    handleToggle('cash-out-parent');
});
document.getElementById('transfer-money').addEventListener('click', function(){
    getActiveButton('transfer-money');
    handleToggle('transfer-money-parent');
});
document.getElementById('get-bonus').addEventListener('click', function(){
    getActiveButton('get-bonus');
    handleToggle('get-bonus-parent');
});
document.getElementById('pay-bill').addEventListener('click', function(){
    getActiveButton('pay-bill');
    handleToggle('pay-bill-parent');
});
document.getElementById('transactions').addEventListener('click', function(){
    getActiveButton('transactions');
    handleToggle('transaction-parent');
});

// Add Money 
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    const bank = getInputField('bank');
    const accountNumber = getInputField('add-money-bank-account-number');
    if(accountNumber.length != 11){
        alert('Please enter valid account number');
    }
    const amount = getInputFieldNumber('add-money-amount');
    console.log(amount)
    const pin = getInputFieldNumber('add-money-pin');
    if(pin != validPin){
        alert("Please Enter Valid Pin");
    }

    const availableBalance = getText('available-balance');
    console.log(availableBalance)
    const totalBalance = amount + availableBalance;
    setText(totalBalance);
});