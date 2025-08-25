//get active button
function getActiveButton(id){
    const formBtn = document.getElementsByClassName('form-btn');
    for(const btn of formBtn){
        btn.classList.add("bg-gray-200");
    }
    document.getElementById(id).classList.remove('bg-gray-200')
    document.getElementById(id).classList.add('bg-amber-100')
}

document.getElementById('add-money').addEventListener('click', function(){
    getActiveButton('add-money');
});
document.getElementById('cash-out').addEventListener('click', function(){
    getActiveButton('cash-out');
});
document.getElementById('transfer-money').addEventListener('click', function(){
    getActiveButton('transfer-money');
});
document.getElementById('get-bonus').addEventListener('click', function(){
    getActiveButton('get-bonus');
});
document.getElementById('pay-bill').addEventListener('click', function(){
    getActiveButton('pay-bill');
});
document.getElementById('transactions').addEventListener('click', function(){
    getActiveButton('transactions');
});