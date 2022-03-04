// function foo(initialValue) {
//   let total = initialValue;
//   return function (adjustmentValue) {
//     total += adjustmentValue;
//     return total;
//   };
// }

// let bar = foo(10);
// let result = bar(-2);
// result += bar(5);
// result += bar(3);
// result += bar(-4);
// console.log(result);

function createBankAccount() {
  let transactions = [];

  return {
    balance: 0,

    deposit(amount) {
      this.balance += amount;
      transactions.push({ deposit: amount });
    },

    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        transactions.push({ withdrawal: amount });
      } else {
        console.log("overdrawn!");
      }
    },

    getMostRecentTransaction() {
      return Object.assign({}, transactions[transactions.length - 1]);
    }
  };
}

// let bankAccount = createBankAccount();
// console.log(bankAccount.getMostRecentTransaction());

let left = 1;
// let right = 5;

// console.log((function() {
//   return left + right;
// }()));


if (left === 1) {
  throw undefined
}