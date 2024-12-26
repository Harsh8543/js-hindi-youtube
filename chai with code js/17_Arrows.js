const user = {
    username:"Harsh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="Ramesh"
// user.welcomeMessage()
//console.log(this);


// function chai(){
//     let usernmae="Harsh"
//     console.log(this.username);
// }
// chai()

// const chai= function (){
//     let usernmae="Harsh"
//     console.log(this.username);
// }

// chai()

//+++++++++++++++ARROW FUNCTION+++++++++++++

// const chai=  () => {
//     let usernmae="Harsh"
//     console.log(this);
// }

// chai()


// const addTwo=(num1 , num2)=> {
//     return num1+num2
// }
// console.log(addTwo(3,4));


//   EXPLICT RETURN

// const addTwo=(num1 , num2)=> {
//     return num1+num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1,num2)=> {
//     return num1+ num2
//}


//  IMPLICIT RETURN

// const addTwo=(num1,num2)=> num1+num2

// const addTwo=(num1,num2)=> (num1+num2)
// console.log(addTwo(3,4));


const addTwo=(num1,num2)=> ({username:"Harsh"})
console.log(addTwo(3,4));












