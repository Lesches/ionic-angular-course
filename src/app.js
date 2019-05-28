const reason = document.querySelector('#input-reason');
const amount = document.querySelector('#input-amount');
const clear = document.querySelector('#clear');
const confirm = document.querySelector('#confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');
let totalExpenses = 0;

const clear = () =>{
    reason.value = '';
    amount.value = '';
};

confirm.addEventListener('click', () => {
   const enteredReason = reason.value;
   const enteredAmount = amount.value;

   if (enteredReason.trim().length < 1 || enteredAmount <=0 || enteredAmount.trim().length < 1) {
       alertCtrl.create({message: 'Please enter valid reason and amount!', header: 'Invalid inputs', buttons: ['Okay']}).then(alertElement =>{
           alertElement.present();
       });
       return;
   }
   const newItem = document.createElement('ion-item');
   newItem.textContent = enteredReason + ": $" + enteredAmount;

   expensesList.appendChild(newItem);
    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;
   clear();
});

clear.addEventListener('click', clear);
