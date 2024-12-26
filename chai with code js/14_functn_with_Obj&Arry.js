
function calculateCartPrice(...num1){
return num1
}

//console.log(calculateCartPrice(200,400,500));

function calculateCartPrice(val1,val2,...num1){
return num1
}

//console.log(calculateCartPrice(200,400,500,600,800));

//+++++++++++++++++++++PASS THE OBJECT IN THE FUNCTION+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const user={
    username:"Harsh",
    price:99
}
function handleObject(anyobject){
    console.log(`Usernameis${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"Harsh",
    price: 500
})

//++++++++++++++++++ PASS THE ARRAYS INTO THE FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const mynewArray=[200,400,500,600,700]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,400,500,1000]));






























































