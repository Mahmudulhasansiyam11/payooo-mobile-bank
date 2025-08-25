const validPin = 1234;
const couponNumber = 123;
const transactionData = [];
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
    handleToggle('add-money-parent');

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

    const transactionContainer = document.getElementById('transaction-parent');
    transactionContainer.innerText = " ";

    for(const data of transactionData){
        const div = document.createElement('div');
    div.innerHTML = `
    <div class="flex justify-between items-center bg-white p-3 rounded-2xl mt-4">
            <div class="flex justify-center gap-2">
                <div class="bg-gray-200 rounded-full w-10 h-10 p-2">
                    <img src="./assets/wallet1.png" alt="">
                </div>
                <div>
                    <h1 class="font-semibold text-[16px]">${data.name}</h1>
                    <p class="font-[300] text-[12px]">${data.date}</p>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    `;
    transactionContainer.appendChild(div);
    }

});

// Add Money 
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    const bank = getInputField('bank');
    const accountNumber = getInputField('add-money-bank-account-number');
    if(accountNumber.length != 11){
        alert('Please enter valid account number');
        return;
    }
    const amount = getInputFieldNumber('add-money-amount');
    const pin = getInputFieldNumber('add-money-pin');
    if(pin != validPin){
        alert("Please Enter Valid Pin");
        return;
    }

    const availableBalance = getText('available-balance');
    const totalBalance = amount + availableBalance;
    setText(totalBalance);

    const data = {
        name : 'Add Money',
        date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);
    
});

//cash out
document.getElementById('cash-out-button').addEventListener('click',function(e){
    e.preventDefault();
    const agentNumber = getInputField('cash-out-agent-number');
    if(agentNumber.length != 11){
        alert('Please Enter valid agent number');
        return;
    }
    const amount = getInputFieldNumber('cash-out-amount');
    const pin = getInputFieldNumber('cash-out-pin');

    if(pin != validPin){
        alert('Enter Valid Pin');
        return;
    }

    const availableBalance = getText('available-balance');

    if(amount<0 || amount > availableBalance){
        alert("Please enter valid amount number");
        return;
    }
    const totalBalance = availableBalance - amount;
    setText(totalBalance);

    const data = {
        name : 'Cash Out',
        date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);

});

// Transfer Money
document.getElementById('transfer-money-button').addEventListener('click',function(e){
    e.preventDefault();
    const agentNumber = getInputField('transfer-money-agent-number');
    if(agentNumber.length != 11){
        alert('Please Enter valid agent number');
        return;
    }
    const amount = getInputFieldNumber('transfer-money-amount');
    const pin = getInputFieldNumber('transfer-money-pin');

    if(pin != validPin){
        alert('Enter Valid Pin');
        return;
    }

    const availableBalance = getText('available-balance');

    if(amount<0 || amount > availableBalance){
        alert("Please enter valid amount number");
        return;
    }
    const totalBalance = availableBalance - amount;
    setText(totalBalance);

    const data = {
        name : 'Transfer Money',
        date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);

});

//get Bonus
document.getElementById('get-bonus-button').addEventListener('click',function(e){
    e.preventDefault();
    const coupon = getInputFieldNumber('get-bonus-coupon');
    const availableBalance = getText('available-balance');

    if(coupon === couponNumber){
        const totalBalance = availableBalance + 500;
        setText(totalBalance);
    }

    else{
        alert('please Enter Valid Coupon');
        return;
    }

    const data = {
        name : 'Get Bonus',
        date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);
});

// Pay Bill
document.getElementById('pay-bill-button').addEventListener('click', function(e){
    e.preventDefault();
    const bank = getInputField('pay-bill-bank');
    const accountNumber = getInputField('pay-bill-bank-account-number');
    if(accountNumber.length != 11){
        alert('Please enter valid account number');
        return;
    }
    const amount = getInputFieldNumber('pay-bill-amount');
    const pin = getInputFieldNumber('pay-bill-pin');
    if(pin != validPin){
        alert("Please Enter Valid Pin");
        return;
    }

    const availableBalance = getText('available-balance');

     if(amount<0 || amount > availableBalance){
        alert("Please enter valid amount number");
        return;
    }
    const totalBalance = availableBalance - amount;
    setText(totalBalance);

    const data = {
        name : 'Pay Bill',
        date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);
});

