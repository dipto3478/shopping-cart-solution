

document.getElementById('btn-case-plus').addEventListener('click', function(){

    const caseNumberField = getInputId(true,'case-number-field');
    
    const newCaseTotal = caseNumberField * 59;
    getTextIdValue('case-total', newCaseTotal);
    
    const phoneTotal = getTextId('phone-total');
    const caseTotal = getTextId('case-total');

    const newSubTotal = phoneTotal + caseTotal;
    getTextIdValue('sub-total', newSubTotal);

    const taxTotal = Math.round(newSubTotal * 0.05);
    getTextIdValue('tax-total', taxTotal);

    const finalTotal = newCaseTotal + taxTotal;
    getTextIdValue('final-total', finalTotal);


    
})
document.getElementById('btn-case-minus').addEventListener('click', function(){

    const caseNumberField = getInputId(false,'case-number-field');
    
    const newCaseTotal = caseNumberField * 59;
    getTextIdValue('case-total', newCaseTotal);

    const phoneTotal = getTextId('phone-total');
    const caseTotal = getTextId('case-total');

    const newSubTotal = phoneTotal + caseTotal;
    getTextIdValue('sub-total', newSubTotal);

    const taxTotal = Math.round(newSubTotal * 0.05);
    getTextIdValue('tax-total', taxTotal);

    const finalTotal = newCaseTotal + taxTotal;
    getTextIdValue('final-total', finalTotal);

})