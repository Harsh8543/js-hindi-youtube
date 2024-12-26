//decleration of the function

function saymyname(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("S");
    console.log("I");
    console.log("N");
    console.log("G");
    console.log("H");
}
//saymyname()

// function addtwonumber(num1,num2){
//     console.log(num1+num2);

// }

function addtwonumber(num1,num2){
//  let result=num1+num2
//  return result

return num1+num2
}

const result=addtwonumber(5,4)

//console.log("Result:",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter your name");
        return
    }
    return `${username}just logged in`

}
//console.log(loginUserMessage("Harsh"));
console.log(loginUserMessage())









