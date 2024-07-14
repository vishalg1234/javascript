const account_Id = 144453
let accountEmail = "Vishal.com"
var accountPassword = "12345"
accountCity = "Orai"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "232323232"
accountCity = "Bengaluru"

console.log(account_Id);


/* 

Prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountEmail,accountPassword,accountCity,accountState]);