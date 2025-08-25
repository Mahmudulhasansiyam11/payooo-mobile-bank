document.getElementById('login-button').addEventListener('click', function(e){
    e.preventDefault();
    const validMobileNumber = 12345678910;
    const validPinNumber = 1234;

    const mobileNumber = parseInt(document.getElementById('login-mobile-number').value);
    const pinNumber = parseInt(document.getElementById('login-pin-number').value);

    if(validMobileNumber === mobileNumber && validPinNumber === pinNumber){
        window.location.href = './home.html';
    }
    else{
        alert('Invalid Credential');
    }

});