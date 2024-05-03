#!/usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000; //Dollar
let myPin = 12345;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your Pin",
            type: "number"

        }
    ]
);

if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message:"please select option",
                type:"list",
                choices: ["withdraw" ,"check balance", "fastcash"]
            }
        ]
    );
        
    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "number",
                    message: "enter your amount"
                }
            ]
        );
        if (amountAns.amount <= myBalance){
            myBalance -= amountAns.amount;
            console.log(`Your remaining balnace is ${myBalance}`);
        }
        else {
            console.log('You have Insufficinet balance');
        }
        
        
    } else if (operationAns.operation === "check balance"){
        console.log(`Your balance is: ${myBalance}`);
    }
    else {
        let fastcashAmount = await inquirer.prompt(
            [
                {
                    name: "fastcash",
                    message: "select the amount you want to withdraw",
                    type: "list",
                    choices: [
                        "1000",
                        "3000",
                        "5000"
                    ]
                }
            ]
        )
         if (myBalance >= fastcashAmount.fastcash){
            myBalance -= fastcashAmount.fastcash
            console.log(`Your total balance is: ${myBalance}`);
         }
         else(
            console.log("Insufficient Balance")
         )
    }
    
        
}
else {
    console.log("Incorrect pin number");
}

  
   


