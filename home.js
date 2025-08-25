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