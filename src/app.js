const reason = document.querySelector('#input-reason');
const amount = document.querySelector('#input-amount');
const clear = document.querySelector('#clear');
const confirm = document.querySelector('#confirm');
const expensesList = document.querySelector('#expenses-list')

confirm.addEventListener('click', () => {
   const enteredReason = reason.value;
   const enteredAmount = amount.value;

   if (enteredReason.trim().length < 1 || enteredAmount <=0 || enteredAmount.trim().length < 1)
       return;
   const newItem = document.createElement('ion-item');
   newItem.textContent = enteredReason + ": $" + enteredAmount;

   expensesList.appendChild(newItem);
});
