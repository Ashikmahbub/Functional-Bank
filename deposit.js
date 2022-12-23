
document.getElementById('btn-deposit').addEventListener('click',function (){
    // get the value from input text 
    const  newDepositAmount = getInputFieldValueById('deposit-field');

    // get the value from html element 
    const previousDepositTotal =getElementValueById('deposit-total');
    // calculate the deposit total 

    const depositTotal=newDepositAmount +previousDepositTotal;
    // set the deposit total 
    setTextElementById('deposit-total',depositTotal);
    // get the balance  
    const previouseBalance =getElementValueById('balance')
    // calculation total balance 
    const totalBalance =previouseBalance+newDepositAmount;
    // update the balanace 
    setTextElementById('balance',totalBalance);

     
    
     

})