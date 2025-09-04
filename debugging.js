const fs = require("fs");

class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
        console.log("Welcome To Stanbic Bank")
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be above ", amount)
        }
        this.balance += amount;
        console.log(this.balance)
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("You currently have insuffient balance on your account", amount)
        }
        this.balance -= amount;
        console.log(this.balance)
    }
}
try {
    const account = new BankAccount(100);
    account.deposit(100)
    // account.deposit(-500)
    account.withdraw(500)
} catch (error) {
    //fs.writeFileSync("error_log.txt", error.stack + "\n")
    fs.appendFileSync("error_log", error.stack + "\n")
    console.log("Trace back has been written")
}
finally{
    console.log('Thank your choosing Stanbic Bank')
}
