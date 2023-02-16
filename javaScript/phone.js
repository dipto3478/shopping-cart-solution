

document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const phoneInputField = getInputId(true, "phone-number-field");

    const newPhoneTotal = phoneInputField * 1219;
    getTextIdValue("phone-total", newPhoneTotal);

    const phoneTotal = getTextId("phone-total");
    const caseTotal = getTextId("case-total");

    const newSubTotal = phoneTotal + caseTotal;
    getTextIdValue("sub-total", newSubTotal);

    const taxTotal = Math.round(newSubTotal * 0.05);
    getTextIdValue('tax-total', taxTotal);

    const finalTotal = newSubTotal + taxTotal;
    getTextIdValue('final-total', finalTotal);

  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const phoneInputField = getInputId(false, "phone-number-field");

    const newPhoneTotal = phoneInputField * 1219;
    getTextIdValue("phone-total", newPhoneTotal);

    const phoneTotal = getTextId("phone-total");
    const caseTotal = getTextId("case-total");

    const newSubTotal = phoneTotal + caseTotal;
    getTextIdValue("sub-total", newSubTotal);

    const taxTotal = Math.round(newSubTotal * 0.05);
    getTextIdValue('tax-total', taxTotal);

    const finalTotal = newSubTotal + taxTotal;
    getTextIdValue('final-total', finalTotal);
  });
