// singk=leton
//object.create


//object literals
const jsUser={                   //decleration of the objects
name:"Harsh",
"full name":"Harsh singh",
mySym:"mykey1",
age:19,
location:"Varanasi",
email:"Harsh96@gmail.com",
isLoggedIn: false,
lastLoginDays:["Monday","Tuesday"]

}                       

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);
// console.log(jsUser.mySym);

jsUser.email ="Harsh@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email="Harsh@microsoft.com"
// console.log(jsUser);


jsUser.greeting=function(){
    console.log("Hello JS uesr");

}
jsUser.greetingTwo=function(){
    console.log(`Hello JS uesr,${this.name}`);

}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
















































































































