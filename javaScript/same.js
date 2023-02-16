function getInputId(isIncrease, id){
    const phoneInputField = document.getElementById(id);
    const phoneInputString = phoneInputField.value;
    const phoneInput = parseInt(phoneInputString);

    let previousInput;

    if(isIncrease){
        previousInput = phoneInput + 1;
    }
    else{
        previousInput = phoneInput - 1;
    }
    phoneInputField.value = previousInput;
    return previousInput;
}


function getTextIdValue(id, value){
    const phoneTotal = document.getElementById(id);
    const phoneTotalString = phoneTotal.innerText;
    const getPhoneTotal = parseInt(phoneTotalString);
    phoneTotal.innerText = value;
    return getPhoneTotal;
}

function getTextId(id){
    const phoneTotal = document.getElementById(id);
    const phoneTotalString = phoneTotal.innerText;
    const getPhoneTotal = parseInt(phoneTotalString);
    return getPhoneTotal;
}

function getTextId(id) {
    const phoneTotal = document.getElementById(id);
    const phoneTotalString = phoneTotal.innerText;
    const getPhoneTotal = parseInt(phoneTotalString);
    return getPhoneTotal;
  }