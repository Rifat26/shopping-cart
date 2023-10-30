function updateMobileNumber(isIncrease){
    const mobileNumberField = document.getElementById('mobile-number-field');
    const mobileNumberString = mobileNumberField.value;
    const previousMobileNumber = parseFloat(mobileNumberString);

    let newMobileNumber;
    if(isIncrease == true){
        newMobileNumber = previousMobileNumber + 1;
    }
    else{
        newMobileNumber = previousMobileNumber - 1;
    }
    mobileNumberField.value = newMobileNumber;

    return newMobileNumber;
}

function updateMobileTotalPrice(newMobileNumber){
    const mobileTotalPrice = newMobileNumber * 1219;
    const mobileTotalElement = document.getElementById('mobile-total');
    mobileTotalElement.innerText = mobileTotalPrice;
}



document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newMobileNumber = updateMobileNumber(true);

    updateMobileTotalPrice(newMobileNumber);
    calculateSubTotal();
    
});

document.getElementById('btn-mobile-minus').addEventListener('click',function(){
    const newMobileNumber = updateMobileNumber(false);

    updateMobileTotalPrice(newMobileNumber);
    calculateSubTotal();
})