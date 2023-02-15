// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string

//we are turning the string array into an array
let myLeads = `["www.awesomelead.com"]`;
myLeads = JSON.parse(myLeads);
//here we are pushing a new value to the array
myLeads.push("www.helloworld.com");
console.log(myLeads);

//this turns the array into a string again
myLeads = JSON.stringify(myLeads);
console.log(typeof myLeads);
