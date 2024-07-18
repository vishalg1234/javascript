const name = "vishal"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('vice city')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
// ******output************
/*
A
{}
6
ADITYA
i
3
*/

const newString = gameName.substring(0,4)
console.log(newString);

const  string2 = gameName.substring(0,4)
console.log(string2)

const newStringOne = "   vishal    "
console.log(newStringOne);
console.log(newStringOne.trim()); 

const url = "https://yash.com.yash%20prajapat"

console.log(url.replace('%20','-'));
console.log(url.includes('yash'));
//*********output */
/*
vice
vice
   vishal    
vishal
https://yash.com.yash-prajapat
true
*/



