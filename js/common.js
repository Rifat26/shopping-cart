function getTextElementValueById(elementId){
    const mobileTotalElement = document.getElementById(elementId);
    const currentMobileTotalString = mobileTotalElement.innerText;
    const currentMobileTotal = parseInt(currentMobileTotalString);
    return currentMobileTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // calculate total
    const currentMobileTotal = getTextElementValueById('mobile-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentMobileTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal); 

    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tex-amount', taxAmount)

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}