function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);

    const inputFieldValueString =inputField.value;

    const inputFieldToNumber =parseFloat(inputFieldValueString);
    inputField.value ='';
    return inputFieldToNumber;
}
function getElementValueById(elementId){
    const textelement = document.getElementById(elementId);
    const elementStringValue = textelement.innerText;
    const textElementValue= parseFloat(elementStringValue);
    return textElementValue;
}

function setTextElementById (elementId,newValue){
    const textelement =document.getElementById(elementId);
    textelement.innerText =newValue;

}
 