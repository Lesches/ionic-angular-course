const reason = document.querySelector('#input-reason');
const amount = document.querySelector('#input-amount');
const clear = document.querySelector('#clear');
const confirm = document.querySelector('#confirm');

confirm.addEventListener('click', () => {
   const enteredReason = reason.value;
   const enteredAmount = amount.value;

   if (enteredReason.trim().length < 1 || enteredAmount <=0 || enteredAmount.trim().length < 1)
       return;
   console.log(enteredReason, enteredAmount);

});
