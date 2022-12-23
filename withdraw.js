// set event handler 
document.getElementById('withdraw-button').addEventListener('click',function(){
    // get the withdraw amount from text field 
    const newWithdraw =getInputFieldValueById('withdraw-field');
    // get the previousWithdraw with draw amount 
    const previousWithdraw =getElementValueById('withdraw');
    // calculate total withdraw 
    const totalWithdraw =newWithdraw + previousWithdraw;
    // set the total withdraw amount 
    setTextElementById('withdraw',totalWithdraw);
    // get the previous balanace
    const previouseBalance =getElementValueById('balance');
    // calculate current balance
    const currentBalance =previouseBalance -newWithdraw; 
    // current total balance after withdraw 
    setTextElementById('balance',currentBalance);



})